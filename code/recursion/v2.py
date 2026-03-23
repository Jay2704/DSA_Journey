# print the numbers from 1 to n
def one_to_n(i,n):
    if i > n:
        return 
    print(i)
    one_to_n(i+1,n)


# print the numbers from n to 1

def n_to_one(n):
    if n <= 0:
        return 
    print(n)
    n_to_one(n-1)




# below are the same questions written using backtracking algorithm

# print 1 to n using backtracking

def backtrack11(i,n):
    if i < 1:
        return
    backtrack11(i-1,n)
    print(i)


# print n to 1 using backtracking

def backtrack22(i,n):
    if i > n:
        return 
    backtrack22(i+1,n)
    print(i)




if __name__ == "__main__":
    n = int(input("Enter a Number : "))
    one_to_n(1,n)
    print("\n")
    n_to_one(n)
    print("\n")
    backtrack11(n,n)
    print("\n")
    backtrack22(1,n)
