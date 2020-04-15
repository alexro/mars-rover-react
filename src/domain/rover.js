export class Rover {
  constructor(interpreter, pos, dir) {
    this.interpreter = interpreter;
    this.pos = pos;
    this.dir = interpreter.getDirectionByChar(dir);
    this.move.bind(this);
  }

  interpreter;
  pos;
  dir;

  move() {
    console.log('Move');
    this.pos = this.interpreter.changePosition(this.pos, this.dir);
    console.log(this.report());
  }

  turn(code) {
    console.log('Turn:', code);

    this.dir = this.interpreter.changeDirection(this.dir, code);
    console.log(this.report());
  }

  report() {
    return `${this.pos.x} ${this.pos.y} ${this.interpreter.getDirectionByDegree(
      this.dir
    )}`;
  }
}

export function setupRover(interpreter, input) {
  const roverInput = input.split(' ');
  const pos = {
    x: parseInt(roverInput[0], 10),
    y: parseInt(roverInput[1], 10),
  };
  const dir = roverInput[2];

  return new Rover(interpreter, pos, dir);
}
