# project/views.py
from rest_framework import generics

from .models import Cooking
from .serializers import CookingSerializer


class ListProject(generics.ListCreateAPIView):
    queryset = Cooking.objects.all()
    serializer_class = CookingSerializer


class DetailProject(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cooking.objects.all()
    serializer_class = CookingSerializer