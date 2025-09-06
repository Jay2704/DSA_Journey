import math

class MinStack:
    
    def __init__(self):
        self.stack = []

    def push(self, val):
        if not self.stack:
            self.stack.append((val, val))
        else:
            current_min = self.stack[-1][1]
            new_min = min(val, current_min)
            self.stack.append((val, new_min))

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()[0]
        else:
            raise IndexError("Pop from empty stack")
    
    def top(self):
        if not self.is_empty():
            return self.stack[-1][0]
        else:
            raise IndexError("Top from an empty stack")

    def get_min(self):
        if not self.is_empty():
            return self.stack[-1][1]
        else:
            raise IndexError("Get_min from an empty stack")

    def is_empty(self):
        return len(self.stack) == 0

    def size(self):
        return len(self.stack)

    def get_sum(self):
        return sum(element for element, _ in self.stack)
    
    def __str__(self):
        if self.is_empty():
            return "MinStack: []"
        
        elements = []
        for element, min_so_far in self.stack:
            elements.append(f"({element}, min={min_so_far})")
        
        return f"MinStack: [{', '.join(elements)}]"


def main():
    print("=== MinStack Implementation Test ===\n")
    
    min_stack = MinStack()
    print("Created new MinStack")
    print(f"Stack: {min_stack}")
    print(f"Is empty: {min_stack.is_empty()}")
    print(f"Size: {min_stack.size()}\n")
    
    print("Test Case 1: Basic operations with positive numbers")
    test_values = [3, 5, 2, 1, 4]
    
    for val in test_values:
        min_stack.push(val)
        print(f"Pushed {val}, Stack: {min_stack}")
        print(f"Current minimum: {min_stack.get_min()}\n")

    print(f"Sum of elements: {min_stack.get_sum()}\n")
    
    print("Popping elements:")
    while not min_stack.is_empty():
        top_val = min_stack.top()
        min_val = min_stack.get_min()
        popped_val = min_stack.pop()
        print(f"Top: {top_val}, Min: {min_val}, Popped: {popped_val}")
        if not min_stack.is_empty():
            print(f"Remaining stack: {min_stack}\n")
    
    print("Stack is now empty\n")
    
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