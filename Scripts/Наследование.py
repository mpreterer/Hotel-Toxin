class Human:
    color = ""
    gender = ""
    weight = 0 

    def Set(self, color, gender, weight):
        self.color = color
        self.gender = gender
        self.weight = weight

class Tradition (Human):
    isTrad = False
    
    def Set(self, color, gender, weight, isTrad):
        self.color = color
        self.gender = gender
        self.weight = weight
        self.isTrad = isTrad

class Modification (Human):
    isModification = False


Victor = Human()
Victor.Set("White", "man", 80, False)
print(Victor.gender)

Mark = Human()
Mark.Set("Orange","man",76, True)
print(Mark.isTrad)
