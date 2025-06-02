import datetime
from django.db import models
#from . import views

# Create your models here.

class Debts(models.Model):
    date = models.TextField(max_length=200)
    name = models.CharField(max_length=200)
    item_type = models.CharField(max_length=300)
    quantity = models.PositiveIntegerField(default=0)
    price = models.DecimalField(decimal_places=3, max_digits=12)

class shopdb(models.Model):
    product_name = models.CharField(max_length=200)
    product_description = models.TextField(max_length=300)
    product_price = models.DecimalField(max_digits=12, decimal_places=2)
    stock_status = models.CharField(max_length=100)
    
class shop(models.Model):
    item_name = models.CharField(max_length=100)
    description = models.TextField()
    item_quantity_category = models.CharField(max_length=150)
    quantity = models.IntegerField()
    pay_method= models.CharField(max_length=100, default='cash')
    price = models.FloatField()
    tel = models.IntegerField()
    date = models.TextField(max_length=200,default=datetime.datetime.now)

class verifyDB(models.Model):
    email = models.EmailField()
    tel =models.IntegerField()