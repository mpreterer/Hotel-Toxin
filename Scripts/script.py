#список
list = [1,2/5,-9,66,11,991, ]
print(list[2])
list.extend
list.remove
list.pop(0)
list.extend([1,2/5,-9,6,7,5,4])
#срез (начальный элемент(индекс):последний:шаг)
print(list[2::3])

cor = (-5,-12,44,-9876,5,-1,-5,-1)

#множество
mult = set(list)
print(mult)

f_mult= frozenset(list)
print(f_mult) 

#словарь
dict = {'0142':'pin', '901940':'key'}
print(dict['0142'])

i = 0
while i<len(list):
    print("Значение:", i+1 , "равно:", list[i])
    i +=1


#for Snow in list:
#   print("Значение:",Snow)



#Функции

def Fuu(a,b):
    result = a+b
    print(result)

Fuu(1,3)
print("\n")
#ередача картежа
def AddCor(*args):
    for i in args:
        print(i * 5)
    

AddCor(2,4)

#передача словаря
def Dictionary(**args):
    for key, value in args.items():
        print("Ключ",key, "  значение:" , value)
Dictionary(shor = "l", long = "longer")


