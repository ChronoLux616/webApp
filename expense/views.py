from django.shortcuts import render

# Create your views here.

def index(request):
    template = 'expense/index.html'
    return render(request, template)

def add_expense(request):
    template = 'expense/add_exp.html'
    return render(request, template)