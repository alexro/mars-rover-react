import { setupArea } from './../../domain/area';

test('Area setup', () => {
  expect(setupArea('7 7')).toEqual({ minX: 0, minY: 0, maxX: 7, maxY: 7 });
});
