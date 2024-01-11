
# Reverse an array using recursion

# 1. Two pointer approach

def two_pointer(l,r,arr):
    
    if l >= r:
        return
    (arr[l] , arr[r]) = (arr[r] , arr[l])
    two_pointer(l+1,r-1,arr)


# 2. One pointer approach

def one_pointer(i,arr,n):
    if i >= n//2:
        return
    (arr[i] , arr[n-i-1]) = (arr[n-i-1] , arr[i])
    one_pointer(i+1,arr,n)


def ispalindrome(i,n,arr):
    if i >= n//2:
        return True
    if arr[i] != arr[n-i-1]:
        return False 
    return ispalindrome(i+1,n,arr)                                                                                                                         



n = int(input())
arr = list(map(int,input().split()))
#print(arr)
two_pointer(0,n-1,arr)
print(arr)
one_pointer(0,arr,n)
print(arr)
if ispalindrome(0,n,arr):
    print("Palindrome")
else:
    print("Not a Palindrome")