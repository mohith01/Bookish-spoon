# project/serializers.py
from rest_framework import serializers
from .models import Cooking


class CookingSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'category',
            'title',
            'pointOfInterest',
            'backgroundColor',
            'content',
            'ingredient',
            'Cooking_time',
            'imgurl'
        )
        model = Cooking