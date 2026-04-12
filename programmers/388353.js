function solution(storage, requests) {
	for (request of requests) {
		if (request.length === 1)
			useJiggaeCar(storage, requests)
		else
			useCrane(storage, requests)

	}
	return storage;
}

function useCrane(storage, target) {
	for (let i = 0; i < storage.length; i++) {
		for (let j = 0; j < storage[i].length; j++) {
			if (storage[i][j] == target)
				storage[i][j] = " "
		}
	}
}


function useJiggaeCar(storage) {

}


function initDFS(params) {

}

function useDFS(params) {

}


console.log(solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]))
// console.log(solution(["HAH", "HBH", "HHH", "HAH", "HBH"], ["C", "B", "B", "B", "B", "H"]))
