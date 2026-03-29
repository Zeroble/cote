function solution(priorities, location) {
	let cnt = 0;

	while (true) {
		let max = Math.max(...priorities)
		while (true) {
			let item = priorities.shift()

			// 만약 우선순위가 제일 높다면 실행함
			if (item == max) {
				if (location == 0)
					return cnt + 1;
				else
					cnt += 1;
			} else { // 아니라면 큐에 재추가 
				priorities.push(item)
			}

			location = location == 0 ? priorities.length - 1 : location - 1
		}
	}
}

console.log(solution([2, 1, 3, 2], 2))
console.log(solution([1, 1, 9, 1, 1, 1], 0))
