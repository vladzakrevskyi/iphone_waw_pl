# Generated by Django 3.1.7 on 2021-04-06 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0022_auto_20210328_1009'),
    ]

    operations = [
        migrations.AddField(
            model_name='accesories',
            name='name_en',
            field=models.TextField(max_length=1000, null=True, verbose_name='Nazwa towaru'),
        ),
        migrations.AddField(
            model_name='accesories',
            name='name_pl',
            field=models.TextField(max_length=1000, null=True, verbose_name='Nazwa towaru'),
        ),
        migrations.AddField(
            model_name='accesories',
            name='name_ru',
            field=models.TextField(max_length=1000, null=True, verbose_name='Nazwa towaru'),
        ),
        migrations.AddField(
            model_name='accesories',
            name='price_en',
            field=models.CharField(max_length=200, null=True, verbose_name='Cena towaru'),
        ),
        migrations.AddField(
            model_name='accesories',
            name='price_pl',
            field=models.CharField(max_length=200, null=True, verbose_name='Cena towaru'),
        ),
        migrations.AddField(
            model_name='accesories',
            name='price_ru',
            field=models.CharField(max_length=200, null=True, verbose_name='Cena towaru'),
        ),
        migrations.AddField(
            model_name='learning',
            name='desc_en',
            field=models.TextField(max_length=20000, null=True, verbose_name='Tekst kursu'),
        ),
        migrations.AddField(
            model_name='learning',
            name='desc_pl',
            field=models.TextField(max_length=20000, null=True, verbose_name='Tekst kursu'),
        ),
        migrations.AddField(
            model_name='learning',
            name='desc_ru',
            field=models.TextField(max_length=20000, null=True, verbose_name='Tekst kursu'),
        ),
        migrations.AddField(
            model_name='learning',
            name='name_en',
            field=models.CharField(max_length=1000, null=True, verbose_name='Nazwa kursu'),
        ),
        migrations.AddField(
            model_name='learning',
            name='name_pl',
            field=models.CharField(max_length=1000, null=True, verbose_name='Nazwa kursu'),
        ),
        migrations.AddField(
            model_name='learning',
            name='name_ru',
            field=models.CharField(max_length=1000, null=True, verbose_name='Nazwa kursu'),
        ),
        migrations.AddField(
            model_name='team',
            name='name_surname_en',
            field=models.CharField(max_length=200, null=True, verbose_name='Imie i Nazwisko pracownika'),
        ),
        migrations.AddField(
            model_name='team',
            name='name_surname_pl',
            field=models.CharField(max_length=200, null=True, verbose_name='Imie i Nazwisko pracownika'),
        ),
        migrations.AddField(
            model_name='team',
            name='name_surname_ru',
            field=models.CharField(max_length=200, null=True, verbose_name='Imie i Nazwisko pracownika'),
        ),
        migrations.AddField(
            model_name='work',
            name='desc_en',
            field=models.TextField(max_length=20000, null=True, verbose_name='Tekst og??oszenia'),
        ),
        migrations.AddField(
            model_name='work',
            name='desc_pl',
            field=models.TextField(max_length=20000, null=True, verbose_name='Tekst og??oszenia'),
        ),
        migrations.AddField(
            model_name='work',
            name='desc_ru',
            field=models.TextField(max_length=20000, null=True, verbose_name='Tekst og??oszenia'),
        ),
        migrations.AddField(
            model_name='work',
            name='name_en',
            field=models.CharField(max_length=1000, null=True, verbose_name='Nazwa stanowiska'),
        ),
        migrations.AddField(
            model_name='work',
            name='name_pl',
            field=models.CharField(max_length=1000, null=True, verbose_name='Nazwa stanowiska'),
        ),
        migrations.AddField(
            model_name='work',
            name='name_ru',
            field=models.CharField(max_length=1000, null=True, verbose_name='Nazwa stanowiska'),
        ),
    ]
