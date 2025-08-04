"""
Stack Data Structure Implementation
==================================

A Stack is a Last-In-First-Out (LIFO) data structure where elements are added and removed
from the same end (top of the stack). Think of it like a stack of plates - you can only
add or remove plates from the top.

Key Operations:
- push(x): Add element x to the top of the stack
- pop(): Remove and return the top element
- peek(): Return the top element without removing it
- is_empty(): Check if stack is empty
- size(): Return number of elements in stack

Time Complexity:
- push(): O(1) - constant time
- pop(): O(1) - constant time  
- peek(): O(1) - constant time
- is_empty(): O(1) - constant time
- size(): O(1) - constant time

Space Complexity: O(n) where n is the number of elements

Common Applications:
- Function call stack in programming languages
- Undo operations in text editors
- Backtracking algorithms
- Expression evaluation
- Browser back button functionality
"""


class Stack:
    """
    A simple Stack implementation using Python's built-in list.
    
    This implementation provides all standard stack operations with O(1) time complexity.
    The stack uses a private list to store elements, ensuring encapsulation.
    """
    
    def __init__(self):
        """
        Initialize an empty stack.
        
        Creates a private list to store stack elements.
        """
        self.__stack_elements = []

    def push(self, value):
        """
        Add an element to the top of the stack.
        
        Args:
            value: The element to add to the stack
            
        Time Complexity: O(1) - append operation is constant time
        """
        self.__stack_elements.append(value)

    def pop(self):
        """
        Remove and return the top element from the stack.
        
        Returns:
            The top element if stack is not empty, None otherwise
            
        Time Complexity: O(1) - pop operation is constant time
        """
        if self.__stack_elements:
            return self.__stack_elements.pop()
        else:
            return None
        
    def peek(self):
        """
        Return the top element without removing it from the stack.
        
        Returns:
            The top element if stack is not empty, None otherwise
            
        Time Complexity: O(1) - accessing last element is constant time
        """
        if self.__stack_elements:
            return self.__stack_elements[-1]
        else:
            return None
        
    def is_empty(self):
        """
        Check if the stack is empty.
        
        Returns:
            True if stack is empty, False otherwise
            
        Time Complexity: O(1) - length check is constant time
        """
        return len(self.__stack_elements) == 0
    
    def size(self):
        """
        Return the number of elements in the stack.
        
        Returns:
            Number of elements currently in the stack
            
        Time Complexity: O(1) - length check is constant time
        """
        return len(self.__stack_elements)
    
    def print_stack(self):
        """
        Print the current state of the stack.
        
        This is a utility method for debugging and visualization.
        Prints the entire stack from bottom to top.
        """
        print(self.__stack_elements)

    def clear(self):
        """
        Remove all elements from the stack.
        
        This method resets the stack to its initial empty state.
        """
        self.__stack_elements = []
    
    def __str__(self):
        """
        String representation of the stack.
        
        Returns:
            String showing the stack elements from bottom to top
        """
        return f"Stack: {self.__stack_elements}"
    
    def __len__(self):
        """
        Return the number of elements in the stack.
        
        Returns:
            Number of elements in the stack
        """
        return len(self.__stack_elements)


def main():
    """
    Test function to demonstrate Stack functionality.
    
    This function shows various stack operations and their effects.
    """
    print("=== Stack Implementation Test ===\n")
    
    # Create a new stack
    s = Stack()
    print("Created new Stack")
    print(f"Stack: {s}")
    print(f"Is empty: {s.is_empty()}")
    print(f"Size: {s.size()}\n")
    
    # Test pushing elements
    print("Testing push operations:")
    test_values = [1, 2, 3, 4, 5]
    
    for val in test_values:
        s.push(val)
        print(f"Pushed {val}, Stack: {s}")
        print(f"Current size: {s.size()}")
        print(f"Top element (peek): {s.peek()}\n")
    
    # Test popping elements
    print("Testing pop operations:")
    while not s.is_empty():
        top_element = s.peek()
        popped_element = s.pop()
        print(f"Peeked: {top_element}, Popped: {popped_element}")
        print(f"Remaining stack: {s}")
        print(f"Size: {s.size()}\n")
    
    print("Stack is now empty\n")
    
    # Test edge cases
    print("Testing edge cases:")
    print(f"Pop from empty stack: {s.pop()}")
    print(f"Peek from empty stack: {s.peek()}")
    print(f"Is empty: {s.is_empty()}")
    print(f"Size: {s.size()}\n")
    
    # Test clear operation
    print("Testing clear operation:")
    s.push(10)
    s.push(20)
    s.push(30)
    print(f"Stack before clear: {s}")
    s.clear()
    print(f"Stack after clear: {s}")
    print(f"Is empty: {s.is_empty()}")
    
    print("\nTest completed successfully!")


if __name__ == "__main__":
    main()


