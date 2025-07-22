from stack import Stack

def is_valid_paranthesis(s):
    stack = Stack()
    hash_map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    
    for char in s:
        if char in hash_map.values():
            stack.push(char)
        elif char in hash_map:
            if stack.is_empty() or stack.peek() != hash_map[char]:
                return False 
            stack.pop()
    return stack.is_empty()

def main():
    test_cases = [
        ("()", True),
        ("()[]{}", True),
        ("(]", False),
        ("([)]", False),
        ("{[]}", True),
        ("", True),
        ("((()", False),
        ("(()())", True),
        ("([{}])", True),
        ("([}{])", False),
    ]
    passed = 0
    for i, (expr, expected) in enumerate(test_cases, 1):
        result = is_valid_paranthesis(expr)
        print(f"Test case {i}: '{expr}' => {result} (Expected: {expected})")
        if result == expected:
            passed += 1
    print(f"\nPassed {passed} out of {len(test_cases)} test cases.")

if __name__ == "__main__":
    main()