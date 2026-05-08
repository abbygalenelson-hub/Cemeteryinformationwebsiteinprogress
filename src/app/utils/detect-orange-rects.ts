/**
 * Detects orange (#FF7F27) filled rectangles in an image using the same
 * algorithm as map-labeler.py:
 *   1. Build a pixel mask for pixels whose RGB L1 distance from ORANGE ≤ MAX_DIST
 *   2. 8-connected BFS to find connected components
 *   3. Filter by min area, width/height range, and extent (≥ 0.95 → solid fill)
 *   4. Sort top→bottom, left→right and return % coordinates
 */

const ORANGE_R = 255;
const ORANGE_G = 127;
const ORANGE_B = 39;
const MAX_DIST = 50;
const RECT_MIN_AREA = 120;
const RECT_W_MIN = 8;
const RECT_W_MAX = 200;   // relaxed – Figma export can be larger than map-labeler's 40px
const RECT_H_MIN = 10;
const RECT_H_MAX = 200;   // relaxed similarly
const EXTENT_MIN = 0.80;  // slightly relaxed from 0.95 for compressed images

export interface DetectedRect {
  x: number; // pixels from left in natural-image space
  y: number; // pixels from top  in natural-image space
  w: number;
  h: number;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
}

export function detectOrangeRects(img: HTMLImageElement): DetectedRect[] {
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;

  if (!iw || !ih) return [];

  // Draw to an offscreen canvas so we can read pixels
  const canvas = document.createElement('canvas');
  canvas.width = iw;
  canvas.height = ih;
  const ctx = canvas.getContext('2d');
  if (!ctx) return [];

  try {
    ctx.drawImage(img, 0, 0);
  } catch {
    return [];
  }

  let imageData: ImageData;
  try {
    imageData = ctx.getImageData(0, 0, iw, ih);
  } catch {
    // Canvas is tainted (cross-origin) – gracefully bail out
    console.warn('detectOrangeRects: canvas tainted, falling back to manual coordinates');
    return [];
  }

  const data = imageData.data;
  const total = iw * ih;

  // ── Step 1: orange pixel mask ──────────────────────────────────────────────
  const mask = new Uint8Array(total);
  for (let i = 0; i < total; i++) {
    const off = i * 4;
    const dist =
      Math.abs(data[off]     - ORANGE_R) +
      Math.abs(data[off + 1] - ORANGE_G) +
      Math.abs(data[off + 2] - ORANGE_B);
    mask[i] = dist <= MAX_DIST ? 1 : 0;
  }

  // ── Step 2: 8-connected BFS components ────────────────────────────────────
  const visited = new Uint8Array(total);
  const results: DetectedRect[] = [];

  // Pre-compute 8-connectivity offsets (guard against row wrap)
  const DIRS = [-1, 1, -iw, iw, -iw - 1, -iw + 1, iw - 1, iw + 1];

  for (let start = 0; start < total; start++) {
    if (!mask[start] || visited[start]) continue;

    visited[start] = 1;
    const queue: number[] = [start];
    let head = 0;
    let pixelCount = 0;

    let minX = start % iw;
    let maxX = minX;
    let minY = (start / iw) | 0;
    let maxY = minY;

    while (head < queue.length) {
      const curr = queue[head++];
      pixelCount++;

      const cx = curr % iw;
      const cy = (curr / iw) | 0;

      if (cx < minX) minX = cx;
      if (cx > maxX) maxX = cx;
      if (cy < minY) minY = cy;
      if (cy > maxY) maxY = cy;

      for (const d of DIRS) {
        const next = curr + d;
        if (next < 0 || next >= total || visited[next] || !mask[next]) continue;

        // Guard against row-wrap artefacts on ±1 horizontal offsets
        const nx = next % iw;
        if (Math.abs(nx - cx) > 1) continue;

        visited[next] = 1;
        queue.push(next);
      }
    }

    // ── Step 3: filter by area, dimensions, extent ─────────────────────────
    const bw = maxX - minX + 1;
    const bh = maxY - minY + 1;

    if (
      pixelCount < RECT_MIN_AREA ||
      bw < RECT_W_MIN || bw > RECT_W_MAX ||
      bh < RECT_H_MIN || bh > RECT_H_MAX
    ) continue;

    const extent = pixelCount / (bw * bh);
    if (extent < EXTENT_MIN) continue;

    results.push({
      x: minX,
      y: minY,
      w: bw,
      h: bh,
      xPct: (minX / iw) * 100,
      yPct: (minY / ih) * 100,
      wPct: (bw   / iw) * 100,
      hPct: (bh   / ih) * 100,
    });
  }

  // ── Step 4: sort top→bottom, left→right (matches map-labeler.py) ──────────
  results.sort((a, b) => a.y - b.y || a.x - b.x);
  return results;
}
