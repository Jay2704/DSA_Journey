import math

class MinStack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        if self.stack:
            min_val = min(val, self.stack[-1][1])
        else:
            min_val = val
        self.stack.append(val, min_val)

    def pop(self):
        if self.stack:
            return self.stack.pop()[0]
        return None
    
    def top(self):
        if self.stack:
            return self.stack[-1][0]
        return None
    
    def get_min(self):      
        if self.stack:
            return self.stack[-1][1]
        return None
    
    def is_empty(self):
        return len(self.stack) == 0
    
    def size(self):
        return len(self.stack)