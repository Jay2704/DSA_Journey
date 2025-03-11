# Function to find the second largest number in an array


def second_largest(arr):
    if len(arr) < 2:
        return None  # Not enough elements for a second largest

    # Initialize large and second_large to negative infinity
    large, second_large = float('-inf'), float('-inf')
    # Iterate over each number in the array
    for number in arr:
        # If the current number is greater than large, update second_large and large
        if number > large:
            second_large = large
            large = number

    # Return second_large if it has been updated, otherwise return None
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