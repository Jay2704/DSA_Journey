def move_zeros(nums):
    """
    Moves all zeros in the given list to the end while maintaining the relative order of non-zero elements.
    
    Parameters:
    nums (list): A list of integers.

    Returns:
    list: A list with all zeros moved to the end.
    """
    for i in range(len(nums)):
        if nums[i] == 0:  # Check if the current element is zero
            nums.pop(i)  # Remove the zero from its current position
            nums.append(0)  # Append zero to the end of the list
    return nums




def main():
    """
    Main function to take user input, process the list, and print the output.
    """
    arr = list(map(int, input().split()))  # Take space-separated integers as input and convert them into a list
    print(move_zeros(arr))  # Call the function and print the modified list


if __name__ == "__main__":
    main()  # Run the main function when the script is executed