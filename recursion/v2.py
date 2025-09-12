# Recursion Patterns: Forward vs Backtracking Examples
# ===================================================
# Demonstrates different recursion approaches:
# 1. Forward recursion - print then recurse
# 2. Backtracking - recurse then print

def print_1_to_n_forward(i, n):
    """Print numbers from 1 to n using forward recursion."""
    if i > n:
        return 
    print(i, end=" ")
    print_1_to_n_forward(i + 1, n)


def print_n_to_1_forward(n):
    """Print numbers from n to 1 using forward recursion."""
    if n <= 0:
        return 
    print(n, end=" ")
    print_n_to_1_forward(n - 1)


def print_1_to_n_backtracking(i, n):
    """Print numbers from 1 to n using backtracking."""
    if i > n:
        return
    print_1_to_n_backtracking(i + 1, n)
    print(i, end=" ")


def print_n_to_1_backtracking(i, n):
    """Print numbers from n to 1 using backtracking."""
    if i > n:
        return 
    print_n_to_1_backtracking(i + 1, n)
    print(i, end=" ")


def demonstrate_patterns(n):
    """Demonstrate all recursion patterns for a given number."""
    print(f"\n=== Recursion Patterns for n={n} ===")
    
    print("1. Forward - Print 1 to n:")
    print_1_to_n_forward(1, n)
    print("\n")
    
    print("2. Forward - Print n to 1:")
    print_n_to_1_forward(n)
    print("\n")
    
    print("3. Backtracking - Print 1 to n:")
    print_1_to_n_backtracking(1, n)
    print("\n")
    
    print("4. Backtracking - Print n to 1:")
    print_n_to_1_backtracking(1, n)
    print("\n")


def main():
    """Main function to demonstrate recursion patterns."""
    print("Recursion Patterns: Forward vs Backtracking")
    print("=" * 45)
    
    # Demonstrate with predefined values
    demo_values = [3, 4]
    for n in demo_values:
        demonstrate_patterns(n)
        print("-" * 40)
    
    # Interactive mode
    try:
        n = int(input("\nEnter a number to test (1-8): "))
        if 1 <= n <= 8:
            demonstrate_patterns(n)
        else:
            print("Please enter a number between 1 and 8.")
    except ValueError:
        print("Invalid input. Using default value 5.")
        demonstrate_patterns(5)
    except KeyboardInterrupt:
        print("\nExiting...")
    
    print("\nKey Insight:")
    print("Forward: Print → Recurse")
    print("Backtracking: Recurse → Print")


if __name__ == "__main__":
    main()
