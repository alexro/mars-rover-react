export class Rover {
  constructor(interpreter, pos, dir) {
    this.interpreter = interpreter;
    this.pos = pos;
    this.dir = interpreter.getDirectionByChar(dir);
  }

  interpreter;
  pos;
  dir;

  move() {
    this.pos = this.interpreter.changePosition(this.pos, this.dir);
  }

  turn(code) {
    this.dir = this.interpreter.changeDirection(this.dir, code);
  }

  report() {
    return `${this.pos.x} ${this.pos.y} ${this.interpreter.getDirectionByDegree(
      this.dir
    )}`;
  }
}

export function setupRover(interpreter, input) {
  const roverInput = input.replace(/\s+/g, ' ').split(' ');
  const pos = {
    x: parseInt(roverInput[0], 10),
    y: parseInt(roverInput[1], 10),
  };
  const dir = roverInput[2];

  return new Rover(interpreter, pos, dir);
}
