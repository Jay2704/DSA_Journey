def find_missing_element(arr, q, n):
    expected_sum = sum(range(q, n + 1))
    actual_sum = sum(arr)
    return expected_sum - actual_sum

# Taking user input
q = int(input("Enter the starting number (q): "))
n = int(input("Enter the ending number (n): "))

print(f"Enter {n - q} numbers separated by spaces (excluding one missing number):")
arr = list(map(int, input().split()))

# Finding and printing the missing element
missing = find_missing_element(arr, q, n)
print(f"The missing element is: {missing}")
