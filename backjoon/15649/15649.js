function solution(n, m) {
  dfs(n, m, []);
}

function dfs(maxNumber, lengthToPick, pickArr) {
  if (pickArr.length === lengthToPick) {
    console.log(pickArr.join(", "));
    return;
  }
  for (let i = 1; i <= maxNumber; i++)
    if (!pickArr.includes(i)) dfs(maxNumber, lengthToPick, [...pickArr, i]);
}

solution(3, 1);
solution(4, 2);
solution(4, 4);
