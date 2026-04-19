function solution(storage, requests) {
	initData()
	for (request of requests) {
		if (request.length === 1)
			useJiggaeCar(storage, requests)
		else
			useCrane(storage, request[0])

	}
	return storage;
}

function initData(storage) {
	// 물품들 주위를 물 (1)로 감쌈

	storage = [[], [...storage], []]
}

function useCrane(storage, target) {
	for (let i = 0; i < storage.length; i++) {
		storage[i] = storage[i].replaceAll(target, "0")
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
