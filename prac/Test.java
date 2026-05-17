public class Test {
	static void test1(int i, int end) {
		if (i > end)
			return;
		for (int j = 0; j < i * 3; j++)
			System.out.print(" ");
		System.out.println(i);
		test1(i + 1, end);
		test1(i + 1, end);
	}

	public static void main(String[] args) {
		test1(0, 5);
	}
}
