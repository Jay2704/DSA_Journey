from stack import Stack




def recognize_speech_from_mic():
    """
    Captures audio from the microphone and returns the transcribed text using Google's speech recognition API.
    """
    try:
        import speech_recognition as sr
    except ImportError:
        print("Please install the 'speech_recognition' package to use this function.")
        return None

    recognizer = sr.Recognizer()
    mic = sr.Microphone()
    print("Please speak into the microphone...")

    with mic as source:
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio)
        print("You said:", text)
        return text
    except sr.UnknownValueError:
        print("Sorry, could not understand the audio.")
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
    return None

# Example usage:
# text = recognize_speech_from_mic()
# print("Recognized text:", text)





def is_valid_paranthesis(s):
    stack = Stack() #make an object of stack from stack.py
    hash_map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    stack.__stack_elements
    print(stack.__stack_elements)
    
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

