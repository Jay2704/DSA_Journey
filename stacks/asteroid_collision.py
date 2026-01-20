
def asteroid_collision(asteroids):
    """Simulate asteroid collisions and return the state after all collisions.

    Each asteroid is an integer where the absolute value represents its size
    and the sign represents its direction (positive = right, negative = left).

    Algorithm (stack-based):
    - Iterate through asteroids left to right.
    - If current asteroid moves right (>0) or stack is empty or top of stack moves left,
      push it onto the stack.
    - If current asteroid moves left (<0) and top of stack moves right (>0),
      there can be collisions: repeatedly compare sizes, popping the smaller one.
    - If both are equal, both explode (pop stack and skip adding current asteroid).

    Returns a list of integers representing remaining asteroids.
    """

    stack = []
    for a in asteroids:
        alive = True
        # only possible collision when a < 0 and stack top > 0
        while alive and stack and a < 0 and stack[-1] > 0:
            if stack[-1] < -a:
                # top of stack explodes; continue checking with next stack top
                stack.pop()
                continue
            elif stack[-1] == -a:
                # both explode
                stack.pop()
                alive = False
                break
            else:
                # incoming asteroid explodes
                alive = False
                break

        if alive:
            stack.append(a)

    return stack


# Main function to test the asteroid_collision function.
if __name__ == "__main__":
    # Example input for testing.
    asteroids = [5, 10, -5]
    
    # Call the asteroid_collision function and print the result.
    result = asteroid_collision(asteroids)
    print("Result of asteroid collision:", result)



