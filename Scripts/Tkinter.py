import tkinter as tk
from tkinter import ttk
from tkinter import *
import webbrowser
# -*- coding: utf-8 -*-
# * указывает, что мы импортируем все из модуля

# from tkinter import ttk позволяет добавлять в приложение надписи, кнопки и т.д.
# title название
app = tk.Tk()

# labe надпись
app.title("Searching system")
app.configure(background = '#e6e6e6')



app_label = ttk.Label(app, text = 'Searchapp', font='Tahoma',foreground = '#4a4ad9')
app_label.grid(row=0, column=1)


text_field = ttk.Entry(app, width = 45)
text_field.grid(row = 1, column = 1)
# .grid где находится надпись(система сеток)
# strip позволяет обрезать дополнительные пробелы до строки и после


search_engine = StringVar()
search_engine.set("yandex")
# name.set("name") устанавливает значение по умолчанию


def search():
    if text_field.get().strip() != "":
        if search_engine.get() == "google":
            webbrowser.open('https://www.google.ru/search?newwindow=1&ei=mW9GXsGVGcbcrgSDvY24CQ&q=' + text_field.get())
            
        elif search_engine.get() == "yandex":
            webbrowser.open('https://yandex.ru/yandsearch?clid=2320519&text=' + text_field.get())

def searchBtn():
    search()

def enterBtn(event):
    search()

button_search = ttk.Button(app, text='Search', width=10, command = search)
button_search.grid(row=1,column=2)

text_field.bind('<Return>', enterBtn)
# обработчик событий

radio_google = ttk.Radiobutton(app, text='Google', value='google', variable = search_engine)
radio_google.grid(row=2,column=1,sticky=W)
# sticky где будет распологаться поле(спарава,слева)

radio_yandex = ttk.Radiobutton(app, text='Yandex', value='yandex', variable = search_engine)
radio_yandex.grid(row=2,column=1,sticky=E)

app.wm_attributes('-topmost', True)
# поверх других приложений

text_field.focus()



app.mainloop()
# mainloop() бесконечный цикл, который не позволяет завершить программу
