function solution(storage, requests) {
	storage = initData(storage)

	for (request of requests) {
		if (request.length === 1)
			useJiggaeCar(storage, request)
		else
			useCrane(storage, request[0])

		waterFlow(storage)
	}

	let cnt = 0
	for (let i = 0; i < storage.length; i++) {
		console.log(storage[i].join(" "))
		for (let j = 0; j < storage.length; j++)
			if (storage[i][j] !== '1' && storage[i][j] !== '0')
				cnt += 1;
	}

	return cnt;
}

// 물품들 주위를 물 (1)로 감쌈
function initData(storage) {

	let newStorageData = [Array(storage[0].length + 2).fill("1")]

	for (let i = 0; i < storage.length; i++)
		newStorageData.push(['1', ...storage[i], '1'])
	newStorageData.push(Array(storage[0].length + 2).fill("1"))

	return newStorageData
}

function useCrane(storage, target) {
	for (let i = 0; i < storage.length; i++) {
		for (let j = 0; j < storage[i].length; j++)
			if (storage[i][j] === target)
				storage[i][j] = '0'
	}
}


function useJiggaeCar(storage, target) {
	for (let i = 0; i < storage.length; i++) {
		for (let j = 0; j < storage[i].length; j++) {
			// 만약 0이라면, 주위에 1이 있는지 확인, 있다면 물들임
			if (storage[i][j] === target) {
				if (storage[i - 1][j] === '1' ||
					storage[i][j - 1] === '1' ||
					storage[i + 1][j] === '1' ||
					storage[i][j + 1] === '1'
				) {
					storage[i][j] = '0'
				}
			}
		}
	}

}

function waterFlow(storage) {
	let isChanged = true
	while (isChanged) {
		isChanged = false;

		for (let i = 0; i < storage.length; i++) {
			for (let j = 0; j < storage[i].length; j++) {
				// 만약 0이라면, 주위에 1이 있는지 확인, 있다면 물들임
				if (storage[i][j] === '0') {
					if (storage[i - 1][j] === '1' ||
						storage[i][j - 1] === '1' ||
						storage[i + 1][j] === '1' ||
						storage[i][j + 1] === '1'
					) {
						storage[i][j] = '1'
						isChanged = true
					}
				}
			}
		}
	}
}


console.log(solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]))
// console.log(solution(["HAH", "HBH", "HHH", "HAH", "HBH"], ["C", "B", "B", "B", "B", "H"]))
