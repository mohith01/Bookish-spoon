from django.db import models

# Create your models here.



    
class Cooking(models.Model):
    #p_id = models.CharField(max_length=2)
    category = models.CharField(max_length=20)
    # medium_url = models.CharField(max_length=200)
    title = models.CharField(max_length=20)
    pointOfInterest = models.IntegerField()
    backgroundColor = models.CharField(max_length=7)
    content = models.TextField()
    ingredient = models.TextField()
    Cooking_time = models.CharField(max_length=20)
    imgurl = models.CharField(max_length = 100000)


