# Generated by Django 3.0.8 on 2021-02-19 12:48

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('blog', '0017_auto_20210218_1647'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='category',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='category_en',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='category_pl',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='category_ru',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='email',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='month_day',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='months',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='months_en',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='months_pl',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='months_ru',
        ),
    ]
