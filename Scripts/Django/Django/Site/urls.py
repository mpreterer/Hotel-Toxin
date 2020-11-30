# path импортируем, чтобы создавать подссылки( ссылки 2го уровня)
from django.urls import path
from . import views

urlpatterns = [
    #Вызываем метод, который находится в папк views и называется home
    path('', views.ShowNewsView.as_view(), name='Site-home'),
    path('news/<int:pk>/', views.NewsDetailView.as_view(), name='news-detail'),
    path('user/<str:username>/', views.ShowUserNews.as_view(), name='news-user'),
    path('news/<int:pk>/update/', views.UpdateArticlesView.as_view(), name='news-update'),
    path('news/<int:pk>/delete/', views.DeleteArticlesView.as_view(), name='news-delete'),
    path('news/add/', views.CreateArticlesView.as_view(), name='news-add'),
    path('jopka/', views.jopka, name='Site-jopka'),
    #динамеческие данные указываются в <> pk primer key  id имеет primary key уникальное
]
