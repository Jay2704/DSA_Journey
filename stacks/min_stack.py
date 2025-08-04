import math

"""
MinStack Implementation
======================

This is a stack data structure that supports O(1) time complexity for:
- push(x): Add element x to the stack
- pop(): Remove and return the top element
- top(): Return the top element without removing it
- getMin(): Return the minimum element in the stack

Space Complexity: O(2*N) where N is the number of elements
Time Complexity: O(1) for all operations

Implementation Strategy:
- Store pairs of (element, minimum_so_far) in the stack
- Each pair contains the actual element and the minimum value seen up to that point
- This allows O(1) access to the current minimum without additional data structures
"""


class MinStack:
    """
    A stack that supports O(1) minimum element retrieval.
    
    Each element in the stack is stored as a tuple: (element, minimum_so_far)
    This allows us to track the minimum value at any point in O(1) time.
    """
    
    def __init__(self):
        """
        Initialize an empty MinStack.
        
        The stack will store tuples of (element, minimum_so_far).
        """
        self.stack = []

    def push(self, val):
        """
        Push an element onto the stack.
        
        Args:
            val: The value to push onto the stack
            
        Time Complexity: O(1)
        Space Complexity: O(1) per operation
        """
        if not self.stack:
            # If stack is empty, the element is both the value and the minimum
            self.stack.append((val, val))
        else:
            # Compare current value with existing minimum and store the smaller one
            current_min = self.stack[-1][1]  # Get current minimum
            new_min = min(val, current_min)   # Calculate new minimum
            self.stack.append((val, new_min)) # Store (value, new_min)

    def pop(self):
        """
        Remove and return the top element from the stack.
        
        Returns:
            The top element value (not the tuple)
            
        Raises:
            IndexError: If stack is empty
            
        Time Complexity: O(1)
        """
        if not self.is_empty():
            # Return only the element value, not the entire tuple
            return self.stack.pop()[0]
        else:
            raise IndexError("Pop from empty stack")
    
    def top(self):
        """
        Return the top element without removing it.
        
        Returns:
            The top element value
            
        Raises:
            IndexError: If stack is empty
            
        Time Complexity: O(1)
        """
        if not self.is_empty():
            # Return only the element value from the top tuple
            return self.stack[-1][0]
        else:
            raise IndexError("Top from an empty stack")

    def get_min(self):
        """
        Return the minimum element in the stack.
        
        Returns:
            The minimum element value
            
        Raises:
            IndexError: If stack is empty
            
        Time Complexity: O(1) - This is the key advantage of this implementation
        """
        if not self.is_empty():
            # Return the minimum value from the top tuple
            return self.stack[-1][1]
        else:
            raise IndexError("Get_min from an empty stack")

    def is_empty(self):
        """
        Check if the stack is empty.
        
        Returns:
            True if stack is empty, False otherwise
            
        Time Complexity: O(1)
        """
        return len(self.stack) == 0

    def size(self):
        """
        Return the number of elements in the stack.
        
        Returns:
            Number of elements in the stack
            
        Time Complexity: O(1)
        """
        return len(self.stack)
    
    def __str__(self):
        """
        String representation of the MinStack.
        
        Returns:
            String showing the stack elements and their corresponding minimums
        """
        if self.is_empty():
            return "MinStack: []"
        
        elements = []
        for element, min_so_far in self.stack:
            elements.append(f"({element}, min={min_so_far})")
        
        return f"MinStack: [{', '.join(elements)}]"


def main():
    """
    Test function to demonstrate MinStack functionality.
    """
    print("=== MinStack Implementation Test ===\n")
    
    # Create a new MinStack
    min_stack = MinStack()
    print("Created new MinStack")
    print(f"Stack: {min_stack}")
    print(f"Is empty: {min_stack.is_empty()}")
    print(f"Size: {min_stack.size()}\n")
    
    # Test case 1: Basic operations with positive numbers
    print("Test Case 1: Basic operations with positive numbers")
    test_values = [3, 5, 2, 1, 4]
    
    for val in test_values:
        min_stack.push(val)
        print(f"Pushed {val}, Stack: {min_stack}")
        print(f"Current minimum: {min_stack.get_min()}\n")
    
    print("Popping elements:")
    while not min_stack.is_empty():
        top_val = min_stack.top()
        min_val = min_stack.get_min()
        popped_val = min_stack.pop()
        print(f"Top: {top_val}, Min: {min_val}, Popped: {popped_val}")
        if not min_stack.is_empty():
            print(f"Remaining stack: {min_stack}\n")
    
    print("Stack is now empty\n")
    
    # Test case 2: Operations with negative numbers
    print("Test Case 2: Operations with negative numbers")
    min_stack2 = MinStack()
    test_values2 = [-3, -1, -5, -2, -4]
    
    for val in test_values2:
        min_stack2.push(val)
        print(f"Pushed {val}, Current minimum: {min_stack2.get_min()}")
    
    print(f"\nFinal stack: {min_stack2}")
    print("Popping all elements:")
    
    while not min_stack2.is_empty():
        popped = min_stack2.pop()
        print(f"Popped: {popped}")
        if not min_stack2.is_empty():
            print(f"Current minimum: {min_stack2.get_min()}")
    
    print("\nTest completed successfully!")


if __name__ == "__main__":
    main()