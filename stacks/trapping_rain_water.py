# Trapping Rain Water - Two Solutions
# ====================================
# Problem: Given n non-negative integers representing an elevation map,
# calculate how much rainwater can be trapped after raining.
#
# Example: height = [0,1,0,2,1,0,1,3,2,1,2,1]
# Visual:    █
#         █ █ █
#     █ █ █ █ █
#   0 1 0 2 1 0 1 3 2 1 2 1
# Water trapped = 6 units
#
# Approaches:
# 1. Dynamic Programming - Precompute left/right maxima
# 2. Two-Pointer - Optimized O(1) space solution
#
# Time Complexity: Both O(n)
# Space Complexity: Solution 1 = O(n), Solution 2 = O(1)

def solution1(height):
    """
    SOLUTION 1: Dynamic Programming Approach
    `
    ALGORITHM:
    1. Precompute left_max[i] = maximum height from left up to index i
    2. Precompute right_max[i] = maximum height from right up to index i
    3. For each bar i: water = min(left_max[i], right_max[i]) - height[i]
    
    KEY INSIGHT: Water at position i is limited by the smaller of:
    - Maximum height seen from left
    - Maximum height seen from right
    
    Time Complexity: O(n) - 3 passes through array
    Space Complexity: O(n) - Two arrays for left_max and right_max
    
    Example: [0,1,0,2,1,0,1,3,2,1,2,1]
    left_max:  [0,1,1,2,2,2,2,3,3,3,3,3]
    right_max: [3,3,3,3,3,3,3,3,2,2,2,1]
    water:     [0,0,1,0,1,2,1,0,0,1,0,0] = 6 units
    """
    n = len(height)
    
    # Edge case: Need at least 3 bars to trap water
    if n <= 2:
        return 0

    # Initialize arrays to store maximum heights
    left_max = [0] * n  # Maximum height from left side
    right_max = [0] * n  # Maximum height from right side
    water_trapped = 0

    # Initialize first and last elements
    left_max[0] = height[0]
    right_max[n-1] = height[n-1]
    
    # STEP 1: Compute left_max array (left to right)
    # left_max[i] = maximum height encountered from index 0 to i
    for i in range(1, n):
        left_max[i] = max(left_max[i-1], height[i])
        
    # STEP 2: Compute right_max array (right to left)
    # right_max[i] = maximum height encountered from index n-1 to i
    for j in range(n-2, -1, -1):
        right_max[j] = max(right_max[j+1], height[j])
    
    # STEP 3: Calculate water trapped at each position
    # Water = min(left_max, right_max) - current_height
    # The minimum of left_max and right_max determines the water level
    # Subtract current height to get the actual water trapped
    for k in range(n):
        water_trapped += min(left_max[k], right_max[k]) - height[k]
        
    return water_trapped


def solution2(height):
    """
    SOLUTION 2: Two-Pointer Approach (Optimized Space)
    
    ALGORITHM:
    1. Use two pointers starting from both ends
    2. Track left_max and right_max as we move
    3. Always process the side with smaller max
    4. Calculate water when moving pointers
    
    KEY INSIGHT: 
    - If left_max < right_max, water at left+1 is constrained by left_max
      (right side has higher barrier, so we can safely calculate from left)
    - Process from the side with smaller max value
    - We only need to know the smaller boundary to calculate water
    
    Time Complexity: O(n) - Single pass through array
    Space Complexity: O(1) - Only using pointers and variables
    
    Example: [0,1,0,2,1,0,1,3,2,1,2,1]
    - Start: left=0 (left_max=0), right=11 (right_max=1)
    - left_max < right_max, process left side
    - Move left pointer, calculate water as we go
    - Continue until left >= right
    
    Advantages over Solution 1:
    - O(1) space instead of O(n)
    - Single pass instead of three passes
    """
    n = len(height)
    
    # Edge case: Need at least 3 bars to trap water
    if n <= 2:
        return 0
    
    # Initialize two pointers at both ends
    left = 0  # Left pointer starts from beginning
    right = n - 1  # Right pointer starts from end
    
    # Track maximum heights encountered so far
    left_max = height[left]  # Maximum height from left side
    right_max = height[right]  # Maximum height from right side
    
    water_trapped = 0

    # Process until pointers meet
    while left < right:
        # Process the side with smaller maximum
        # This guarantees we can calculate water correctly
        if left_max < right_max:
            # Move left pointer forward
            left += 1
            
            # Check if current bar is higher than left_max
            if height[left] > left_max:
                # Update left_max if we found a taller bar
                left_max = height[left]
            else:
                # Current bar is lower, so we can trap water
                # Water level is determined by left_max (smaller boundary)
                water_trapped += left_max - height[left]
        else:
            # Move right pointer backward
            right -= 1
            
            # Check if current bar is higher than right_max
            if height[right] > right_max:
                # Update right_max if we found a taller bar
                right_max = height[right]
            else:
                # Current bar is lower, so we can trap water
                # Water level is determined by right_max (smaller boundary)
                water_trapped += right_max - height[right]
                
    return water_trapped
    

def test_solutions():
    """
    Comprehensive test suite for trapping rain water solutions.
    
    Tests both Solution 1 (DP) and Solution 2 (Two-Pointer) approaches
    with various test cases covering:
    - Basic examples
    - Edge cases (empty, single element, two elements)
    - Edge patterns (ascending, descending, all same)
    - Complex cases (valleys, peaks, multiple valleys)
    - Large complex cases
    
    Each test case: (heights_array, expected_water, description)
    """
    
    # Test cases: (input_heights, expected_output, description)
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
    
    # Print test suite header
    print("=" * 80)
    print("TRAPPING RAIN WATER - COMPREHENSIVE TEST SUITE")
    print("=" * 80)
    
    # Print column headers for test results table
    print(f"{'Test Case':<25} {'Input':<30} {'Expected':<8} {'Sol1':<6} {'Sol2':<6} {'Match':<5}")
    print("-" * 80)
    
    # Track if all tests pass
    all_passed = True
    
    # Run each test case
    for i, (heights, expected, description) in enumerate(test_cases, 1):
        try:
            # Test both solutions
            result1 = solution1(heights)  # DP approach
            result2 = solution2(heights)  # Two-pointer approach
            
            # Check if both solutions match expected result
            match = "✓" if result1 == result2 == expected else "✗"
            
            # Mark as failed if results don't match
            if result1 != result2 or result1 != expected:
                all_passed = False
            
            # Format input for display (truncate if too long)
            input_str = str(heights)
            if len(input_str) > 28:
                input_str = input_str[:25] + "..."
            
            # Print test result row
            print(f"{description:<25} {input_str:<30} {expected:<8} {result1:<6} {result2:<6} {match:<5}")
            
        except Exception as e:
            # Handle any errors during testing
            print(f"{description:<25} {str(heights):<30} ERROR: {str(e)}")
            all_passed = False
    
    # Print final summary
    print("-" * 80)
    print(f"Overall Result: {'ALL TESTS PASSED ✓' if all_passed else 'SOME TESTS FAILED ✗'}")
    print("=" * 80)
    
    return all_passed

# Main execution block - Run comprehensive test suite
if __name__ == "__main__":
    test_solutions()
