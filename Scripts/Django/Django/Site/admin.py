from django.contrib import admin
# Если файл в одной и той же директории то пишется точка
from .models import Articles
# Зарегестрировать на сайте табличку Articles
admin.site.register(Articles)
