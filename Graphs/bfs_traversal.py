from collections import deque
from graph import Graph


def bfs_traversal(graph, start_vertex):
    visited = set()
    result = []
    queue = deque([start_vertex])
    visited.add(start_vertex)

    while queue:
        current = queue.popleft()
        result.append(current)

        for neighbor in graph.adj_list.get(current, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return result


if __name__ == "__main__":
    # Example 1
    graph1 = Graph()
    graph1.add_edge("A", "B")
    graph1.add_edge("A", "C")
    graph1.add_edge("B", "D")
    print("BFS Traversal for Graph 1:", bfs_traversal(graph1, "A"))

    # Example 2
    graph2 = Graph()
    graph2.add_edge("1", "2")
    graph2.add_edge("1", "3")
    graph2.add_edge("2", "4")
    graph2.add_edge("3", "5")
    print("BFS Traversal for Graph 2:", bfs_traversal(graph2, "1"))

    # Example 3
    graph3 = Graph()
    graph3.add_edge("X", "Y")
    graph3.add_edge("X", "Z")
    graph3.add_edge("Y", "W")
    graph3.add_edge("Z", "V")
    print("BFS Traversal for Graph 3:", bfs_traversal(graph3, "X"))

