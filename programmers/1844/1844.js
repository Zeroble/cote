function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;
  if (maps[0][0] === 0) return -1;

  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let queue = [[0, 0, 1]];
  visited[0][0] = true;

  let head = 0;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];

  while (head < queue.length) {
    let [x, y, cnt] = queue[head++];
    if (x === n - 1 && y === m - 1) return cnt;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (maps[nx][ny] === 0 || visited[nx][ny]) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny, cnt + 1]);
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ]),
);
