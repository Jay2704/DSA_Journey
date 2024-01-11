# Recursion on Subsequence

def subseq(ind,ds,arr,n):
    
    if ind == n:
        print(ds)
        return
         
    ds.append(arr[ind])
    subseq(ind+1,ds,arr,n)
    ds.pop()
    subseq(ind+1,ds,arr,n)


n = int(input())
arr = list(map(int,input().split()))
ds = []
subseq(0,ds,arr,n)
