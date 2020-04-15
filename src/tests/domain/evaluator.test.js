import { evaluate } from './../../domain/evaluator';

test('evaluate one', () => {
  expect(evaluate('5 5\n 0 0 N\n LLLL \n')[0]).toBe('0 0 N');
});

test('evaluate many', () => {
  expect(
    evaluate(`
    5 5
    3 3 N
    MLMLMLMLML
    1 1 E
    M
    2 2 W
    RM
    5 5 N
    M
    5 1 E
    RM
  `)
  ).toEqual([
    '3 4 W',
    '2 1 E',
    '2 3 N',
    '5 5 N',
    '5 0 S',
  ]);
});
