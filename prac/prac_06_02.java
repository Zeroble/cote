import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class prac_06_02 {
	public static void main(String[] args) {
		// solution(new int[] { 3, -3, 2, -2, 1, -1, 1 });
		solution(new int[] { 1, 2, 3 });
		// solution(new int[] { -10, 3, 5, 9 - 7, 2, 4, -2, 1, 6 });
	}

	static public void solution(int arr[]) {
		DFS(arr, 0, new int[arr.length], 0);
		System.out.println();
		HashSet<Integer> hs = new HashSet<Integer>();
		DFS(arr, 0, new ArrayList<Integer>(), hs);
		System.out.println(hs.size());
	}

	static public void DFS(int[] arr, int idx, int[] picks, int cnt) {
		if (arr.length == idx) {
			System.out.print("[");
			for (int i = 0; i < cnt; i++)
				System.out.print(picks[i] + (i == cnt - 1 ? "" : ", "));
			System.out.print("]");
			System.out.println();
			return;
		}
		DFS(arr, idx + 1, picks, cnt);
		picks[cnt] = arr[idx];
		DFS(arr, idx + 1, picks, cnt + 1);
	}

	static public void DFS(int[] arr, int idx, ArrayList<Integer> picks, HashSet<Integer> hs) {
		if (arr.length == idx) {
			int sum = 0;
			for (int i = 0; i < picks.size(); i++)
				sum += picks.get(i);
			hs.add(sum);
			return;
		}
		DFS(arr, idx + 1, picks, hs);
		ArrayList<Integer> aList = new ArrayList<Integer>(picks);
		aList.add(arr[idx]);
		DFS(arr, idx + 1, aList, hs);
	}

}
