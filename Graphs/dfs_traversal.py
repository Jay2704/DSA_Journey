from graph import Graph

def dfs_traversal(graph, start_vertex):
    visited = set()
    result = []

    def dfs(vertex):
        visited.add(vertex)
        result.append(vertex)
        for neighbor in graph.adj_list.get(vertex, []):
            if neighbor not in visited:
                dfs(neighbor)

    dfs(start_vertex)
    return result


if __name__ == "__main__":
    # Example 1
    graph1 = Graph()
    graph1.add_edge("A", "B")
    graph1.add_edge("A", "C")
    graph1.add_edge("B", "D")
    print("DFS Traversal for Graph 1:", dfs_traversal(graph1, "A"))

    # Example 2
    graph2 = Graph()
    graph2.add_edge("1", "2")
    graph2.add_edge("1", "3")
    graph2.add_edge("2", "4")
    graph2.add_edge("3", "5")
    print("DFS Traversal for Graph 2:", dfs_traversal(graph2, "1"))

    # Example 3
    graph3 = Graph()
    graph3.add_edge("X", "Y")
    graph3.add_edge("X", "Z")
    graph3.add_edge("Y", "W")
    graph3.add_edge("Z", "V")
    print("DFS Traversal for Graph 3:", dfs_traversal(graph3, "X"))
