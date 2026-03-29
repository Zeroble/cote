function solution(s) {
	let stack = []
	for (let i in s) {
		if (s[i] === "(")
			stack.push("(")
		else if (stack.pop() !== "(")
			return false
	}

	if (stack.length === 0)
		return true;
	else return false;
}

console.log(solution("()()"))
console.log(solution("(())()"))
console.log(solution(")()("))
console.log(solution("(()("))
