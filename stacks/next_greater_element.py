from stack import Stack

def next_greater_element(nums):
    
    n = len(nums)
    stack = Stack()
    result = [-1] * n

    for i in range(n-1, -1, -1):
        
        while not stack.is_empty() and stack.peek() <= nums[i]:
            stack.pop()
        
        if not stack.is_empty():
            result[i] = stack.peek()
        
        stack.push(nums[i])
    
    return result


def main():
    test_cases = [
        # Easy: strictly increasing
        ([1, 2, 3, 4, 5], [2, 3, 4, 5, -1]),
        # Easy: strictly decreasing
        ([5, 4, 3, 2, 1], [-1, -1, -1, -1, -1]),
        # All elements the same
        ([7, 7, 7, 7], [-1, -1, -1, -1]),
        # Alternating high/low
        ([2, 9, 1, 8, 3, 7], [9, -1, 8, -1, 7, -1]),
        # Single element
        ([42], [-1]),
        # Empty list
        ([], []),
        # Large numbers
        ([1000, 2000, 1500, 3000, 2500], [2000, 3000, 3000, -1, -1]),
        # Negative numbers
        ([-1, -3, -2, -4, 0], [0, -2, 0, 0, -1]),
        # Mixed positive and negative
        ([4, -2, 5, -1, 3], [5, 5, -1, 3, -1]),
        # Duplicates and plateaus
        ([2, 2, 1, 3, 3, 2, 4], [3, 3, 3, 4, 4, 4, -1]),
    ]
    passed = 0
    for i, (nums, expected) in enumerate(test_cases, 1):
        result = next_greater_element(nums)
        print(f"Test case {i}: {nums}")
        print(f"Next greater elements: {result}")
        print(f"Expected: {expected}")
        if result == expected:
            print("Result: PASSED\n")
            passed += 1
        else:
            print("Result: FAILED\n")
    print(f"Passed {passed} out of {len(test_cases)} test cases.")

if __name__ == "__main__":
    main() 