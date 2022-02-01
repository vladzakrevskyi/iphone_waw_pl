# Generated by Django 2.2.24 on 2021-07-18 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0030_auto_20210626_1857'),
    ]

    operations = [
        migrations.CreateModel(
            name='Shipping',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000, verbose_name='Tytuł')),
                ('title_pl', models.CharField(max_length=1000, null=True, verbose_name='Tytuł')),
                ('title_ru', models.CharField(max_length=1000, null=True, verbose_name='Tytuł')),
                ('title_uk', models.CharField(max_length=1000, null=True, verbose_name='Tytuł')),
                ('title_en', models.CharField(max_length=1000, null=True, verbose_name='Tytuł')),
                ('desc', models.TextField(max_length=20000, verbose_name='Tekst')),
                ('desc_pl', models.TextField(max_length=20000, null=True, verbose_name='Tekst')),
                ('desc_ru', models.TextField(max_length=20000, null=True, verbose_name='Tekst')),
                ('desc_uk', models.TextField(max_length=20000, null=True, verbose_name='Tekst')),
                ('desc_en', models.TextField(max_length=20000, null=True, verbose_name='Tekst')),
            ],
            options={
                'verbose_name': 'Dostawa',
                'verbose_name_plural': 'Dostawa',
            },
        ),
    ]
