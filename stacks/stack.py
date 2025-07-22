class Stack:
    def __init__(self):
        self.stack_elements = []

    def push(self, value):
        self.stack_elements.append(value)

    def pop(self):
        if self.stack_elements:
            return self.stack_elements.pop()
        else:
            return None
        
    def peek(self):
        if self.stack_elements:
            return self.stack_elements[-1]
        else:
            return None
        
    def is_empty(self):
        return len(self.stack_elements) == 0
    
    def size(self):
        return len(self.stack_elements)
    
    def print_stack(self):
        print(self.stack_elements)

    def clear(self):
        self.stack_elements = []


