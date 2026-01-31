
from collections import deque
from typing import Dict, Hashable, Iterable, List, Optional, Set, Tuple


class Graph:

    def __init__(self, directed: bool = False) -> None:
        self.directed = directed
        self._adj: Dict[Hashable, Dict[Hashable, float]] = {}

    def add_vertex(self, vertex: Hashable) -> None:
        """Add a vertex if missing."""
        self._adj.setdefault(vertex, {})

    def add_edge(self, u: Hashable, v: Hashable, weight: float = 1.0) -> None:
        """Create or update an edge u -> v (and v -> u when undirected)."""
        self.add_vertex(u)
        self.add_vertex(v)
        self._adj[u][v] = weight
        if not self.directed:
            self._adj[v][u] = weight

    def remove_edge(self, u: Hashable, v: Hashable) -> None:
        """Remove edge u -> v (and v -> u when undirected)."""
        self._adj.get(u, {}).pop(v, None)
        if not self.directed:
            self._adj.get(v, {}).pop(u, None)

    def remove_vertex(self, vertex: Hashable) -> None:
        """Delete a vertex and all incident edges."""
        self._adj.pop(vertex, None)
        for neighbours in self._adj.values():
            neighbours.pop(vertex, None)

    # --- queries ---
    def vertices(self) -> Set[Hashable]:
        return set(self._adj.keys())

    def neighbors(self, vertex: Hashable) -> Dict[Hashable, float]:
        return dict(self._adj.get(vertex, {}))

    def edges(self) -> List[Tuple[Hashable, Hashable, float]]:
        collected = []
        seen: Set[Tuple[Hashable, Hashable]] = set()
        for u, nbrs in self._adj.items():
            for v, w in nbrs.items():
                key = (u, v) if self.directed else tuple(sorted((u, v), key=repr))
                if key not in seen:
                    collected.append((u, v, w))
                    seen.add(key)
        return collected

    def has_edge(self, u: Hashable, v: Hashable) -> bool:
        return v in self._adj.get(u, {})

    # --- traversals ---
    def bfs(self, start: Hashable) -> List[Hashable]:
        """Breadth‑first order from start."""
        if start not in self._adj:
            return []
        visited: Set[Hashable] = set([start])
        order: List[Hashable] = []
        q: deque[Hashable] = deque([start])
        while q:
            node = q.popleft()
            order.append(node)
            for nbr in self._adj[node]:
                if nbr not in visited:
                    visited.add(nbr)
                    q.append(nbr)
        return order

    def dfs(self, start: Hashable) -> List[Hashable]:
        """Depth‑first (pre‑order) from start."""
        if start not in self._adj:
            return []
        visited: Set[Hashable] = set()
        order: List[Hashable] = []

        def _visit(node: Hashable) -> None:
            visited.add(node)
            order.append(node)
            for nbr in self._adj[node]:
                if nbr not in visited:
                    _visit(nbr)

        _visit(start)
        return order

    def shortest_path(self, source: Hashable, target: Hashable) -> Optional[List[Hashable]]:
        """Unweighted shortest path using BFS; returns None when disconnected."""
        if source not in self._adj or target not in self._adj:
            return None
        parent: Dict[Hashable, Optional[Hashable]] = {source: None}
        q: deque[Hashable] = deque([source])
        while q:
            node = q.popleft()
            if node == target:
                break
            for nbr in self._adj[node]:
                if nbr not in parent:
                    parent[nbr] = node
                    q.append(nbr)
        if target not in parent:
            return None
        # rebuild path
        path: List[Hashable] = []
        cur: Optional[Hashable] = target
        while cur is not None:
            path.append(cur)
            cur = parent[cur]
        path.reverse()
        return path

    # --- representation helpers ---
    def __len__(self) -> int:
        return len(self._adj)

    def __contains__(self, vertex: Hashable) -> bool:  # allows `in` checks
        return vertex in self._adj

    def __repr__(self) -> str:
        kind = "Directed" if self.directed else "Undirected"
        return f"<{kind} Graph | V={len(self._adj)}, E={len(self.edges())}>"
    
