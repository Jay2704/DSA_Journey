import math

# This minimum stack takes O(2*N) space complexity.


class MinStack(self):
    def __init__(self):
        self.stack = []

    def push(self, val):
        if not self.stack:
            self.stack.append((val, val))
        else:
            self.stack.append((val, min(val, self.stack[-1][1])))

    def pop(self):
        if not self.stack.is_empty():
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