class Stack:
    def __init__(self):
        self.__stack_elements = []

    def push(self, value):
        self.__stack_elements.append(value)

    def pop(self):
        if self.__stack_elements:
            return self.__stack_elements.pop()
        else:
            return None
        
    def peek(self):
        if self.__stack_elements:
            return self.__stack_elements[-1]
        else:
            return None
        
    def is_empty(self):
        return len(self.__stack_elements) == 0
    
    def size(self):
        return len(self.__stack_elements)
    
    def print_stack(self):
        print(self.__stack_elements)

    def clear(self):
        self.__stack_elements = []


def main():
    print("Testing Stack class:")
    s = Stack()
    print("Is empty:", s.is_empty())
    s.push(1)
    s.push(2)
    s.push(3)
    print("Stack after pushes:", s.__stack_elements)
    print("Peek:", s.peek())
    print("Pop:", s.pop())
    print("Stack after pop:", s.__stack_elements)
    print("Size:", s.size())
    print("Is empty:", s.is_empty())
    s.clear()
    print("Stack after clear:", s.__stack_elements)
    print("Is empty:", s.is_empty())

if __name__ == "__main__":
    main()


