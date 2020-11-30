from django.contrib import admin
from django.urls import path, include
from users import views as userViews
from django.contrib.auth import views as authViews
from django.conf import settings
from django.conf.urls.static import static

# Все отслеживаемые ссылки на сайте
urlpatterns = [
    # При переходе по ссылке admin вызвается панелька admin
    path('admin/', admin.site.urls),
    path('reg/', userViews.register, name="reg"),
    path('user/', authViews.LoginView.as_view(template_name='users/user.html'), name='user'),
    path('pass-reset/',
        authViews.PasswordResetView.as_view(template_name='users/pass_reset.html'),
        name='pass-reset'),
    #Восстановление пароля
    path('password_reset_confirm/<uidb64>/<token>/',
        authViews.PasswordResetConfirmView.as_view(template_name='users/password_reset_confirm.html'),
        name='password_reset_confirm'),
    path('password_reset_complete/<uidb64>/<token>/',
        authViews.PasswordResetCompleteView.as_view(template_name='users/password_reset_complete.html'),
        name='password_reset_complete'),
    path('password-reset/done/',
        authViews.PasswordResetDoneView.as_view(template_name='users/password_reset_done.html'),
        name='password_reset_done'),
    path('exit/', authViews.LogoutView.as_view(template_name='users/exit.html'), name='exit'),
    # при переходе по ссылке вызывается приложение Site и от туда берется файл urls
    path('',include('Site.urls'), name='site'),
    path('profile/', userViews.profile, name='profile'),
    #path('weathertask/', include('weathertask.urls') name='weathertask' )
#Все это необходимо, чтобы можно было переходить на оперд. странички и взаимодейтствовать с ними
#через . обращаемся к файлам .as_view отобразить как

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
