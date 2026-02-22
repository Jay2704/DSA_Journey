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
