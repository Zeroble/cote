function solution(priorities, location) {
	let order = 0;

	while (true) {
		// 0번째 요소 꺼내옴
		const current = priorities.shift();

		// some() -> 배열 요소 중 하나라도 true조건 만족하면 true
		const hasHigherPriority = priorities.some((priority) => priority > current);

		// 꺼낸 요소가 제일 우선순위 높은 요소가 아님
		if (hasHigherPriority) {
			priorities.push(current);
		} else { // 꺼낸 요소의 우선순위가 제일 높음 
			order += 1; // 실행
			if (location === 0) {
				// 만약 현재 요소가 우리가 추적하던 요소라면 리턴. 
				return order;
			}
		}

		location = location === 0 ? priorities.length - 1 : location - 1;
	}

}

console.log(solution([2, 1, 3, 2], 2))
console.log(solution([1, 1, 9, 1, 1, 1], 0))
