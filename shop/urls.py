#from django.http import *
#from .views import *
from django.urls import  path
from . import views
urlpatterns = [
    path('index', views.index, name='index'),
    path('home', views.home, name='home'),
    path('uploads', views.uploads, name='uploads'),
    path('proccess', views.proccess, name='proccess'),
    path('shop_bkd', views.shop_bkd, name='shop_bkd'),
    path('shop_home', views.shop_home, name='shop_home'),
    path('verify', views.verify, name='verify'),
    path('authenticate', views.authenticate, name='authenticate'),  
]
