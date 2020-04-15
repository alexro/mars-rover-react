export function changeDirection(dir, turn) {
  if ('LR'.indexOf(turn) < 0) {
    throw "Can't interpret direction";
  }

  var turnBy = turn == 'R' ? 90 : -90;
  var newDir = dir + turnBy;
  newDir = newDir < 0 ? newDir + 360 : newDir;
  return newDir % 360;
}

export function correctX(area, x) {
  return x < area.minX ? area.minX : x > area.maxX ? area.maxX : x;
}

export function correctY(area, y) {
  return y < area.minY ? area.minY : y > area.maxY ? area.maxY : y;
}

export function changePosition(area, pos, dir) {
  console.log('dir', dir);
  switch (dir) {
    case 0:
      return { x: pos.x, y: correctY(area, pos.y + 1) };
    case 90:
      return { x: correctX(area, pos.x + 1), y: pos.y };
    case 180:
      return { x: pos.x, y: correctY(area, pos.y - 1) };
    case 270:
      return { x: correctX(area, pos.x - 1), y: pos.y };
  }
}

export function getDirectionByChar(turn) {
  if ('NESW'.indexOf(turn) < 0) {
    throw "Can't interpret direction";
  }

  switch (turn) {
    case 'N':
      return 0;
    case 'E':
      return 90;
    case 'S':
      return 180;
    case 'W':
      return 270;
  }
}

export function getDirectionByDegree(deg) {
  switch (deg) {
    case 0:
      return 'N';
    case 90:
      return 'E';
    case 180:
      return 'S';
    case 270:
      return 'W';
  }
}

export function setupInterpreter(area) {
  return {
    changeDirection,
    changePosition(pos, dir) {
      return changePosition(area, pos, dir);
    },
    getDirectionByChar,
    getDirectionByDegree,
  };
}
