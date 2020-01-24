export function transformCoords({ x, y }) {
  const xBase = 0.01 * 1000;
  const xUnit = (1000 - 2 * xBase) / 35;
  x = xBase + x * xUnit;

  const yBase = 0.05 * 600;
  const yUnit = (600 - 2 * yBase) / 20;
  y = 600 - (yBase + y * yUnit);

  return { x, y };
}
