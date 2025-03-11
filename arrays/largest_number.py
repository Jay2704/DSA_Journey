# Function to find the largest number in an array


def largest_number(arr):
    # Initialize max_num with the first element of the array
    max_num = arr[0]
    # Iterate over the array starting from the second element
    for i in range(1, len(arr)):
        # Update max_num if the current element is greater
        max_num = max(max_num, arr[i])
    # Return the largest number found
    return max_num



if __name__ == "__main__":
    # Prompt the user to enter an array of numbers
    print("Enter the array: ")
    # Read the input, split by spaces, and convert to a list of integers
    arr = list(map(int, input().split()))
    # Print the largest number in the array
    print("Largest number in the array is: ", largest_number(arr))
