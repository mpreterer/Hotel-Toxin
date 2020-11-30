from django.db import models
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete = models.CASCADE)
    img = models.ImageField(default= 'default.jpg', upload_to='user_img' )


    def __str__(self):
        return f'Профиль пользователя {self.user.username}'

        # cохранение картинки
        def save(self):
            super().save()
            # помещаем в переменную image картинку path - путь
            image = Image.open(self.img.path)

            # Обрезаем фото по необходимоси
            # thumbnail - миниатюра
            if image.height > 64 or image.width > 64:
                resize = (64,64)
                image.thumbnail(resize)
                image.save(self.image.path)
