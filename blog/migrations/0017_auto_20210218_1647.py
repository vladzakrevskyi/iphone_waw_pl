# Generated by Django 3.0.8 on 2021-02-18 16:47

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('blog', '0016_merge_20210218_1647'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='category_en',
            field=models.CharField(max_length=50, null=True, verbose_name='Категория'),
        ),
        migrations.AddField(
            model_name='blog',
            name='category_pl',
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
            name='full_desc_pl',
            field=models.TextField(null=True, verbose_name='Текст статьи'),
        ),
        migrations.AddField(
            model_name='blog',
            name='full_desc_ru',
            field=models.TextField(null=True, verbose_name='Текст статьи'),
        ),
        migrations.AddField(
            model_name='blog',
            name='months_en',
            field=models.CharField(max_length=5, null=True, verbose_name='Месяц'),
        ),
        migrations.AddField(
            model_name='blog',
            name='months_pl',
            field=models.CharField(max_length=5, null=True, verbose_name='Месяц'),
        ),
        migrations.AddField(
            model_name='blog',
            name='months_ru',
            field=models.CharField(max_length=5, null=True, verbose_name='Месяц'),
        ),
        migrations.AddField(
            model_name='blog',
            name='short_desc_en',
            field=models.TextField(max_length=300, null=True, verbose_name='Короткое описание'),
        ),
        migrations.AddField(
            model_name='blog',
            name='short_desc_pl',
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
            name='title_pl',
            field=models.CharField(max_length=100, null=True, verbose_name='Титул'),
        ),
        migrations.AddField(
            model_name='blog',
            name='title_ru',
            field=models.CharField(max_length=100, null=True, verbose_name='Титул'),
        ),
    ]
