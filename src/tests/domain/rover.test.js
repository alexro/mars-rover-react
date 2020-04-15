import { setupRover } from '../../domain/rover';

test('Rover setup and use of Intepreter', () => {
  const i = {
    getDirectionByChar: jest.fn((dir) => (dir == 'X' ? 100 : 0)),
    getDirectionByDegree: jest.fn((deg) => (deg == 100 ? 'X' : '?')),
  };
  const r = setupRover(i, '3 3 X');
  expect(r.report()).toBe('3 3 X');
});
