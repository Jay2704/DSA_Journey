from stack import Stack

def reverse_string_using_stack(text):
    """
    Reverse a string using stack operations
    """
    if not text:
        return text
    
    stack = Stack()
    # Push all characters to stack
    for char in text:
        stack.push(char)
    
    # Pop characters to get reversed string
    reversed_text = ""
    while not stack.is_empty():
        reversed_text += stack.pop()
    
    return reversed_text

def decimal_to_binary(decimal_num):
    """
    Convert decimal number to binary using stack
    """
    if decimal_num == 0:
        return "0"
    
    stack = Stack()
    num = abs(decimal_num)
    
    # Convert to binary by repeatedly dividing by 2
    while num > 0:
        remainder = num % 2
        stack.push(remainder)
        num = num // 2
    
    # Build binary string from stack
    binary = ""
    while not stack.is_empty():
        binary += str(stack.pop())
    
    # Add negative sign if original number was negative
    if decimal_num < 0:
        binary = "-" + binary
    
    return binary

def is_balanced_parentheses(expression):
    """
    Check if parentheses are balanced using stack
    Supports (), [], and {}
    """
    if not expression:
        return True
    
    stack = Stack()
    opening_brackets = {'(', '[', '{'}
    closing_brackets = {')', ']', '}'}
    bracket_pairs = {')': '(', ']': '[', '}': '{'}
    
    for char in expression:
        if char in opening_brackets:
            stack.push(char)
        elif char in closing_brackets:
            if stack.is_empty():
                return False
            if stack.pop() != bracket_pairs[char]:
                return False
    
    return stack.is_empty()

def evaluate_postfix_expression(expression):
    """
    Evaluate postfix expression using stack
    Supports +, -, *, / operations
    """
    if not expression:
        return 0
    
    stack = Stack()
    operators = {'+', '-', '*', '/'}
    
    for token in expression.split():
        if token not in operators:
            # Token is a number
            try:
                stack.push(float(token))
            except ValueError:
                return "Invalid expression"
        else:
            # Token is an operator
            if stack.size() < 2:
                return "Invalid expression"
            
            operand2 = stack.pop()
            operand1 = stack.pop()
            
            if token == '+':
                result = operand1 + operand2
            elif token == '-':
                result = operand1 - operand2
            elif token == '*':
                result = operand1 * operand2
            elif token == '/':
                if operand2 == 0:
                    return "Division by zero"
                result = operand1 / operand2
            
            stack.push(result)
    
    if stack.size() != 1:
        return "Invalid expression"
    
    return stack.pop()

def sort_stack(stack):
    """
    Sort a stack using only stack operations
    Returns a new sorted stack
    """
    if stack.is_empty():
        return Stack()
    
    temp_stack = Stack()
    
    while not stack.is_empty():
        # Pop top element from original stack
        temp = stack.pop()
        
        # Move elements from temp_stack back to original stack
        # until we find the right position for temp
        while not temp_stack.is_empty() and temp_stack.peek() > temp:
            stack.push(temp_stack.pop())
        
        # Push temp to temp_stack
        temp_stack.push(temp)
    
    return temp_stack

def main():
    print("=== Stack Operations Demo ===\n")
    
    # Test reverse string
    print("1. Reverse String using Stack:")
    test_strings = ["hello", "python", "stack", "", "a"]
    for text in test_strings:
        reversed_text = reverse_string_using_stack(text)
        print(f"   '{text}' -> '{reversed_text}'")
    print()
    
    # Test decimal to binary
    print("2. Decimal to Binary conversion:")
    test_numbers = [10, 25, 0, 255, -42]
    for num in test_numbers:
        binary = decimal_to_binary(num)
        print(f"   {num} -> {binary}")
    print()
    
    # Test balanced parentheses
    print("3. Balanced Parentheses Check:")
    test_expressions = [
        "((()))", "()()()", "({[]})", "(((", "())", 
        "([)]", "", "a(b)c[d]e{f}g"
    ]
    for expr in test_expressions:
        is_balanced = is_balanced_parentheses(expr)
        print(f"   '{expr}' -> {'Balanced' if is_balanced else 'Not Balanced'}")
    print()
    
    # Test postfix evaluation
    print("4. Postfix Expression Evaluation:")
    test_postfix = [
        "5 3 +", "10 5 2 * -", "15 7 1 1 + - / 3 * 2 1 1 + + -",
        "3 4 + 5 *", "10 2 /", "1 2 + 3 4 + *"
    ]
    for expr in test_postfix:
        result = evaluate_postfix_expression(expr)
        print(f"   '{expr}' = {result}")
    print()
    
    # Test stack sorting
    print("5. Stack Sorting:")
    test_stack = Stack()
    test_numbers = [34, 3, 31, 98, 92, 23]
    for num in test_numbers:
        test_stack.push(num)
    
    print(f"   Original stack: {test_numbers}")
    sorted_stack = sort_stack(test_stack)
    
    # Convert sorted stack to list for display
    sorted_list = []
    while not sorted_stack.is_empty():
        sorted_list.append(sorted_stack.pop())
    sorted_list.reverse()  # To show ascending order
    
    print(f"   Sorted stack: {sorted_list}")
    print()

if __name__ == "__main__":
    main()
