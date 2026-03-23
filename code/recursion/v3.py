# sum of n numbers using parameterized and functional recursion

def parameterized(i,s):
    if i < 1:
        print(s)
        return
    parameterized(i-1,s+i)


# sum of n numbers using functional method 

def functional(n):
    if n == 0:
        return 0
    else:
        return n + functional(n-1)

if __name__ == "__main__":
    n = int(input("Enter a number : "))
    parameterized(n,0)
    print("\n")
    print(functional(n))