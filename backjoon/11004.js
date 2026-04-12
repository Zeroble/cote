// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = "5 2\n4 1 5 3 2".split("\n")

const [n, k] = input[0].split(" ")
const arr = input[1].split(" ").map(Number)

console.log(findK(arr, 0, arr.length, k - 1))

function findK(arr, start, end, k) {
	const pivot = arr[arr.length - 1];
	console.log(pivot)
	// area0가 끝나는 지점 == pivot위치 
	let endOfArea0 = 0;
	let endOfArea1 = 1;
	const newArr = [pivot]

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			newArr.splice(endOfArea0, 0, arr[i])
			endOfArea0 += 1;
			endOfArea1 += 1;
		} else {
			newArr.splice(endOfArea1, 0, arr[i])
			endOfArea1 += 1;
		}
	}

	if (endOfArea0 == k)
		return pivot
	else
		return endOfArea0 > k ? findK(arr, 0, endOfArea0, k) : findK(arr, endOfArea1)

}
