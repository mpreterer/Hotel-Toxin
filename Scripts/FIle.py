with open('test.txt','wt', encoding='utf-8') as inFile:
    num = int(input('Enter numb '))
    line = str('1/ ' + str(num) + ' = ' + str(1/num))
    print(line)
    inFile.write (line)
    
