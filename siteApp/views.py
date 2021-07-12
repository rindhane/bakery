from django.shortcuts import render
from django.http import HttpResponse

loc='siteApp'
# Create your views here.

def index(request):
    return render(request,f'{loc}/index.html',)