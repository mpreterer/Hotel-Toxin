from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

class UserOurRegistration(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ['username', 'password1', 'password2','email']

class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username','email']

class ProfileImage(forms.ModelForm):
    #создание конструктора
    def __init__(self,*args,**kwards):
        #С каким файлом мы работает, параметр self обязательный
        #потом обращаемся к .__init__
        super(ProfileImage, self).__init__(*args, **kwards)
        #Список fields из него берем элементы по ключу, ,берем от туда label и меняем название
        self.fields['img'].label = "Изображение профиля"

    class Meta:
        model = Profile
        fields = ['img']
