import { setupArea } from './area';
import { setupInterpreter } from './interpreter';
import { setupRover } from './rover';

export function evaluate(input) {
  const lines = input.replace(/[\r\n]+/gm, '\n').split('\n');

  const area = setupArea(lines[0].trim());

  const interpreter = setupInterpreter(area);

  const results = [];

  for (let i = 1; i < lines.length - 1; i += 2) {
    const roverInput = lines[i].trim();
    const rover = setupRover(interpreter, roverInput);

    const moves = lines[i + 1].trim();
    for (let m of moves) {
      if (m == 'M') {
        rover.move();
      } else if ('LR'.indexOf(m) >= 0) {
        rover.turn(m);
      }
    }

    results.push(rover.report());
  }

  return results;
}
