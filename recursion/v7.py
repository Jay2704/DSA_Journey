# Print all Subsequence with sum = Sum using recursion

def allSubseq(ind, ds, s, total, arr, n):

    if ind == n:
        if s == total:
            print(ds)
        return 
    
    ds.append(arr[ind]) # add the element
    s += arr[ind]
    allSubseq(ind+1,ds,s,total,arr,n)

    s -= arr[ind]
    ds.pop() # remove the element
    allSubseq(ind+1,ds,s,total,arr,n)




def findOneSubseq(ind, ds, s, total, arr, n):
    if ind == n:
        if s == total:
            return ds.copy()  # Return a copy of the current subsequence
        return None  # No valid subsequence found at this branch

    # Include the current element
    ds.append(arr[ind])
    s += arr[ind]
    result = findOneSubseq(ind + 1, ds, s, total, arr, n)
    if result is not None:
        return result  # Valid subsequence found, return it

    # Exclude the current element
    s -= arr[ind]
    ds.pop()
    result = findOneSubseq(ind + 1, ds, s, total, arr, n)
    if result is not None:
        return result  # Valid subsequence found, return it

    return None  # No valid subsequence found in any branch




def printOneSubseq(arr, total):
    n = len(arr)
    result = findOneSubseq(0, [], 0, total, arr, n)
    if result:
        print(result)
    else:
        print("No valid subsequence found")






# Program to count the subsequence with sum K

def count_subSeq(ind, s, total, arr, n):
    # Base case: If we've reached the end of the array
    if ind == n:
        # Check if the current sum is equal to the target sum
        if s == total:
            return 1
        else:
            return 0
    
    # Include the current element in the subsequence
    s += arr[ind]
    count_including_current = count_subSeq(ind + 1, s, total, arr, n)
    
    # Exclude the current element from the subsequence
    s -= arr[ind]
    count_excluding_current = count_subSeq(ind + 1, s, total, arr, n)
    
    # Return the sum of both counts
    return count_including_current + count_excluding_current




n = int(input("Enter number of Elements : "))
total = int(input("Enter the Sum : "))
arr = list(map(int,input("Enter Elements : ").split()))
ds = []
print("Printing all Subsequence")
allSubseq(0, ds, 0, total, arr, n)
print("Printing One Subsequence")
printOneSubseq(arr, total)

print("Counting the Subsequences with given sum : ")
print(count_subSeq(0, 0, total, arr, n))
