public class prac_06_01 {
	public static void main(String[] args) {
		System.out.print(sum(1, 10));
	}

	static public int sum(int from, int to) {
		if (from > to)
			return 0;
		return sum(from + 1, to) + from;
	}
}
