# Recursion Patterns: Forward vs Backtracking
# ===========================================
# This demonstrates different recursion patterns:
# 1. Forward Recursion - Print during recursive call
# 2. Backtracking - Print after recursive call returns
# 
# Key Learning: Same result, different execution order!

def print_1_to_n_forward(i, n):
    """
    Print numbers from 1 to n using FORWARD recursion.
    Prints the number BEFORE making the recursive call.
    
    Time Complexity: O(n)
    Space Complexity: O(n) - recursion stack
    """
    # Base case
    if i > n:
        return 
    
    # Print BEFORE recursive call (forward)
    print(i, end=" ")
    print_1_to_n_forward(i + 1, n)


def print_n_to_1_forward(n):
    """
    Print numbers from n to 1 using FORWARD recursion.
    Prints the number BEFORE making the recursive call.
    
    Time Complexity: O(n)
    Space Complexity: O(n) - recursion stack
    """
    # Base case
    if n <= 0:
        return 
    
    # Print BEFORE recursive call (forward)
    print(n, end=" ")
    print_n_to_1_forward(n - 1)


def print_1_to_n_backtracking(i, n):
    """
    Print numbers from 1 to n using BACKTRACKING.
    Makes recursive call FIRST, then prints during return.
    
    Time Complexity: O(n)
    Space Complexity: O(n) - recursion stack
    """
    # Base case
    if i > n:
        return
    
    # Recursive call FIRST (go deeper)
    print_1_to_n_backtracking(i + 1, n)
    
    # Print AFTER recursive call returns (backtrack)
    print(i, end=" ")


def print_n_to_1_backtracking(i, n):
    """
    Print numbers from n to 1 using BACKTRACKING.
    Makes recursive call FIRST, then prints during return.
    
    Time Complexity: O(n)
    Space Complexity: O(n) - recursion stack
    """
    # Base case
    if i > n:
        return
    
    # Recursive call FIRST (go deeper)
    print_n_to_1_backtracking(i + 1, n)
    
    # Print AFTER recursive call returns (backtrack)
    print(i, end=" ")


def demonstrate_recursion_patterns(n):
    """Demonstrate both forward and backtracking patterns."""
    print(f"=== Recursion Patterns Demonstration (n={n}) ===\n")
    
    print("1. Forward Recursion - Print 1 to n:")
    print("   Execution: Print → Recurse → Print → Recurse...")
    print("   Output: ", end="")
    print_1_to_n_forward(1, n)
    print("\n")
    
    print("2. Forward Recursion - Print n to 1:")
    print("   Execution: Print → Recurse → Print → Recurse...")
    print("   Output: ", end="")
    print_n_to_1_forward(n)
    print("\n")
    
    print("3. Backtracking - Print 1 to n:")
    print("   Execution: Recurse → Recurse → ... → Print → Print")
    print("   Output: ", end="")
    print_1_to_n_backtracking(1, n)
    print("\n")
    
    print("4. Backtracking - Print n to 1:")
    print("   Execution: Recurse → Recurse → ... → Print → Print")
    print("   Output: ", end="")
    print_n_to_1_backtracking(1, n)
    print("\n")


def main():
    """Main function to demonstrate recursion patterns."""
    print("Recursion Patterns: Forward vs Backtracking")
    print("=" * 50)
    
    # Test with different values
    test_values = [3, 5]
    
    for n in test_values:
        demonstrate_recursion_patterns(n)
        print("-" * 50)
    
    # Interactive mode
    try:
        user_input = input("\nEnter a number to test (or press Enter to skip): ").strip()
        if user_input:
            n = int(user_input)
            if n > 0 and n <= 10:  # Limit for readability
                demonstrate_recursion_patterns(n)
            else:
                print("Please enter a number between 1 and 10 for better readability.")
    except ValueError:
        print("Invalid input. Skipping interactive mode.")
    except KeyboardInterrupt:
        print("\nExiting...")
    
    print("\nKey Takeaway:")
    print("- Forward: Print → Recurse (natural order)")
    print("- Backtracking: Recurse → Print (reverse order)")
    print("- Same result, different execution path!")


if __name__ == "__main__":
    main()
