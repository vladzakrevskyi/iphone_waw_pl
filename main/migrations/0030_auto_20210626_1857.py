# Generated by Django 3.0.8 on 2021-06-26 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0029_auto_20210626_1857'),
    ]

    operations = [
        migrations.AddField(
            model_name='row',
            name='row_en',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Tytuł wiersza'),
        ),
        migrations.AddField(
            model_name='row',
            name='row_pl',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Tytuł wiersza'),
        ),
        migrations.AddField(
            model_name='row',
            name='row_ru',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Tytuł wiersza'),
        ),
        migrations.AddField(
            model_name='row',
            name='row_uk',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Tytuł wiersza'),
        ),
    ]
