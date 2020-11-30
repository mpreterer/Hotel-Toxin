d = {'lesson':10,'lesson_1':9}
print(d)


dd = dict(key='5152',floater='515252552')
print(dd)
dd['key'] = 1525
print(dd)

l=(1,6,7,4,14,2)
ddd = dict ([(123,535),(321,44)])
print(ddd)


f = dict.fromkeys(['a','b','e'],94)
print(f)


d = {a : a**5 for a in range(5)}
print(d)
print(d.values())
print(d.keys())

human = {'name':{'first_name':'Sergio','last_name':'Sergianon','middle_name':'Sergianovich'},
     'adres':{'street':'Kychkoveckai','home':9,'flat':40},
     'phone':{'mobile_phone':'9-9421-530-44','home_phone':'4-4-4-1'}}
print(human['name'])
print(human.keys())

print(l[1:4:2])
