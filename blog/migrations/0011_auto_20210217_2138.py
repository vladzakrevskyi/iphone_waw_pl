# Generated by Django 3.1.6 on 2021-02-17 21:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('blog', '0010_auto_20210217_2103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image_big',
            field=models.ImageField(blank=True, null=True, upload_to='blog_detail', verbose_name='Изображение статьи'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='image_small',
            field=models.ImageField(blank=True, null=True, upload_to='blog_article',
                                    verbose_name='Изображение предпросмотра'),
        ),
    ]
