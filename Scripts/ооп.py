class User:
    name = ""
    surname = ""
    age = 0
    email = ""
    phone = 0
    
    
    def __init__(self, name, surname, age, email, phone):
        self.name = name
        self.surname = surname
        self.age = age
        self.email = email
        self.phone = phone
        
    def uSet(self, name, age, email):
        self.name = name
        self.surname = surname
        self.age = age
        self.email = email
        self.phone = phone
        
#обращаеся к этмоу же классу self ( это функция к классу)
        
    def printAll(self):
        print("User:",self.name,"\t",self.surname,"\nAge:",self.age,"\nemail:",self.email,"\nPhone:",self.phone)


admin = User("Administrator","Mark","19","email@gmail.ua","4345")
admin.printAll()

#noob = User()
#noob.name = "Noob"
#print(noob.name)

#&&

#noob.uSer("Noob","Noname","10")
#noob.printAll()


