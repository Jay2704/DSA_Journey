# Function to check if an array is sorted in non-decreasing order

def is_sorted(arr):
    # Iterate through the array and check if each element is less than or equal to the next
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True


if __name__ == "__main__":
    # Prompt the user to enter an array of numbers
    print("Enter the array: ")
    # Read the input, split by spaces, and convert to a list of integers
    arr = list(map(int, input().split()))
    # Check if the array is sorted and print the result
    if is_sorted(arr):
        print("The array is sorted.")
    else:
        print("The array is not sorted.") 