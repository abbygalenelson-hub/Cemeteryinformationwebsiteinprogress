import { useRef, useState, useCallback, useEffect } from 'react';
import { plots } from '../data/cemetery-data';
import cemeteryMapImage from 'figma:asset/2eec3424fdf25d1a1bb89f91a8910f31672bb1f7.png';

interface PlacedRect {
  plotIndex: number; // 0-based index into plots[]
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
}

interface DragState {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
}

const TOTAL = plots.length; // 75

export function PlotPlacementTool() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [placed, setPlaced] = useState<PlacedRect[]>([]);
  const [drag, setDrag] = useState<DragState | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  // Keep containerRect in sync
  const updateContainerRect = useCallback(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    updateContainerRect();
    window.addEventListener('resize', updateContainerRect);
    window.addEventListener('scroll', updateContainerRect, true);
    return () => {
      window.removeEventListener('resize', updateContainerRect);
      window.removeEventListener('scroll', updateContainerRect, true);
    };
  }, [updateContainerRect, imgLoaded]);

  const clientToPercent = useCallback((clientX: number, clientY: number) => {
    if (!containerRect) return { x: 0, y: 0 };
    const x = ((clientX - containerRect.left) / containerRect.width) * 100;
    const y = ((clientY - containerRect.top) / containerRect.height) * 100;
    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    };
  }, [containerRect]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (placed.length >= TOTAL) return;
    e.preventDefault();
    const { x, y } = clientToPercent(e.clientX, e.clientY);
    setDrag({ startX: x, startY: y, currentX: x, currentY: y });
  }, [placed.length, clientToPercent]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!drag) return;
    const { x, y } = clientToPercent(e.clientX, e.clientY);
    setDrag(d => d ? { ...d, currentX: x, currentY: y } : null);
  }, [drag, clientToPercent]);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (!drag) return;
    const { x, y } = clientToPercent(e.clientX, e.clientY);

    const xPct = Math.min(drag.startX, x);
    const yPct = Math.min(drag.startY, y);
    const wPct = Math.abs(x - drag.startX);
    const hPct = Math.abs(y - drag.startY);

    // Ignore tiny accidental clicks (less than 0.5% of image)
    if (wPct > 0.5 && hPct > 0.5) {
      setPlaced(prev => [
        ...prev,
        { plotIndex: prev.length, xPct, yPct, wPct, hPct },
      ]);
    }
    setDrag(null);
  }, [drag, clientToPercent]);

  const handleUndo = () => setPlaced(p => p.slice(0, -1));
  const handleClear = () => setPlaced([]);

  const handleCopy = async () => {
    const output = placed.map(r => ({
      plotId: plots[r.plotIndex].id,
      plotNumber: plots[r.plotIndex].number,
      xPct: parseFloat(r.xPct.toFixed(3)),
      yPct: parseFloat(r.yPct.toFixed(3)),
      wPct: parseFloat(r.wPct.toFixed(3)),
      hPct: parseFloat(r.hPct.toFixed(3)),
    }));
    const text = JSON.stringify(output, null, 2);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: open in a new tab as a data URL
      const blob = new Blob([text], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }
  };

  // Preview rect while dragging
  const previewRect = drag
    ? {
        xPct: Math.min(drag.startX, drag.currentX),
        yPct: Math.min(drag.startY, drag.currentY),
        wPct: Math.abs(drag.currentX - drag.startX),
        hPct: Math.abs(drag.currentY - drag.startY),
      }
    : null;

  const nextPlot = placed.length < TOTAL ? plots[placed.length] : null;
  const progress = placed.length;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 px-6 py-3 flex items-center gap-4 flex-wrap">
        <div>
          <h1 className="text-lg" style={{ margin: 0 }}>Plot Placement Tool</h1>
          <p className="text-gray-400 text-sm">Click and drag on the map to mark each burial plot in order.</p>
        </div>
        <div className="ml-auto flex items-center gap-3 flex-wrap">
          {/* Progress */}
          <div className="text-center px-4 py-1 bg-gray-800 rounded-lg">
            <span className="text-2xl font-mono font-bold text-amber-400">{progress}</span>
            <span className="text-gray-400 text-sm"> / {TOTAL}</span>
          </div>
          <button
            onClick={handleUndo}
            disabled={placed.length === 0}
            className="px-3 py-1.5 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed text-sm transition-colors"
          >
            ↩ Undo Last
          </button>
          <button
            onClick={handleClear}
            disabled={placed.length === 0}
            className="px-3 py-1.5 rounded bg-red-900 hover:bg-red-800 disabled:opacity-40 disabled:cursor-not-allowed text-sm transition-colors"
          >
            ✕ Clear All
          </button>
          <button
            onClick={handleCopy}
            disabled={placed.length === 0}
            className="px-4 py-1.5 rounded bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold transition-colors"
          >
            {copied ? '✓ Copied!' : '⎘ Copy Coordinates'}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Map area */}
        <div className="flex-1 overflow-auto p-4 flex items-start justify-center">
          <div
            ref={containerRef}
            className="relative select-none"
            style={{ cursor: placed.length >= TOTAL ? 'default' : 'crosshair' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => drag && setDrag(null)}
          >
            <img
              ref={imgRef}
              src={cemeteryMapImage}
              alt="Cemetery Map"
              className="block max-w-none"
              style={{ maxWidth: '900px', width: '100%' }}
              onLoad={() => {
                setImgLoaded(true);
                updateContainerRect();
              }}
              draggable={false}
            />

            {/* SVG overlay */}
            {imgLoaded && (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Already placed rects */}
                {placed.map((r, i) => (
                  <g key={i}>
                    <rect
                      x={r.xPct} y={r.yPct}
                      width={r.wPct} height={r.hPct}
                      fill="rgba(251,191,36,0.25)"
                      stroke="rgba(251,191,36,0.9)"
                      strokeWidth="0.3"
                      vectorEffect="non-scaling-stroke"
                    />
                    <text
                      x={r.xPct + r.wPct / 2}
                      y={r.yPct + r.hPct / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="1.4"
                      fontWeight="bold"
                      style={{ paintOrder: 'stroke', stroke: 'rgba(0,0,0,0.7)', strokeWidth: '0.5' }}
                    >
                      {plots[r.plotIndex].number}
                    </text>
                  </g>
                ))}

                {/* Live preview rect while dragging */}
                {previewRect && (
                  <rect
                    x={previewRect.xPct} y={previewRect.yPct}
                    width={previewRect.wPct} height={previewRect.hPct}
                    fill="rgba(251,191,36,0.15)"
                    stroke="rgba(251,191,36,0.8)"
                    strokeWidth="0.3"
                    strokeDasharray="1 0.5"
                    vectorEffect="non-scaling-stroke"
                  />
                )}
              </svg>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-64 bg-gray-900 border-l border-gray-700 flex flex-col overflow-hidden">
          {/* Next up */}
          <div className="p-4 border-b border-gray-700">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Next to place</p>
            {nextPlot ? (
              <div className="bg-amber-900/40 border border-amber-600/50 rounded-lg p-3">
                <p className="font-mono font-bold text-amber-300">{nextPlot.number}</p>
                <p className="text-xs text-gray-400">Section {nextPlot.section} · Plot #{placed.length + 1}</p>
              </div>
            ) : (
              <div className="bg-green-900/40 border border-green-600/50 rounded-lg p-3">
                <p className="font-bold text-green-300">All {TOTAL} plots placed!</p>
                <p className="text-xs text-gray-400">Hit Copy Coordinates above.</p>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="px-4 py-3 border-b border-gray-700">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{Math.round((progress / TOTAL) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progress / TOTAL) * 100}%` }}
              />
            </div>
          </div>

          {/* Placed list */}
          <div className="flex-1 overflow-y-auto">
            <p className="text-xs text-gray-400 uppercase tracking-wider px-4 pt-3 pb-1">Placed plots</p>
            {placed.length === 0 && (
              <p className="text-gray-600 text-sm px-4 py-2">None yet — draw your first rectangle.</p>
            )}
            <ul className="divide-y divide-gray-800">
              {[...placed].reverse().map((r, revIdx) => {
                const i = placed.length - 1 - revIdx;
                const plot = plots[r.plotIndex];
                return (
                  <li key={i} className="px-4 py-2 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-mono text-amber-300">{plot.number}</p>
                      <p className="text-xs text-gray-500">
                        {r.xPct.toFixed(1)}%, {r.yPct.toFixed(1)}%
                        &nbsp;·&nbsp;{r.wPct.toFixed(1)}×{r.hPct.toFixed(1)}
                      </p>
                    </div>
                    {i === placed.length - 1 && (
                      <span className="text-xs bg-amber-800/60 text-amber-300 px-1.5 py-0.5 rounded">latest</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Instructions */}
          <div className="p-4 border-t border-gray-700 text-xs text-gray-500 space-y-1">
            <p>① Click & drag to draw a box over each orange plot square.</p>
            <p>② Plots are assigned in order: A-001, A-002 … C-025.</p>
            <p>③ Hit <span className="text-amber-400">Copy Coordinates</span> when done and paste back to me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
