// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
	s = s.split(" ")
	let prev = 0
	let answer = 0
	for (item of s) {
		if (item == 'Z') {
			answer -= prev;
		}
		else {
			item = Number(item)
			answer += item
			prev = item
		}
	}
	return answer;
}

console.log(solution("1 2 Z 3"))
