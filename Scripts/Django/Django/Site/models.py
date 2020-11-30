from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


class Articles(models.Model):
     # создать поле и указать в нем размер текстового поля
     title = models.CharField(max_length=174)
     # Тут более 255 символов
     text = models.TextField()
      #Поле для времени auto_now_add=True добовляло бы вемя само,но его нельзя было бы поменять. Timezone можно менять
     date = models.DateTimeField(default=timezone.now)
      #В скобке ( с какой табличкой работаем, метод указывающйи что будет с постом когда пользователь будет удален)
     author = models.ForeignKey(User, on_delete=models.CASCADE)
     # Функция позволяет возвращать не объект а именно строки
     # возвращает title из таблицы
     def __str__(self):
         return self.title
     #получаем абсолютную ссылку
     #список kwargs = {'ключ': его значение}
     def get_absolute_url(self):
         return reverse('news-detail', kwargs={'pk': self.pk})
