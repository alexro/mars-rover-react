export function setupArea(input) {
  const areaInput = input.replace(/\s+/g, ' ').split(' ');

  return {
    minX: 0,
    minY: 0,
    maxX: parseInt(areaInput[0], 10),
    maxY: parseInt(areaInput[1], 10),
  };
}