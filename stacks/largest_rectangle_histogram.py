def largest_rectangle_area(heights):
    """
    Find the largest rectangle area in a histogram using monotonic stack.
    
    ALGORITHM EXPLANATION:
    =====================
    
    Key Insight: For each bar, the largest rectangle with that bar as height
    extends from the previous smaller bar to the next smaller bar.
    
    APPROACH: Monotonic Increasing Stack
    - Maintain a stack of indices in increasing order of heights
    - When we encounter a bar smaller than stack top, we can calculate
      the area of rectangles with stack top as height
    - The width of rectangle = current_index - previous_smaller_index - 1
    
    STEP-BY-STEP:
    1. For each bar at index i:
       a. While current bar < stack top bar:
          - Pop the stack top (this is the height of rectangle)
          - Calculate width: i - new_stack_top - 1
          - Update max_area
       b. Push current index to stack
    
    2. After processing all bars, handle remaining bars in stack
    
    EXAMPLE: [2, 1, 5, 6, 2, 3]
    - Bar 0 (height 2): stack = [0]
    - Bar 1 (height 1): 1 < 2, so pop 0, area = 2*1 = 2, stack = [1]
    - Bar 2 (height 5): stack = [1, 2]
    - Bar 3 (height 6): stack = [1, 2, 3]
    - Bar 4 (height 2): 2 < 6, pop 3, area = 6*1 = 6
                      2 < 5, pop 2, area = 5*2 = 10
                      stack = [1, 4]
    - Bar 5 (height 3): stack = [1, 4, 5]
    - Process remaining: pop 5, area = 3*1 = 3
                        pop 4, area = 2*4 = 8
                        pop 1, area = 1*6 = 6
    - Max area = 10
    
    Time Complexity: O(n) - each element pushed and popped exactly once
    Space Complexity: O(n) - stack can hold at most n elements
    """
    if not heights:
        return 0
    
    stack = []  # Stack to store indices
    max_area = 0
    n = len(heights)
    
    for i in range(n):
        # While current bar is smaller than stack top, calculate areas
        while stack and heights[i] < heights[stack[-1]]:
            height = heights[stack.pop()]
            # Width is from previous smaller bar to current bar
            width = i if not stack else i - stack[-1] - 1
            area = height * width
            max_area = max(max_area, area)
        
        stack.append(i)
    
    # Process remaining bars in stack
    while stack:
        height = heights[stack.pop()]
        # Width extends to end of array
        width = n if not stack else n - stack[-1] - 1
        area = height * width
        max_area = max(max_area, area)
    
    return max_area


def largest_rectangle_area_brute_force(heights):
    """
    Brute force approach - check all possible rectangles.
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    """
    if not heights:
        return 0
    
    max_area = 0
    n = len(heights)
    
    for i in range(n):
        min_height = heights[i]
        for j in range(i, n):
            min_height = min(min_height, heights[j])
            area = min_height * (j - i + 1)
            max_area = max(max_area, area)
    
    return max_area


def largest_rectangle_area_optimized(heights):
    """
    Optimized version with cleaner code structure.
    Uses sentinel values to simplify boundary handling.
    """
    if not heights:
        return 0
    
    # Add sentinel values to simplify boundary handling
    heights = [0] + heights + [0]
    stack = []
    max_area = 0
    
    
    
    return max_area


def main():
    """Test the largest rectangle area function with various test cases."""
    test_cases = [
        # Basic test cases
        ([2, 1, 5, 6, 2, 3], 10),  # Classic example
        ([2, 4], 4),               # Two bars
        ([1], 1),                  # Single bar
        ([], 0),                   # Empty array
        
        # Edge cases
        ([1, 1, 1, 1], 4),         # All same height
        ([5, 4, 3, 2, 1], 9),      # Decreasing heights
        ([1, 2, 3, 4, 5], 9),      # Increasing heights
        
        # Complex cases
        ([6, 2, 5, 4, 5, 1, 6], 12),  # Multiple peaks
        ([2, 1, 2], 3),               # Valley in middle
        ([3, 6, 5, 7, 4, 8, 1, 0], 20), # Complex histogram
        
        # Large numbers
        ([1000, 2000, 1000], 3000),
        
        # Single large bar
        ([1, 1, 1, 100, 1, 1, 1], 100),
    ]
    
    print("=== Largest Rectangle in Histogram Tests ===\n")
    
    for i, (heights, expected) in enumerate(test_cases, 1):
        print(f"Test Case {i}: {heights}")
        
        # Test all three approaches
        result1 = largest_rectangle_area(heights)
        result2 = largest_rectangle_area_brute_force(heights)
        result3 = largest_rectangle_area_optimized(heights)
        
        print(f"Expected: {expected}")
        print(f"Monotonic Stack: {result1}")
        print(f"Brute Force: {result2}")
        print(f"Optimized: {result3}")
        
        if result1 == expected and result2 == expected and result3 == expected:
            print("✅ ALL APPROACHES PASSED\n")
        else:
            print("❌ SOME APPROACHES FAILED\n")
    
    # Visual representation for a complex case
    print("=== Visual Example ===")
    heights = [2, 1, 5, 6, 2, 3]
    print(f"Histogram: {heights}")
    print("Visual representation:")
    max_h = max(heights)
    for h in range(max_h, 0, -1):
        row = ""
        for bar in heights:
            if bar >= h:
                row += "█ "
            else:
                row += "  "
        print(f"{h:2d}| {row}")
    print("   " + "─" * (len(heights) * 2))
    print("   " + " ".join(str(i) for i in range(len(heights))))
    print(f"Largest rectangle area: {largest_rectangle_area(heights)}")


if __name__ == "__main__":
    main()
