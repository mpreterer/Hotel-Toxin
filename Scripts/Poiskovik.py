import tkinter as tk
from tkinter import ttk
from tkinter import *
import webbrowser
# -*- coding: utf-8 -*-

app = tk.Tk()
app.title("Searching One System")

app_label = ttk.Label(app, text = 'SoS',font='Tahoma')
app_label.grid(row=0, column=1)

enter_field = ttk.Entry(app, width = 40)
enter_field.grid(row=1, column=1)
enter_field.focus()


sear_eng=StringVar()
sear_eng.set("google")

def search():
    if enter_field.get().strip() != "":
        if sear_eng.get() == "yandex":
            webbrowser.open('https://yandex.ru/yandsearch?clid=2320519&text=' + enter_field.get())
        elif sear_eng.get() == "google":
            webbrowser.open('https://www.google.ru/search?newwindow=1&source=' + enter_field.get())

def searchBtn():
    search()

def enterBtn(event):
    search()

yandex_radio = ttk.Radiobutton(app,text="Yandex",value="yandex",variable=sear_eng)
yandex_radio.grid(row=2,column=1,sticky=E)

google_radio = ttk.Radiobutton(app,text="Google",value="google",variable=sear_eng)
google_radio.grid(row=2,column=1,sticky=W)


search_btn = ttk.Button(app, text = "Найти", width=10, command=search)
search_btn.grid(row=1,column=2)

enter_field.bind('<Return>',enterBtn)
app.wm_attributes('-topmost', True)






app.mainloop()
