function solution(skill, skill_trees) {
	let answer = 0;

	for (skill_tree of skill_trees) {
		let new_skill_tree = ""
		for (skill_ of skill_tree)
			if (skill.indexOf(skill_) !== -1) new_skill_tree += skill_

		if (skill.substring(0, new_skill_tree.length) === new_skill_tree)
			answer += 1
	}


	return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
