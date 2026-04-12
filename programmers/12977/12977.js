// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const PICK_AMOUT = 3

function solution(nums) {
	return pick(nums, [], 0);
}

function pick(nums, picks, nowIdx) {
	if (picks.length < PICK_AMOUT) {
		let cnt = 0
		for (let idx = nowIdx; PICK_AMOUT - picks.length <= nums.length - idx; idx++)
			cnt += pick([...nums], [...picks, nums[idx]], idx + 1)
		return cnt;
	}
	else {
		if (isPrime(picks.reduce((tot, item) => tot + item))) {
			// console.log(picks + "를 이용해서 " + number + "을 만들 수 있습니다.")
			return 1;
		}
		else return 0;
	}
}

function isPrime(n) {
	if (n == 1) return false;
	let limit = Math.sqrt(n);
	for (let i = 2; i <= limit; ++i)
		if (n % i == 0) return false;
	return true;
}

console.log(solution([1, 2, 3, 4]))
console.log(solution([1, 2, 7, 6, 4]))
