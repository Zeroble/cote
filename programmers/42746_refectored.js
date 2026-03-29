function solution(nums) {
	nums = nums
		.map(String)
		.sort((a, b) => {
			return (b + a) - (a + b)
		})

	//만약 nums가 모두 "0"이라면 '0'리턴 
	if (nums[0] == '0') return "0";

	return nums.join("");
}

console.log(solution([6, 10, 2]))
console.log(solution([0, 0]))
console.log(solution([3, 30, 34, 5, 9]))
