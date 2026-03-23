# Function to remove duplicates from an array



# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================
# check it ============================================================



def remove_duplicates(arr):
    # Use a dictionary to track seen elements
    seen = {}
    # Initialize an empty list to store the result
    result = []
    # Iterate over each element in the array
    for num in arr:
        # If the element is not in the seen dictionary, add it to the result and mark it as seen
        if num not in seen:
            result.append(num)
            seen[num] = True
    # Return the result list without duplicates
    return result




if __name__ == "__main__":
    # Prompt the user to enter an array of numbers
    print("Enter the array: ")
    # Read the input, split by spaces, and convert to a list of integers
    arr = list(map(int, input().split()))
    # Remove duplicates from the array and print the result
    print("Array after removing duplicates: ", remove_duplicates(arr))



