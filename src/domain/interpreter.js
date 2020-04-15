export const ERROR_DIRECTION = "Can't interpret direction";

/**
 * Interpreter handles logic for Rover to over over Area
 * This Interpreter stops Rover from moving when Rover is at the end of Area
 * If Rover needs to move differently it is possible to create a descendent class for another Intepreter
 */
export class Interpreter {
  constructor(area) {
    this.area = area;
  }

  area;

  changeDirection(deg, turn) {
    if ('LR'.indexOf(turn) < 0) {
      throw ERROR_DIRECTION;
    }

    var turnBy = turn === 'R' ? 90 : -90;
    var newDir = deg + turnBy;
    newDir = newDir < 0 ? newDir + 360 : newDir;
    return newDir % 360;
  }

  correctX(x) {
    return x < this.area.minX
      ? this.area.minX
      : x > this.area.maxX
      ? this.area.maxX
      : x;
  }

  correctY(y) {
    return y < this.area.minY
      ? this.area.minY
      : y > this.area.maxY
      ? this.area.maxY
      : y;
  }

  changePosition(pos, dir) {
    switch (dir) {
      case 0:
        return { x: pos.x, y: this.correctY(pos.y + 1) };
      case 90:
        return { x: this.correctX(pos.x + 1), y: pos.y };
      case 180:
        return { x: pos.x, y: this.correctY(pos.y - 1) };
      case 270:
        return { x: this.correctX(pos.x - 1), y: pos.y };
      default:
        throw ERROR_DIRECTION;
    }
  }

  getDirectionByChar(turn) {
    switch (turn) {
      case 'N':
        return 0;
      case 'E':
        return 90;
      case 'S':
        return 180;
      case 'W':
        return 270;
      default:
        throw ERROR_DIRECTION;
    }
  }

  getDirectionByDegree(deg) {
    switch (deg) {
      case 0:
        return 'N';
      case 90:
        return 'E';
      case 180:
        return 'S';
      case 270:
        return 'W';
      default:
        throw ERROR_DIRECTION;
    }
  }
}

export function setupInterpreter(area) {
  return new Interpreter(area);
}
