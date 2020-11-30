f = open ('text.txt', 'w')
f.write ('Who are you?')
f.close()
#for line in f:
#   print(line)
#построчно выводить данныые
#print(f.read())
#способ открытия(2)
attemps = 0
numb = int (input("guess numb: "))
while 1==1:
    if numb<80:
        numb = int(input("Enter bigger numb: "))
        attemps+=1
        
    elif numb>80:
        numb = int(input("Enter smaller numb: "))
        attemps+=1
        
    elif attemps == 5:
        bomba = open('bomba.txt','w')
        bomba.write('СМЭРТЬ '*100)
        bomba.close()
        break
    
    else:
        print("You win")
        break
    print(attemps)
