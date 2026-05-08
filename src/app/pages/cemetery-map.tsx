import { useNavigate, Link } from 'react-router';
import { useRef, useState, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';
import { plots } from '../data/cemetery-data';
import { Button } from '../components/ui/button';
import { ViewCounter } from '../components/view-counter';
import { detectOrangeRects, DetectedRect } from '../utils/detect-orange-rects';
import cemeteryMapImage from 'figma:asset/2eec3424fdf25d1a1bb89f91a8910f31672bb1f7.png';

// Fallback coordinates (% of image) used if canvas pixel-detection fails.
// Sorted top→bottom, left→right to match plot order p1…p20.
const FALLBACK_AREAS = [
  { xPct:  4.5, yPct: 13.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 22.5, yPct: 13.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 40.5, yPct: 13.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 58.5, yPct: 13.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 76.5, yPct: 13.5, wPct: 16.5, hPct: 9.5 },
  { xPct:  4.5, yPct: 25.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 22.5, yPct: 25.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 40.5, yPct: 25.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 58.5, yPct: 25.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 76.5, yPct: 25.0, wPct: 16.5, hPct: 9.5 },
  { xPct:  4.5, yPct: 55.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 22.5, yPct: 55.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 40.5, yPct: 55.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 58.5, yPct: 55.0, wPct: 16.5, hPct: 9.5 },
  { xPct: 76.5, yPct: 55.0, wPct: 16.5, hPct: 9.5 },
  { xPct:  4.5, yPct: 66.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 22.5, yPct: 66.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 40.5, yPct: 66.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 58.5, yPct: 66.5, wPct: 16.5, hPct: 9.5 },
  { xPct: 76.5, yPct: 66.5, wPct: 16.5, hPct: 9.5 },
];

export function CemeteryMap() {
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement>(null);

  const [detectedRects, setDetectedRects] = useState<DetectedRect[] | null>(null);
  const [imgDisplaySize, setImgDisplaySize] = useState({ width: 0, height: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [usedFallback, setUsedFallback] = useState(false);

  // Re-measure the rendered image dimensions on load + resize
  const measureImage = useCallback(() => {
    if (imgRef.current) {
      setImgDisplaySize({
        width: imgRef.current.offsetWidth,
        height: imgRef.current.offsetHeight,
      });
    }
  }, []);

  // Run the pixel-detection algorithm once the image has loaded
  const handleImageLoad = useCallback(() => {
    measureImage();

    if (!imgRef.current) return;
    const rects = detectOrangeRects(imgRef.current);

    if (rects.length > 0) {
      // Sort top→bottom, left→right (same ordering as map-labeler.py) so
      // index 0 → p1, 1 → p2, …, n → pN
      setDetectedRects(rects);
      setUsedFallback(false);
    } else {
      // Canvas was tainted or no orange found – use manual fallback
      setDetectedRects(null);
      setUsedFallback(true);
    }
  }, [measureImage]);

  useEffect(() => {
    window.addEventListener('resize', measureImage);
    return () => window.removeEventListener('resize', measureImage);
  }, [measureImage]);

  // Build the list of areas we'll render (detected or fallback)
  const areas: { xPct: number; yPct: number; wPct: number; hPct: number }[] =
    detectedRects ?? FALLBACK_AREAS;

  const plotsSorted = plots; // already ordered p1…p20 in the data file

  const { width: dw, height: dh } = imgDisplaySize;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4 mb-2">
          <ViewCounter />
          <h1 className="flex-1 text-center self-center">Highland Creek Wesleyan Methodist Cemetery (In Progress)</h1>
        </div>
        <div className="flex justify-center mb-4">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/contact">
              <MessageCircle className="size-4" />
              Questions & Comments
            </Link>
          </Button>
        </div>
        <p className="text-center text-black mb-8">
          Click on any burial plot to view information about those buried there
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <img
              ref={imgRef}
              src={cemeteryMapImage}
              alt="Highland Creek Wesleyan Methodist Cemetery Map"
              className="w-full rounded-lg shadow-lg block"
              onLoad={handleImageLoad}
            />

            {/* SVG overlay — sized to match the rendered image */}
            {dw > 0 && (
              <svg
                className="absolute inset-0 pointer-events-none"
                style={{ width: dw, height: dh, top: 0, left: 0 }}
                viewBox={`0 0 ${dw} ${dh}`}
              >
                {areas.map((area, idx) => {
                  const plot = plotsSorted[idx];
                  if (!plot) return null;

                  const px = (area.xPct / 100) * dw;
                  const py = (area.yPct / 100) * dh;
                  const pw = (area.wPct / 100) * dw;
                  const ph = (area.hPct / 100) * dh;
                  const isHovered = hoveredIdx === idx;

                  return (
                    <g key={plot.id}>
                      <rect
                        x={px}
                        y={py}
                        width={pw}
                        height={ph}
                        fill={isHovered ? 'rgba(255, 140, 0, 0.40)' : 'rgba(255, 255, 255, 0.01)'}
                        stroke={isHovered ? 'rgba(255, 80, 0, 0.9)' : 'rgba(255, 140, 0, 0.5)'}
                        strokeWidth={isHovered ? 2.5 : 1}
                        rx={2}
                        style={{ cursor: 'pointer', pointerEvents: 'all', transition: 'fill 0.12s, stroke 0.12s' }}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        onClick={() => navigate(`/plot/${plot.id}`)}
                      />
                      {isHovered && (
                        <>
                          {/* shadow */}
                          <text
                            x={px + pw / 2 + 1}
                            y={py + ph / 2 + 1}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="rgba(0,0,0,0.6)"
                            fontSize={Math.min(14, Math.max(9, pw * 0.18))}
                            fontWeight="bold"
                            style={{ pointerEvents: 'none', userSelect: 'none' }}
                          >
                            {plot.number}
                          </text>
                          {/* label */}
                          <text
                            x={px + pw / 2}
                            y={py + ph / 2}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize={Math.min(14, Math.max(9, pw * 0.18))}
                            fontWeight="bold"
                            style={{ pointerEvents: 'none', userSelect: 'none' }}
                          >
                            {plot.number}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>
            )}
          </div>
        </div>

        {/* Status / hint */}
        <p className="text-center text-sm mt-4 text-[#000000]">
          {usedFallback
            ? 'Hover a plot to see its number · Click to view details (using manual coordinates)'
            : `${areas.length} plots auto-detected · Hover to see plot number · Click to view details`}
        </p>
      </div>
    </div>
  );
}