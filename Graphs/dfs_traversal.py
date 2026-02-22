from graph import Graph

def dfs(graph, start_vertex, visited = None):
    if visited == None:
        visited = set()
    result = []
    visited.add(start_vertex)
    result.append(start_vertex)
    for neighbor in graph.adj_list.get(start_vertex, []):
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    