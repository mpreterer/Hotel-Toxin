def chikiprojetmake (function):
    def wrapper ():
        print("Код красный!(до выполнения)")
        function
        print("Все!")
    return wrapper

@chikiprojetmake
def show ():
    print("Я функция!эбля")

show()
dec = chikiprojetmake(show)
dec()
    
