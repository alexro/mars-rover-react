import { setupArea } from '../../domain/area';
import { Interpreter, ERROR_DIRECTION } from '../../domain/interpreter';

const area = setupArea('4 4');
let i;

beforeEach(() => {
  i = new Interpreter(area);
});

// correct behaviour is tested in evaluator
// here we test for specific errors

test('changeDirection error', () => {
  expect(() => {
    i.changeDirection(0, 'K');
  }).toThrow(ERROR_DIRECTION);
});

test('changePosition error', () => {
  expect(() => {
    i.changePosition({ x: 1, y: 1 }, 30);
  }).toThrow(ERROR_DIRECTION);
});

test('getDirectionByChar error', () => {
  expect(() => {
    i.getDirectionByChar('K');
  }).toThrow(ERROR_DIRECTION);
});

test('getDirectionByDegree error', () => {
  expect(() => {
    i.getDirectionByDegree(88);
  }).toThrow(ERROR_DIRECTION);
});
