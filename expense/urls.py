from django import urls
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='expenses'),
    path('add-expenses', views.add_expense, name='add_expenses'),
]