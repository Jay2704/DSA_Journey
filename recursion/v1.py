# Basic Recursion Example - Counting with Global Variable
# =====================================================
# This demonstrates fundamental recursion concepts:
# - Function calling itself
# - Base case to prevent infinite recursion
# - Global variable usage
# - Stack behavior in recursion

# Initialize the count to zero
cnt = 0

def recursive_count():
    """
    Recursive function that counts from 1 to 3.
    
    Base Case: When cnt reaches 3, stop recursion
    Recursive Case: Increment counter and call itself
    
    Time Complexity: O(n) where n is the limit
    Space Complexity: O(n) due to recursion stack
    """
    global cnt
    
    # Base case - prevents infinite recursion
    if cnt == 3:
        print("Base case reached! Recursion stops.")
        return
    
    # Recursive case
    cnt += 1
    print(f"Recursive call {cnt}")
    
    # Recursive function call
    recursive_count()
    
    # This executes after recursion unwinds (backtracking)
    print(f"Backtracking from call {cnt}")
    cnt -= 1

def main():
    """Main function to demonstrate recursion."""
    print("=== Basic Recursion Example ===\n")
    print("Starting recursive counting...")
    recursive_count()
    print(f"\nFinal count value: {cnt}")
    print("Recursion completed!")

if __name__ == "__main__":
    main()
