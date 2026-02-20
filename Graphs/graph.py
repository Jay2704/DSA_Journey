
class Graph:
    def __init__(self):
        self.adj_list = []

    def add_vertex(self, vertex):
        if vertex not in self.adj_list:
            self.adj_list[vertex] = []
    
    def add_edge(self, vertex1, vertex2, is_directed = False):
        if vertex1 not in self.adj_list:
            self.add_vertex(vertex1)
        if vertex2 not in self.adj_list:
            self.add_vertex(vertex2)
        
        self.adj_list[vertex1] = vertex2
        if not is_directed:
            self.adj_list[vertex2] = vertex1
            
        
    def display(self):
        for vertex, edges in self.adj_list.items():
            print(f"{vertex}: {edges}")
    

if __name__ == "__main__":
    graph = Graph()
    graph.add_edge("A", "B")
    graph.add_edge("A", "C")
    graph.add_edge("B", "D", is_directed = True)
    graph.disply()