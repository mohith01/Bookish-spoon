# project/urls.py
from django.urls import path
# from django.urls import url 
from . import views

urlpatterns = [
    path('', views.ListProject.as_view()),
    path('<int:pk>/', views.DetailProject.as_view()),
    # path(r'^api/tutorials/published$', views.cooking_list_published)
]