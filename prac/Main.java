public class Main {
	static int compare(int middle) {
		/*
		 * middle 값이 기준보다 작으면 음수
		 * middle 값이 기준에 맞으면 0
		 * middle 값이 기준보다 크면 양수
		 */
		return 0;
	}

	// 문제의 기준을 만족하는 값들 중 최댓값 찾기
	static int parametricSearchMax(int left, int right) {
		while (left <= right) {
			int middle = (right + left) / 2;
			int r = compare(middle);

			if (r <= 0)
				left = middle + 1;
			else
				right = middle - 1;
		}

		return right;
	}

	// 문제의 기준을 만족하는 값들 중 최솟값 찾기
	static int parametricSearchMin(int left, int right) {
		while (left <= right) {
			int middle = (right + left) / 2;
			int r = compare(middle);

			if (r >= 0)
				right = middle - 1;
			else
				left = middle + 1;
		}

		return left;
	}

	public static void main(String[] args) {
		int answerMin = 1;
		int answerMax = 1_000_000_000;

		int maxAnswer = parametricSearchMax(answerMin, answerMax);
		int minAnswer = parametricSearchMin(answerMin, answerMax);

		System.out.println(maxAnswer);
		System.out.println(minAnswer);
	}
}
