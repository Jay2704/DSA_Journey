def asteroidCollision(asteroids):
    stack = []
    for asteroid in asteroids:
        while stack and asteroid < 0 < stack[-1]:
            if stack[-1] < -asteroid:
                stack.pop()
                continue
            elif stack[-1] == -asteroid:
                stack.pop()
            break
        else:
            stack.append(asteroid)
    return stack

# Example usage
if __name__ == "__main__":
    asteroids = [5, 10, -5]
    print(asteroidCollision(asteroids))  # Output: [5, 10]