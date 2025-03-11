# Function to find the second largest number in an array


def second_largest(arr):
    if len(arr) < 2:
        return None  # Not enough elements for a second largest

    large, second_large = float('-inf'), float('-inf')
    for number in arr:
        if number > large:
            second_large = large
            large = number

    return second_large if second_large != float('-inf') else None




if __name__ == "__main__":
    # Prompt the user to enter an array of numbers
    print("Enter the array: ")
    # Read the input, split by spaces, and convert to a list of integers
    arr = list(map(int, input().split()))
    # Print the second largest number in the array
    result = second_largest(arr)
    if result is not None:
        print("Second largest number in the array is: ", result)
    else:
        print("Array does not have a second largest number.") 