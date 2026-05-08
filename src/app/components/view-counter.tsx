import { useEffect, useState } from 'react';

// Free hit-counter service (no API key). Each GET to /hit/<ns>/<key> increments and returns the count.
const COUNTER_BASE = 'https://abacus.jasoncameron.dev';
const NAMESPACE = 'hcwmc-database';
const SEEN_KEYS_STORAGE = 'hcwmc-seen-location-keys';

type LocationInfo = {
  country: string;
  countryCode: string;
  city: string;
};

type LocationCount = {
  key: string;
  label: string;
  group: 'Canada' | 'World';
  count: number;
};

const safeKey = (s: string) => s.replace(/[^a-zA-Z0-9_-]/g, '_');

async function fetchVisitorLocation(): Promise<LocationInfo | null> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) return null;
    const data = await res.json();
    return {
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || '',
      city: data.city || 'Unknown',
    };
  } catch {
    return null;
  }
}

async function bumpCounter(key: string): Promise<number> {
  try {
    const res = await fetch(`${COUNTER_BASE}/hit/${NAMESPACE}/${encodeURIComponent(key)}`);
    const json = await res.json();
    return typeof json.value === 'number' ? json.value : 0;
  } catch {
    return 0;
  }
}

async function readCounter(key: string): Promise<number> {
  try {
    const res = await fetch(`${COUNTER_BASE}/get/${NAMESPACE}/${encodeURIComponent(key)}`);
    const json = await res.json();
    return typeof json.value === 'number' ? json.value : 0;
  } catch {
    return 0;
  }
}

function loadSeenKeys(): { key: string; label: string; group: 'Canada' | 'World' }[] {
  try {
    const raw = localStorage.getItem(SEEN_KEYS_STORAGE);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveSeenKey(entry: { key: string; label: string; group: 'Canada' | 'World' }) {
  const all = loadSeenKeys();
  if (!all.find((e) => e.key === entry.key)) {
    all.push(entry);
    localStorage.setItem(SEEN_KEYS_STORAGE, JSON.stringify(all));
  }
}

export function ViewCounter() {
  const [total, setTotal] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<LocationCount[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const totalCount = await bumpCounter('total');
      const loc = await fetchVisitorLocation();
      if (loc) {
        const isCanada = loc.countryCode === 'CA';
        const label = isCanada ? `${loc.city}, Canada` : loc.country;
        const key = isCanada ? `ca_${safeKey(loc.city)}` : `country_${safeKey(loc.country)}`;
        const group: 'Canada' | 'World' = isCanada ? 'Canada' : 'World';
        await bumpCounter(key);
        saveSeenKey({ key, label, group });
      }

      const seen = loadSeenKeys();
      const counts = await Promise.all(
        seen.map(async (s) => ({ ...s, count: await readCounter(s.key) }))
      );
      counts.sort((a, b) => b.count - a.count);

      if (!cancelled) {
        setTotal(totalCount);
        setBreakdown(counts);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const canada = breakdown.filter((b) => b.group === 'Canada');
  const world = breakdown.filter((b) => b.group === 'World');

  return (
    <div className="w-48 shrink-0 rounded-lg border border-gray-300 bg-white p-3 shadow-sm text-black">
      <div className="text-sm mb-1">Page Views</div>
      <div className="mb-2">{total ?? '—'}</div>
      <div className="text-xs mb-1 text-gray-600">By location</div>
      <div className="max-h-32 overflow-y-auto pr-1 text-xs">
        {loading && <div className="text-gray-500">Loading…</div>}
        {!loading && breakdown.length === 0 && (
          <div className="text-gray-500">No location data yet.</div>
        )}
        {canada.length > 0 && (
          <div className="mb-2">
            <div className="text-gray-700">Canadian cities</div>
            <ul>
              {canada.map((b) => (
                <li key={b.key} className="flex justify-between">
                  <span className="truncate mr-1">{b.label}</span>
                  <span>{b.count}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {world.length > 0 && (
          <div>
            <div className="text-gray-700">Other countries</div>
            <ul>
              {world.map((b) => (
                <li key={b.key} className="flex justify-between">
                  <span className="truncate mr-1">{b.label}</span>
                  <span>{b.count}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
