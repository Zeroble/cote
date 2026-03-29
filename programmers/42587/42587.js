function solution(priorities, location) {
	let order = 0;
	priorities_inorder = [...priorities].sort().reverse()

	while (true) {
		let item = priorities.shift()

		// 만약 우선순위가 제일 높다면 실행함
		if (item == priorities_inorder[0]) {
			order += 1
			if (location == 0)
				return order;
			priorities_inorder.shift()
		} else { // 아니라면 큐에 재추가 
			priorities.push(item)
		}

		location = location == 0 ? priorities.length - 1 : location - 1
	}
}

console.log(solution([2, 1, 3, 2], 2))
console.log(solution([1, 1, 9, 1, 1, 1], 0))
