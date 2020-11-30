#НАСЛЕДОВАНИЕ
#Если у имени переменной или имени метода добавить _ это значит инкапсуляция(для программиста)
#Если два подчеркивания __ , то инкапсуляция происходит реально
class Human:
    name = "name"
    age = "0"
    
    def set(self, name, age):
        self.name = name
        self.age = age

class Students (Human):
    course = 1

Alex = Students ()
Alex.set("Alex",20)
print(Alex.name + " " + str(Alex.age)

Nikolay = Human ()
Nikolay.name = "Nikolay\n"
print(Nikolay.name)

Leha = Human ()
Leha.age = 190
Leha.name = "Leha"
print (Leha.name)

Alex = Human()
Alex.set("Alex",19)
print(Alex.name + " " + str(Alex.age))
