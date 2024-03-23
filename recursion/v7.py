# Print all Subsequence with sum = Sum using recursion

def allSubseq(ind, ds, s, total,arr,n):

    if ind == n:
        if s == total:
            print(ds)
            return 
    
    ds.append(arr[ind])
    s += arr[ind]
    allSubseq(ind+1,ds,s,total,arr,n)

    s -= arr[ind]
    ds.pop() # remove the element
    allSubseq(ind+1,ds,s,total,arr,n)



# Print only one subsequence with sum = Sum 


            # Complete it

def oneSubseq(ind, ds, s, total,arr,n):

    if ind == n:
        if s == total:
            print(ds)
            return True
    
    ds.append(arr[ind])
    s += arr[ind]
    return oneSubseq(ind+1,ds,s,total,arr,n)

    s -= arr[ind]
    ds.pop()
    return oneSubseq(ind+1,ds,s,total,arr,n)



n = int(input("Enter number of Elements : "))
total = int(input("Enter the Sum : "))
arr = list(map(int,input("Enter Elements : ").split()))
ds = []
allSubseq(0, ds, 0, total, arr, n)
