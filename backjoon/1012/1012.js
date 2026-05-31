function solution(xSize, ySize, bachuArr) {
  const arr = Array.from({ length: xSize }, () => {
    return Array.from({ length: ySize }, () => false);
  });

  for (let i = 0; i < bachuArr.length; i++)
    arr[bachuArr[i][0]][bachuArr[i][1]] = true;

  let result = 0;
  for (let i = 0; i < xSize; i++)
    for (let j = 0; j < ySize; j++) {
      if (arr[i][j] === true) {
        DFS(arr, i, j);
        result += 1;
      }
    }
  return result;
}

function DFS(arr, i, j) {
  arr[i][j] = false;

  if (i > 0 && arr[i - 1][j]) DFS(arr, i - 1, j);
  if (i < arr.length - 1 && arr[i + 1][j]) DFS(arr, i + 1, j);
  if (j > 0 && arr[i][j - 1]) DFS(arr, i, j - 1);
  if (j < arr[0].length - 1 && arr[i][j + 1]) DFS(arr, i, j + 1);
}

console.log(
  solution(10, 8, [
    [0, 0],
    [1, 0],
    [1, 1],
    [4, 2],
    [4, 3],
    [4, 5],
    [2, 4],
    [3, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [7, 5],
    [8, 5],
    [9, 5],
    [7, 6],
    [8, 6],
    [9, 6],
  ]),
);

console.log(solution(10, 10, [[5, 5]]));
