from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserOurRegistration, ProfileImage, UserUpdateForm

def register(request):
    if request.method == "POST":
        form = UserOurRegistration(request.POST)
        # Если формочка форма валидна то
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Пользователь {username} успешно зарегистрирован')
            return redirect('user')
    else:
        form = UserOurRegistration()
    return render(request, 'users/registration.html', {'form':form, 'title':'Регистрация'})


@login_required
def profile(request):
    #Если получаем запрос  методом  POST( передача данных на сервер), то делаем...
    #в первом request.Files получаем файлы()
    # также получаем дргуие данные
    if request.method == "POST":
        img_profile = ProfileImage(request.POST, request.FILES,instance = request.user.profile)
        update_user = UserUpdateForm(request.POST,instance = request.user)

        # если обе формы верные то сохраняем и выдаем сообщение(корректна инфа)
        if update_user.is_valid() and img_profile.is_valid():
            # сохраняем данные
            update_user.save()
            img_profile.save()
            # передаем сообщение после сохранения
            messages.success(request, f'Данные успешно изменены')
            #перенаправляем в профиль
            return redirect('profile')

    else:
        img_profile = ProfileImage(instance = request.user.profile)
        update_user = UserUpdateForm(instance = request.user)
        #передаем значения
    data = {
        'img_profile':img_profile,
        'update_user':update_user
    }
    # принимаем ту тначения
    return render(request, 'users/profile.html', data)
