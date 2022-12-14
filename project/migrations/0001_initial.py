# Generated by Django 4.0.6 on 2022-09-17 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cooking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('p_id', models.CharField(max_length=2)),
                ('category', models.CharField(max_length=20)),
                ('title', models.CharField(max_length=20)),
                ('pointOfInterest', models.IntegerField()),
                ('backgroundColor', models.CharField(max_length=6)),
                ('content', models.TextField()),
                ('ingredient', models.TextField()),
                ('Cooking_time', models.CharField(max_length=20)),
                ('imgurl', models.CharField(max_length=100000)),
            ],
        ),
    ]
