from django.shortcuts import render
from .models import Car
# Create your views here.
def index(request):
    return render (request, 'index.html')
def Shopping_car(request):
    return render(request, 'Shopping_car.html')
def Contact(request):
    return render(request, 'Contact.html')
def Basket(request):
    return render(request, 'Basket.html')
def indexm(request):
    return render(request, 'indexm.php')
