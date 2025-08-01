

# Mean of the array

n = int(input("Enter the size : "))
print("Enter the numbers")
arr = list(map(int, input().split()))


def find_mean(arr, i ,n, res):
    if i == n:
        print(res/n)
        exit
    else:    
        res += arr[i]
        # print(arr[i])
        find_mean(arr, i+1, n, res)

find_mean(arr, 0, n, 0)


    
    
