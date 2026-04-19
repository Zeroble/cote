const CODE_LENGTH = 5;

function solution(n, q, ans) {
	let candidate = []
	pick5([], n, 1, candidate)
	let answer = 0

	for (let i = 0; i < candidate.length; i++) {
		const NOW_CANDIDATE = candidate[i]

		for (let j = 0; j < q.length; j++) {
			const NOW_QUSTION = q[j]
			const NOW_ANSWER_CNT = ans[j]

			if (getIntersectionSize(NOW_QUSTION, NOW_CANDIDATE) !== NOW_ANSWER_CNT)
				break

			if (j === q.length - 1) {
				answer += 1
			}
		}
	}

	return answer;
}

function getIntersectionSize(s1, s2) {
	let cnt = 0;
	for (const item of s2)
		if (s1.includes(item)) cnt += 1
	return cnt;
}

function pick5(arr, n, now, candidate) {
	if (arr.length == CODE_LENGTH)
		candidate.push(arr)
	else {
		for (let i = now; i < n + 1; i++) {
			pick5([...arr, i], n, i + 1, candidate)
		}
	}
}

console.log(solution(10, [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [3, 7, 8, 9, 10], [2, 5, 7, 9, 10], [3, 4, 5, 6, 7]], [2, 3, 4, 3, 3]))
console.log(solution(15, [[2, 3, 9, 12, 13], [1, 4, 6, 7, 9], [1, 2, 8, 10, 12], [6, 7, 11, 13, 15], [1, 4, 10, 11, 14]], [2, 1, 3, 0, 1]))
