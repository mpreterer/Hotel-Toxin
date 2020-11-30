from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'users'
    # записывается именно так, потому что так передаются сигналы
    def ready(self):
        import users.signals
