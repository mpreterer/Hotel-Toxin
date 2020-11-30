try:
    y = int(input())
except ValueError: #исключение
    print("Не верный тип данных")
    
try:
    x = int(input())
except ValueError:
    print("Не верный тип данных")

#выполняется если все верно
else:
    print("Красавчик")
# выполняется в любом случае
finally:
    print("Я выведусь в любом случае")
    
try:
    result  = y/x
except ZeroDivisionError:
    print("Он не умеет делить на 0")
print(result)


