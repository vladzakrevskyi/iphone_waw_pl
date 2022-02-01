# Generated by Django 3.1.6 on 2021-02-15 12:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('blog', '0004_auto_20210215_1216'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='category_en',
            field=models.CharField(max_length=50, null=True, verbose_name='Категория'),
        ),
        migrations.AddField(
            model_name='blog',
            name='category_ru',
            field=models.CharField(max_length=50, null=True, verbose_name='Категория'),
        ),
        migrations.AddField(
            model_name='blog',
            name='full_desc_en',
            field=models.TextField(null=True, verbose_name='Текст статьи'),
        ),
        migrations.AddField(
            model_name='blog',
            name='full_desc_ru',
            field=models.TextField(null=True, verbose_name='Текст статьи'),
        ),
        migrations.AddField(
            model_name='blog',
            name='short_desc_en',
            field=models.TextField(max_length=300, null=True, verbose_name='Короткое описание'),
        ),
        migrations.AddField(
            model_name='blog',
            name='short_desc_ru',
            field=models.TextField(max_length=300, null=True, verbose_name='Короткое описание'),
        ),
        migrations.AddField(
            model_name='blog',
            name='title_en',
            field=models.CharField(max_length=100, null=True, verbose_name='Титул'),
        ),
        migrations.AddField(
            model_name='blog',
            name='title_ru',
            field=models.CharField(max_length=100, null=True, verbose_name='Титул'),
        ),
        migrations.AddField(
            model_name='blog',
            name='week_day_en',
            field=models.CharField(max_length=20, null=True, verbose_name='День недели'),
        ),
        migrations.AddField(
            model_name='blog',
            name='week_day_ru',
            field=models.CharField(max_length=20, null=True, verbose_name='День недели'),
        ),
    ]