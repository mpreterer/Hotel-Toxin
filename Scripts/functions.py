
#функция (def)
def function (N):
    def add ():
        return N*N+1

print(function (5))
d =();

#передача картежа *
#передача словаря **
def func (**arg):
    return arg


print(func (s='1',b='2'))
#lambda 
minus = lambda a,b: a-b
print(minus (13,14))
