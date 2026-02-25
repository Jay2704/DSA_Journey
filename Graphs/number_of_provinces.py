def find_number_of_provinces(is_connected):
    n = len(is_connected)
    if n == 0:
        return 0

    for row in is_connected:
        if len(row) != n:
            raise ValueError("Input must be an n x n adjacency matrix.")

    visited = [False] * n
    provinces = 0

    for city in range(n):
        if visited[city]:
            continue

        provinces += 1
        stack = [city]
        visited[city] = True

        while stack:
            current = stack.pop()
            for neighbor, connected in enumerate(is_connected[current]):
                if connected == 1 and not visited[neighbor]:
                    visited[neighbor] = True
                    stack.append(neighbor)

    return provinces


if __name__ == "__main__":
    matrix1 = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ]
    print("Number of provinces (matrix1):", find_number_of_provinces(matrix1))  # 2

    matrix2 = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ]
    print("Number of provinces (matrix2):", find_number_of_provinces(matrix2))  # 3
