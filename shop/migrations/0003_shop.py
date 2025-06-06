# Generated by Django 5.0.4 on 2025-05-19 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_shopdb'),
    ]

    operations = [
        migrations.CreateModel(
            name='shop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('item_quantity_category', models.CharField(max_length=150)),
                ('quantity', models.IntegerField()),
                ('pay_method', models.CharField(default='cash', max_length=100)),
                ('price', models.FloatField()),
                ('tel', models.IntegerField()),
                ('date', models.TextField(max_length=200)),
            ],
        ),
    ]
