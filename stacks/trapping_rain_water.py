def solution1(height):
    """Dynamic programming approach with precomputed left/right maxima."""
    n = len(height)
    if n <= 2:
        return 0

    left_max = [0] * n
    right_max = [0] * n
    water_trapped = 0

    left_max[0] = height[0]
    right_max[n-1] = height[n-1]
    
    # Build running maximum when scanning from the left.
    for i in range(1,n):
        left_max[i] = max(left_max[i-1], height[i])

    # Build running maximum when scanning from the right.
    for j in range(n-2, -1, -1):
        right_max[j] = max(right_max[j+1], height[j])

    # Water above each bar is bounded by the smaller of both maxima.
    for k in range(n):
        water_trapped += min(left_max[k], right_max[k]) - height[k]

    return water_trapped


def solution2(height):
    """Two-pointer approach keeping track of current boundary maxima."""
    n = len(height)
    if n <= 2:
        return 0

    left = 0
    right = n - 1
    
    left_max = height[left]
    right_max = height[right]
    
    water_trapped = 0

    while left < right:
        if left_max < right_max:
            left += 1
            # Update left boundary; trap water if current bar is shorter.
            if height[left] > left_max:
                left_max = height[left]
            else:
                water_trapped += left_max - height[left]
        else:
            right -= 1
            # Update right boundary; trap water if current bar is shorter.
            if height[right] > right_max:
                right_max = height[right]
            else:
                water_trapped += right_max - height[right]
                
    return water_trapped


def test_solutions():
    
    test_cases = [
        ([0,1,0,2,1,0,1,3,2,1,2,1], 6, "Basic example"),
        ([3,0,2,0,4], 7, "Simple case"),
        ([2,0,2], 2, "Three elements"),
        ([1,2,3,4,5], 0, "Ascending order"),
        ([5,4,3,2,1], 0, "Descending order"),
        
        ([], 0, "Empty array"),
        ([1], 0, "Single element"),
        ([1,1], 0, "Two equal elements"),
        ([1,2], 0, "Two ascending elements"),
        ([2,1], 0, "Two descending elements"),
        
        ([3,3,3,3,3], 0, "All same height"),
        ([0,0,0,0,0], 0, "All zeros"),
        
        ([1,2,3,2,1], 0, "Peak in middle"),
        ([1,3,2,3,1], 1, "Two peaks"),
        
        ([3,1,2,1,3], 5, "Valley in middle"),
        ([4,2,0,3,2,5], 9, "Complex valley"),
        
        ([3,2,1,2,3], 4, "Edge peaks"),
        ([1,0,2,0,1], 2, "Small edge peaks"),
        
        ([0,2,0,1,0,3,0,1,0,2,0], 10, "Multiple valleys"),
        ([6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,8,5,6], 82, "Large complex case"),
        
        ([1,0,1,0,1,0,1], 3, "Alternating pattern"),
        ([5,0,0,0,5], 15, "Deep valley"),
        ([0,5,0,5,0], 5, "Multiple peaks"),
    ]
    
    print("=" * 80)
    print("TRAPPING RAIN WATER - COMPREHENSIVE TEST SUITE")
    print("=" * 80)
    print(f"{'Test Case':<25} {'Input':<30} {'Expected':<8} {'Sol1':<6} {'Sol2':<6} {'Match':<5}")
    print("-" * 80)
    
    all_passed = True
    
    for i, (heights, expected, description) in enumerate(test_cases, 1):
        try:
            result1 = solution1(heights)
            result2 = solution2(heights)
            
            match = "✓" if result1 == result2 == expected else "✗"
            if result1 != result2 or result1 != expected:
                all_passed = False
            
            input_str = str(heights)
            if len(input_str) > 28:
                input_str = input_str[:25] + "..."
            
            print(f"{description:<25} {input_str:<30} {expected:<8} {result1:<6} {result2:<6} {match:<5}")
            
        except Exception as e:
            print(f"{description:<25} {str(heights):<30} ERROR: {str(e)}")
            all_passed = False
    
    print("-" * 80)
    print(f"Overall Result: {'ALL TESTS PASSED ✓' if all_passed else 'SOME TESTS FAILED ✗'}")
    print("=" * 80)
    
    return all_passed

if __name__ == "__main__":
    test_solutions()
