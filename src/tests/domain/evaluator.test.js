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
    3 3 S
    L
    0 0 S
    M
    5 5 N
    M
    0 1 W
    M
    5 1 E
    M
  `)
  ).toEqual([
    '3 4 W',
    '2 1 E',
    '2 3 N',
    '5 5 N',
    '5 0 S',
    '3 3 E',
    '0 0 S',
    '5 5 N',
    '0 1 W',
    '5 1 E'
  ]);
});

test('returns error on bad input - extra line with a space', () => {
  console.log(evaluate('3 3\n \n3 4 N\nLR\n'));
  expect(evaluate('3 3\n \n3 4 N\nLR\n')[0].startsWith('Error')).toBe(true);
});

test('returns error on bad input - wrong move', () => {
  console.log(evaluate('3 3\n3 4 N\nK\n'));
  expect(evaluate('3 3\n \n3 4 N\nLR\n')[0].startsWith('Error')).toBe(true);
});

