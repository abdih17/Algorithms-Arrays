# factorial

# 5! = 5*4*3*2*1 = 120

# N! = N * (N-1)!

# 5! = 5 * 4!
#     =  5 * 4*3*2*1

# ------
# iterative function
def fact_it(n):
    res = 1
    for i in range(n):
        res = res * i

# fact_it(5) = 120


# recursive function
# top-bottom approach
def factorial(n):
    # base strategy
    if n==1:
        return 1 # 1! = 1
    # recursive call
    else:
        return n * factorial(n-1)


n = 5
res = factorial(n)
print res



5! = 5 * 4!
   = 5 * (4 * 3!)
   = 5 * (4 * (3 * 2!))
   = 5 * (4 * (3 * (2 * 1!)))

5! = 120


# // Question
# Compute Fibonacci series for 10 numbers both using
# iterative and recursive methods
#
# F(N) = F(N-1) + F(N-2)
# ..

