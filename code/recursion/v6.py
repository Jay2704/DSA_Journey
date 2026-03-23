# Recursion on Subsequence

def subseq(ind, ds, arr, n):
  """
  This function generates all possible subsequences of a given array 'arr' using recursion.

  Args:
      ind: Current index in the array (starts from 0).
      ds: Current subsequence (represented as a list).
      arr: The original array.
      n: Length of the array.
  """
  
  # Base Case: If we reach the end of the array, print the current subsequence and return.
  if ind == n:
    print(ds)
    return

  # Recursive Case: Explore two possibilities for the current element.

  # 1. Include the current element in the subsequence:
  ds.append(arr[ind])  # Add the element to the current subsequence.
  subseq(ind + 1, ds, arr, n)  # Recursively explore subsequences starting from the next element.

  # 2. Backtrack: Exclude the current element and explore subsequences without it.
  ds.pop()  # Remove the element from the subsequence.
  subseq(ind + 1, ds, arr, n)  # Recursively explore subsequences starting from the next element, but excluding the current one.


# Get the length of the array from user input
n = int(input())

# Convert the user input string to a list of integers
arr = list(map(int, input().split()))

# Initialize an empty list to store the subsequences
ds = []

# Start the recursive exploration from the beginning of the array
subseq(0, ds, arr, n)
