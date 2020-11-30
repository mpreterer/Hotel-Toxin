l =[]
miss = [1,4,5,6,7,['q','y','qwe']]
print(miss)
a = [a+b for a in 'fuck' if a!='f' for b in 'mat' if b != 't']
print(a)

l.append(10)
l.append(2)
te = [1,4,5,3,5,3,75,15]
l.extend(te)
print(l)
l.insert(0,1000)
print(l)
l.remove(3)
print(l)
print("Индекс 1000: ")
print(l.index(1000))
print("Кол-во 5-ок: ")
print(l.count(5))
l.sort()
print(l)
l.reverse()
print(l)
clear()
