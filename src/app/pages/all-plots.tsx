import { Link } from 'react-router';
import { plots, people } from '../data/cemetery-data';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Users } from 'lucide-react';
import { Input } from '../components/ui/input';
import { useState, useMemo } from 'react';

function naturalPlotSort(a: string, b: string) {
  const aIsNum = /^\d+$/.test(a);
  const bIsNum = /^\d+$/.test(b);

  if (aIsNum && bIsNum) return Number(a) - Number(b);
  if (a === 'UNK') return 1;
  if (b === 'UNK') return -1;

  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function sectionLabel(section: string) {
  const normalized = section.trim().toLowerCase();

  if (normalized === 'front') return 'Front Section';
  if (normalized === 'back') return 'Back Section';
  if (normalized === 'unknown' || normalized === 'unk') return 'Unknown / Unlocated';
  return section;
}

export function AllPlots() {
  const [search, setSearch] = useState('');

  const filteredPlots = useMemo(() => {
    if (!search) return plots;

    const searchLower = search.toLowerCase();

    return plots.filter((plot) => {
      const occupants = people.filter((person) => person.plotId === plot.id);

      return (
        plot.number.toLowerCase().includes(searchLower) ||
        plot.section.toLowerCase().includes(searchLower) ||
        occupants.some((person) => person.name.toLowerCase().includes(searchLower))
      );
    });
  }, [search]);

  const sortedSections = useMemo(() => {
    const priority = ['Front', 'Back', 'Unknown', 'UNK'];

    return Array.from(new Set(plots.map((p) => p.section))).sort((a, b) => {
      const aIndex = priority.indexOf(a);
      const bIndex = priority.indexOf(b);

      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;

      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
  }, []);

  const totalBurials = people.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-2">All Plots</h1>
        <p className="text-black mb-2">
          Highland Creek Wesleyan Methodist Cemetery, Scarborough
        </p>
        <p className="text-black mb-6">
          Browse the recorded burial plots and documented occupants in the cemetery.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                <MapPin className="size-3.5" />
                Plots
              </div>
              <div className="text-2xl font-semibold">72</div>
              <div className="text-xs text-gray-400 mt-1">
                71 located and attributed, 1 unlocated but attributed
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                <Users className="size-3.5" />
                Confirmed interments
              </div>
              <div className="text-2xl font-semibold">123</div>
              <div className="text-xs text-gray-400 mt-1">
                Individuals documented in the reconciled burial roster
              </div>
            </CardContent>
          </Card>

          
        </div>

        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search by plot number, section, or person..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="space-y-8">
          {sortedSections.map((section) => {
            const sectionPlots = filteredPlots
              .filter((p) => p.section === section)
              .sort((a, b) => naturalPlotSort(a.number, b.number));

            if (sectionPlots.length === 0) return null;

            return (
              <div key={section}>
                <h2 className="mb-4">{sectionLabel(section)}</h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {sectionPlots.map((plot) => {
                    const occupants = people.filter((p) => p.plotId === plot.id);

                    return (
                      <Link key={plot.id} to={`/plot/${plot.id}`}>
                        <Card className="hover:shadow-md transition-shadow h-full">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <MapPin className="size-4 text-blue-600" />
                                <span className="font-semibold">Plot {plot.number}</span>
                              </div>

                              <div
                                className={`px-2 py-1 rounded text-xs ${
                                  occupants.length > 0
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {occupants.length > 0 ? 'Documented burial' : 'No burial recorded'}
                              </div>
                            </div>

                            <div className="text-sm text-gray-500 mb-3">
                              {sectionLabel(plot.section)}
                            </div>

                            {occupants.length > 0 && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Users className="size-4" />
                                <span>
                                  {occupants.length} {occupants.length === 1 ? 'person' : 'people'}
                                </span>
                              </div>
                            )}

                            {occupants.length > 0 && (
                              <div className="mt-3 pt-3 border-t text-sm">
                                {occupants.slice(0, 3).map((person) => (
                                  <div key={person.id} className="text-gray-700">
                                    {person.name}
                                  </div>
                                ))}

                                {occupants.length > 3 && (
                                  <div className="text-gray-500 text-xs mt-1">
                                    +{occupants.length - 3} more
                                  </div>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {filteredPlots.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No plots or burials found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}