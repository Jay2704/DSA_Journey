def fibonacci(n):
  """
  This function calculates the nth Fibonacci number using recursion.

  The Fibonacci sequence is defined as follows:
      F(0) = 0
      F(1) = 1
      F(n) = F(n-1) + F(n-2) for n > 1

  Args:
      n: The index of the Fibonacci number to calculate (non-negative integer).

  Returns:
      The nth Fibonacci number.
  """

  # Base cases:
  if n <= 1:
    # F(0) = 0 and F(1) = 1
    return n

  # Recursive cases:
  # Calculate F(n) by using the definitions of F(n-1) and F(n-2)
  last = fibonacci(n - 1)  # Recursive call to calculate F(n-1)
  slast = fibonacci(n - 2)  # Recursive call to calculate F(n-2)
  return last + slast

# Get the number from the user
n = int(input("Enter a number: "))

# Calculate and print the nth Fibonacci number
print(fibonacci(n))
