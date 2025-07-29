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

    