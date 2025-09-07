def sum_of_subarray_minimum(arr):
    """
    Calculate the sum of the minimum values of all subarrays of an array.
    """
    n = len(arr)
    result = 0
    for i in range(n):
        for j in range(i, n):
            result += min(arr[i:j+1])
    return result

print(sum_of_subarray_minimum([3, 1, 2, 4]))