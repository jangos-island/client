export function transformCoords({ x, y }) {
  const xBase = 0.05 * window.innerWidth;
  const xUnit = (window.innerWidth - 2 * xBase) / 25;
  x = xBase + x * xUnit;

  const yBase = 0.05 * window.innerHeight;
  const yUnit = (window.innerHeight - 2 * yBase) / 10;
  y = window.innerHeight - (yBase + y * yUnit);

  return { x, y };
}
