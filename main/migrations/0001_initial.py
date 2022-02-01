# Generated by Django 3.1.7 on 2021-03-19 16:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Kategoria')),
                ('device_icon', models.ImageField(blank=True, null=True, upload_to='icon_menu', verbose_name='Ikona urządzenia')),
                ('slug', models.SlugField(default='slug', unique=True)),
            ],
            options={
                'verbose_name': 'Kategoria',
                'verbose_name_plural': 'Kategorie',
            },
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Imie')),
                ('name_pl', models.CharField(max_length=100, null=True, verbose_name='Imie')),
                ('name_ru', models.CharField(max_length=100, null=True, verbose_name='Imie')),
                ('name_en', models.CharField(max_length=100, null=True, verbose_name='Imie')),
                ('desc', models.TextField(verbose_name='Tekst opinii')),
                ('desc_pl', models.TextField(null=True, verbose_name='Tekst opinii')),
                ('desc_ru', models.TextField(null=True, verbose_name='Tekst opinii')),
                ('desc_en', models.TextField(null=True, verbose_name='Tekst opinii')),
                ('date', models.DateField(null=True, verbose_name='Data')),
                ('rating', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5')], default='', max_length=100, verbose_name='Ocena')),
                ('choise', models.CharField(choices=[('Google', 'Google'), ('Facebook', 'Facebook')], default='', max_length=100, verbose_name='Sieć')),
            ],
            options={
                'verbose_name': 'Opinia',
                'verbose_name_plural': 'Opinie',
            },
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, help_text='Zdjęcie pracownika', null=True, upload_to='team_image', verbose_name='Zdjęcie pracownika')),
                ('name_surname', models.CharField(max_length=200, verbose_name='Imie i Nazwisko pracownika')),
                ('post', models.CharField(max_length=200, verbose_name='Stanowisko pracownika')),
                ('post_pl', models.CharField(max_length=200, null=True, verbose_name='Stanowisko pracownika')),
                ('post_ru', models.CharField(max_length=200, null=True, verbose_name='Stanowisko pracownika')),
                ('post_en', models.CharField(max_length=200, null=True, verbose_name='Stanowisko pracownika')),
                ('name_desc', models.TextField(max_length=400, verbose_name='Opis pracownika')),
                ('name_desc_pl', models.TextField(max_length=400, null=True, verbose_name='Opis pracownika')),
                ('name_desc_ru', models.TextField(max_length=400, null=True, verbose_name='Opis pracownika')),
                ('name_desc_en', models.TextField(max_length=400, null=True, verbose_name='Opis pracownika')),
                ('my_order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Pracownik',
                'verbose_name_plural': 'Pracownicy',
                'ordering': ['my_order'],
            },
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='Nazwa usługi')),
                ('name_pl', models.CharField(max_length=200, null=True, verbose_name='Nazwa usługi')),
                ('name_ru', models.CharField(max_length=200, null=True, verbose_name='Nazwa usługi')),
                ('name_en', models.CharField(max_length=200, null=True, verbose_name='Nazwa usługi')),
                ('image', models.ImageField(blank=True, help_text='Zdjęcie usługi', null=True, upload_to='service_image', verbose_name='Obraz urządzenia')),
                ('title', models.CharField(blank=True, help_text='Tytuł', max_length=200, null=True, verbose_name='Nazwa usługi')),
                ('title_pl', models.CharField(blank=True, help_text='Tytuł', max_length=200, null=True, verbose_name='Nazwa usługi')),
                ('title_ru', models.CharField(blank=True, help_text='Tytuł', max_length=200, null=True, verbose_name='Nazwa usługi')),
                ('title_en', models.CharField(blank=True, help_text='Tytuł', max_length=200, null=True, verbose_name='Nazwa usługi')),
                ('text', models.TextField(blank=True, help_text='Tekst', null=True, verbose_name='Opis')),
                ('text_pl', models.TextField(blank=True, help_text='Tekst', null=True, verbose_name='Opis')),
                ('text_ru', models.TextField(blank=True, help_text='Tekst', null=True, verbose_name='Opis')),
                ('text_en', models.TextField(blank=True, help_text='Tekst', null=True, verbose_name='Opis')),
                ('my_order', models.PositiveIntegerField(default=0)),
                ('slug', models.SlugField(default='slug', unique=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub', to='main.category')),
            ],
            options={
                'verbose_name': 'Usluga',
                'verbose_name_plural': 'Uslugi',
                'ordering': ['my_order'],
            },
        ),
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='device', verbose_name='Obraz urządzenia')),
                ('name', models.CharField(max_length=500, verbose_name='Nazwa urządzenia')),
                ('price', models.CharField(blank=True, max_length=50, null=True, verbose_name='Cena usługi')),
                ('price_1', models.CharField(blank=True, max_length=50, null=True, verbose_name='Cena usługi dodatkowa')),
                ('price_2', models.CharField(blank=True, max_length=50, null=True, verbose_name='Cena usługi dodatkowa')),
                ('copy', models.CharField(blank=True, max_length=50, null=True, verbose_name='Cena zamiennik')),
                ('premium', models.CharField(blank=True, max_length=50, null=True, verbose_name='Cena premium')),
                ('time', models.CharField(blank=True, max_length=40, null=True, verbose_name='Czas naprawy')),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main.service')),
            ],
            options={
                'verbose_name': 'Urządzenie',
                'verbose_name_plural': 'Urządzenia',
            },
        ),
    ]
