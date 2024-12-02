from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Shopping_car', views.Shopping_car, name='Shopping_car'),
    path('Contact', views.Contact, name='Contact'),
    path('Basket.html', views.Basket, name='Basket'),
    path('indexm.php', views.Basket, name='indexm'),
]

