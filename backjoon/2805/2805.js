// 2805번 : 나무 자르기

function solution(_, goal, treeHeights) {
	let start = 0
	let end = Math.max(...treeHeights)

	let cuthHeight = -1;
	while (true) {
		cuthHeight = Math.trunc((start + end) / 2)

		// console.log(start, end, cuthHeight)
		let comp = compare(cuthHeight, treeHeights, goal)
		if (comp === 0 || start + 1 === end)
			return cuthHeight
		else if (comp < 0)
			start = cuthHeight
		else
			end = cuthHeight
	}
	return cuthHeight
}

function compare(cuthHeight, treeHeights, goal) {
	let sum = 0
	for (const treeHeight of treeHeights) {
		if (treeHeight > cuthHeight)
			sum += (treeHeight - cuthHeight)
	}

	return goal - sum
}

console.log(solution(4, 7, [20, 16, 10, 17])) // 15
console.log(solution(4, 7, [20, 15, 10, 17])) // 15
console.log(solution(5, 20, [4, 42, 40, 26, 46])) // 36
