# Print all Subsequence with sum = Sum using recursion

def allSubseq(ind, ds, s, total,arr,n):

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




# Print only one subsequence with sum = Sum 


            # Complete it

# def oneSubseq(ind, ds, s, total,arr,n):

#     if ind == n:
#         if s == total:
#             print(ds)
#         return True
    
#     ds.append(arr[ind])
#     s += arr[ind]
#     return oneSubseq(ind+1,ds,s,total,arr,n)

#     s -= arr[ind]
#     ds.pop()
#     return oneSubseq(ind+1,ds,s,total,arr,n)





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





n = int(input("Enter number of Elements : "))
total = int(input("Enter the Sum : "))
arr = list(map(int,input("Enter Elements : ").split()))
ds = []
print("Printing all Subsequence")
allSubseq(0, ds, 0, total, arr, n)
print("Printing One Subsequence")
printOneSubseq(arr, total)


