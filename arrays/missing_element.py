def find_missing_element(arr, q, n):
    """
    Function to find the missing element in an array containing numbers from q to n.
    returns the missing number in the sequence.
    """
    expected_sum = sum(range(q, n + 1))  # Calculate the sum of numbers from q to n
    actual_sum = sum(arr)  # Calculate the sum of the provided array
    return expected_sum - actual_sum  # The missing number is the difference




# Taking user input
q = int(input("Enter the starting number (q): "))  # Input for the starting number of the sequence
n = int(input("Enter the ending number (n): "))  # Input for the ending number of the sequence



# Prompt user to enter the sequence with one missing number
print(f"Enter {n - q} numbers separated by spaces (excluding one missing number):")
arr = list(map(int, input().split()))  # Read and convert user input into a list of integers



# Finding and printing the missing element
missing = find_missing_element(arr, q, n)
print(f"The missing element is: {missing}")  # Output the missing number
