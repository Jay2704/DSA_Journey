# Function to perform a left rotation by one position on an array

def left_rotate_one(arr):
    # Store the first element in a temporary variable
    temp = arr[0]
    # Shift each element of the array one position to the left
    for i in range(1, len(arr)):
        arr[i-1] = arr[i]
    # Place the first element at the end of the array
    arr[len(arr)-1] = temp
    # Return the rotated array
    return arr





# Function to perform a left rotation by k positions on an array
def left_rotate_k(arr, k):
    k = k % len(arr)

    # Reverse the first k elements
    arr[:k] = reversed(arr[:k])
    
    # Reverse the remaining elements
    arr[k:] = reversed(arr[k:])
    
    # Reverse the whole array
    arr[:] = reversed(arr)

    return arr





if __name__ == "__main__":
    # Prompt the user to enter an array of numbers
    print("Enter the array: ")
    # Read the input, split by spaces, and convert to a list of integers
    arr = list(map(int, input().split()))
    # Perform left rotation by one
    rotated_arr = left_rotate_one(arr)
    # Print the rotated array
    print("Array after left rotation by one: ", rotated_arr)

    # Example call to left_rotate_k (to be implemented)
    print("Enter the array: ")
    # Read the input, split by spaces, and convert to a list of integers
    arr = list(map(int, input().split()))
    k = int(input("Enter the number of places for rotation: "))
    result = left_rotate_k(arr, k)
    # Print the rotated array after k places
    print("Array after left rotation by", k, "places: ", result)