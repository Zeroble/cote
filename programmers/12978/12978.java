import java.util.*;

class Solution {
	static ArrayList<int[]>[] edges;

	public int solution(int N, int[][] road, int K) {
		edges = new ArrayList[N + 1];

		for (int i = 1; i <= N; i++) {
			edges[i] = new ArrayList<>();
		}

		for (int[] r : road) {
			int a = r[0];
			int b = r[1];
			int cost = r[2];

			edges[a].add(new int[] { b, cost });
			edges[b].add(new int[] { a, cost });
		}

		int[] distances = dijkstra(N, 1);

		int answer = 0;
		for (int i = 1; i <= N; i++) {
			if (distances[i] <= K) {
				answer++;
			}
		}

		return answer;
	}

	static int[] dijkstra(int N, int start) {
		int INF = 1_000_000_000;

		int[] distances = new int[N + 1];
		Arrays.fill(distances, INF);
		distances[start] = 0;

		PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> a[1] - b[1]);
		queue.add(new int[] { start, 0 });

		while (!queue.isEmpty()) {
			int[] current = queue.remove();

			int node = current[0];
			int distance = current[1];

			if (distance > distances[node])
				continue;

			for (int[] edge : edges[node]) {
				int next = edge[0];
				int cost = edge[1];

				int nextDistance = distance + cost;

				if (nextDistance < distances[next]) {
					distances[next] = nextDistance;
					queue.add(new int[] { next, nextDistance });
				}
			}
		}

		return distances;
	}
}
