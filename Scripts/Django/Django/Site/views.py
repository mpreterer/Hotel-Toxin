# Получить объект или ошибку 404
from django.shortcuts import render, get_object_or_404
# табличка пользователя
from django.contrib.auth.models import User
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)
from .models import Articles
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

#LoginRequierMixin позволяет закрыть досутп на опред. странички если ты не зарегестрирован

#generic библиотека отвечает за работу со списками

#ListView переберает списпок и можно гео обрабатывать


#from django.http import HttpResponse вывод кусочка html
#List View для данных,  может перебирать списки.
#DetailView позволяет брать один объект а не список
# news = [
#     {
#         'title':'первая запись',
#         'text': 'Это не просто текст',
#         'date': '24.02.2020',
#         'author': ' David'
#     },
#     {
#         'title':' не первая запись',
#         'text': 'Это уже просто текст',
#         'date': '01.01.1900',
#         'author': ''
#     }
# ]


#template_name = 'Site/home.html'
## название шаблона с которым мы будем работать
#context_object_name = 'news'
# #изменить название объекта которое передаем
## ordering принимает список, указывается поле по которому поисходит сортировка например date дата публикации
#ordering = ['-date']


def home(request):
    data = {
        'news': Articles.objects.all(),
        'title': 'Возможно главная страница'
        #Здесь обрабатываем объект 'news'
    }
    return render(request, 'Site/home.html', data)

class ShowNewsView(ListView):
    model = Articles
    # Показать где находится файл html
    template_name = 'Site/home.html'
    # название шаблона с которым мы будем работать
    context_object_name = 'news'
    #изменить название объекта которое передаем
    # ordering принимает список, указывается поле по которому поисходит сортировка например date дата публикации
    ordering = ['-date']
    #сколько выводить записей? paginate_by
    paginate_by = 5

    def get_context_data(self, **kwards):
        ctx = super(ShowNewsView,self).get_context_data(**kwards)
        ctx['title'] = 'Главная страничка'
        return ctx

class ShowUserNews(ListView):
    model = Articles
    template_name = 'Site/news_user.html'
    context_object_name = 'news'
    paginate_by = 5
    #get_queryset получить запрос
    #получаем пользователя из url адреса
    #использовать метод get_object_or_404( Userв какой табличке мы ищем, потом параметр по которому ищем username = выбрать имя из url адреса
    #Выбарть все статьи определенного автора filter(author=USer).как сортирвоать это(order_by(какой парметр '-date'))
    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Articles.objects.filter(author=user).order_by('-date')

    def get_context_data(self, **kwards):
        ctx = super(ShowUserNews,self).get_context_data(**kwards)
        ctx['title'] = f"Статьи пользователя {self.kwargs.get('username')}"
        return ctx

class NewsDetailView(DetailView):
    model = Articles
    template_name = 'Site/news_detail.html'

    def get_context_data(self, **kwards):
        ctx = super(NewsDetailView,self).get_context_data(**kwards)
        #Обращаемся к табличке NEWS потом к ее объектам object, использовать фильтр(отфилтровка)
        #filter всегда возвращает список
        #Данный филтр звучит так (берем статью у которой primary key будет равен тому pk который мы выбираем (1,2,...) потом first возвращает первый элемент списка )
        ctx['title'] = Articles.objects.filter(pk=self.kwargs['pk']).first()
        return ctx
        #Вызывается файл по имени приложения,потом по имени таблички,и тип с которым работаем (detail)

        #def get_context_data(self, **kwards):
            #ctx = super(ShowNewsView, self).get_context_data(**kwards)
            ## указываем с каким параметром работаем, потом self потом к главному классу , тому же,  передаем kwards
            #ctx['title'] = 'index'
            ## **kwards словарь из параметров self - обязательный параметр
            #return ctx
            ##Отобразитьб ctx
# в скобках пишется от какого класса наследует все
# Указываем с какой табличкой работаем Articles
class CreateArticlesView(LoginRequiredMixin, CreateView):
    model = Articles
    fields = ['title','text']
    # При нажатии кнопки добавить стать будет вызваться функция которая в поле автор устаовить значение
    # super позволяет вызвать что-либо из родительского класса
    def form_valid(self,form):
        form.instance.author = self.request.user
        return super().form_valid(form)
#Основую табличку всегда писать справа вконце CreateView например
class UpdateArticlesView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Articles
    fields = ['title','text']
    # При нажатии кнопки добавить стать будет вызваться функция которая в поле автор устаовить значение
    # super позволяет вызвать что-либо из родительского класса
    def form_valid(self,form):
        form.instance.author = self.request.user
        return super().form_valid(form)
    #проверяем имеет ли право челове кредактировать статью
    def test_func(self):
        articles = self.get_object()
        if self.request.user == articles.author:
            return True
        return False

class DeleteArticlesView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Articles

    success_url = '/'

    def test_func(self):
        articles = self.get_object()
        if self.request.user == articles.author:
            return True
        return False

def jopka(request):
    return render(request, "Site/jopka.html", {'title':'Я тут написал текст'})
