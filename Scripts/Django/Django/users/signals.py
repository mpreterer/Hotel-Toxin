from django.contrib.auth.models import User
from .models import Profile
from django.db.models.signals import post_save
from django.dispatch import receiver
# сигнал - это штука, которая срабатывает, при внесении даных на сайт.
# ** передача доп параметров в виде словаря.
# post_save эт осигнал , который сробаывает если в User добавлен пользователь, если его нет, то он его добавляет и сохраняет

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwards):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwards):
    instance.profile.save()
