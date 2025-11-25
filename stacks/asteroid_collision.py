# Asteroid Collision Problem
# =========================
# Problem: Given an array of asteroids representing their sizes,
# where positive integers represent asteroids moving right,
# and negative integers represent asteroids moving left.
# Find the state of the asteroids after all collisions.
#
# Rules:
# - When two asteroids meet, the smaller one explodes
# - If both are the same size, both explode
# - Moving in the same direction never collide
#
# Example: asteroids = [5, 10, -5]
# Result: [5, 10] (the -5 collides with 10 and explodes)
#
# Example: asteroids = [8, -8]
# Result: [] (both explode as they're the same size)
#
# Approach: Use Stack to simulate collisions
# Time Complexity: O(n)
# Space Complexity: O(n)

def asteroid_collision(asteroids):
    """
    SOLUTION: Stack-based approach
    
    ALGORITHM:
    1. Use a stack to keep track of asteroids moving right
    2. For each asteroid:
       a. If moving right (positive), push to stack
       b. If moving left (negative):
          - Collide with all right-moving asteroids in stack
          - Handle collisions based on sizes
    3. Return remaining asteroids
    
    KEY INSIGHT:
    - Only collisions happen between right-moving (positive) and left-moving (negative)
    - Use stack to simulate sequential collisions
    - Process collisions until no more can occur
    
    Time Complexity: O(n) - each asteroid processed once
    Space Complexity: O(n) - stack can hold all asteroids
    """
    stack = []
    
    for asteroid in asteroids:
        # Current asteroid is moving left (negative)
        while stack and asteroid < 0 < stack[-1]:
            # Collision happens when:
            # - Stack top is moving right (positive)
            # - Current asteroid is moving left (negative)
            
            if stack[-1] < -asteroid:
                # Right-moving asteroid (stack top) is smaller, it explodes
                stack.pop()
                # Continue checking if more collisions needed
            elif stack[-1] == -asteroid:
                # Both same size, both explode
                stack.pop()
                break  # Current asteroid also destroyed
            else:
                # Right-moving asteroid is larger, current asteroid explodes
                break  # Don't add current asteroid to stack
        else:
            # No collision, add asteroid to stack
            # (either stack is empty, or both moving same direction)
            stack.append(asteroid)
    
    return stack


def asteroid_collision_verbose(asteroids):
    """
    Verbose version that shows collision process step by step.
    Useful for understanding the algorithm.
    """
    stack = []
    
    print(f"Processing asteroids: {asteroids}\n")
    
    for i, asteroid in enumerate(asteroids):
        print(f"Step {i+1}: Current asteroid = {asteroid}")
        print(f"  Stack before: {stack}")
        
        # Current asteroid is moving left (negative)
        should_add = True
        while stack and asteroid < 0 < stack[-1]:
            top = stack[-1]
            
            print(f"  Collision: {top} (right) vs {asteroid} (left)")
            
            if top < -asteroid:
                # Right-moving asteroid is smaller, it explodes
                print(f"    {top} explodes (smaller)")
                stack.pop()
                # Continue checking if more collisions needed
            elif top == -asteroid:
                # Both same size, both explode
                print(f"    Both {top} and {asteroid} explode (same size)")
                stack.pop()
                should_add = False  # Current also destroyed
                break
            else:
                # Right-moving asteroid is larger, current explodes
                print(f"    {asteroid} explodes (smaller)")
                should_add = False  # Don't add current
                break
        
        if should_add:
            stack.append(asteroid)
            print(f"  Added {asteroid} to stack")
        
        print(f"  Stack after: {stack}\n")
    
    return stack


def test_asteroid_collision():
    """
    Comprehensive test suite for asteroid collision problem.
    """
    test_cases = [
        # Basic test cases
        ([5, 10, -5], [5, 10], "Basic collision - smaller explodes"),
        ([8, -8], [], "Same size - both explode"),
        ([10, 2, -5], [10], "Multiple collisions"),
        
        # Edge cases
        ([], [], "Empty array"),
        ([5], [5], "Single asteroid"),
        ([5, 10], [5, 10], "Same direction - no collision"),
        ([-5, -10], [-5, -10], "Both left - no collision"),
        
        # Complex cases
        ([5, -5], [], "Two asteroids collide completely"),
        ([10, 2, -5], [10], "Chain collision"),
        ([5, 10, -5, -10], [], "Multiple collisions"),
        ([-2, -1, 1, 2], [-2, -1, 1, 2], "Separated groups"),
        
        # More complex scenarios
        ([10, 2, -5, -10], [-10], "Complex chain"),
        ([1, -2, -2, 1], [-2, -2, 1], "Mixed collisions"),
        ([8, -8, -2], [-2], "Multiple explosions"),
        ([5, 10, -5, -2, 3], [5, 10, 3], "Complex scenario 1"),
        
        # Large examples
        ([1, 2, 3, -4], [], "All destroyed"),
        ([4, -3, -2, 1], [4, 1], "Mixed results"),
        ([10, -5, 3, -2], [10, 3], "Partial destruction"),
        
        # Edge patterns
        ([1, -1, 1, -1], [], "Alternating pattern"),
        ([5, -3, -2, 1], [5, 1], "Multiple negatives"),
        ([3, 2, 1, -1, -2, -3], [], "Mirror pattern"),
    ]
    
    print("=" * 80)
    print("ASTEROID COLLISION - COMPREHENSIVE TEST SUITE")
    print("=" * 80)
    print(f"{'Test Case':<35} {'Input':<25} {'Expected':<25} {'Result':<10} {'Match'}")
    print("-" * 80)
    
    all_passed = True
    
    for description, input_asteroids, expected, in test_cases:
        try:
            result = asteroid_collision(input_asteroids)
            
            match = "✓" if result == expected else "✗"
            if result != expected:
                all_passed = False
            
            input_str = str(input_asteroids)
            if len(input_str) > 23:
                input_str = input_str[:20] + "..."
            
            expected_str = str(expected)
            if len(expected_str) > 23:
                expected_str = expected_str[:20] + "..."
            
            result_str = str(result)
            if len(result_str) > 8:
                result_str = result_str[:5] + "..."
            
            print(f"{description:<35} {input_str:<25} {expected_str:<25} {result_str:<10} {match}")
            
        except Exception as e:
            print(f"{description:<35} {str(input_asteroids):<25} ERROR: {str(e)}")
            all_passed = False
    
    print("-" * 80)
    print(f"Overall Result: {'ALL TESTS PASSED ✓' if all_passed else 'SOME TESTS FAILED ✗'}")
    print("=" * 80)
    
    return all_passed


def demonstrate_example():
    """Demonstrate a complex example with verbose output."""
    print("\n" + "=" * 80)
    print("VERBOSE EXAMPLE DEMONSTRATION")
    print("=" * 80)
    
    asteroids = [5, 10, -5]
    print(f"\nExample: {asteroids}")
    result = asteroid_collision_verbose(asteroids)
    print(f"Final Result: {result}")
    
    print("\n" + "-" * 80)
    
    asteroids2 = [10, 2, -5]
    print(f"\nExample: {asteroids2}")
    result2 = asteroid_collision_verbose(asteroids2)
    print(f"Final Result: {result2}")


if __name__ == "__main__":
    # Run comprehensive test suite
    test_asteroid_collision()
    
    # Run verbose demonstration
    demonstrate_example()
