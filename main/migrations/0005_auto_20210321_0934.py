# Generated by Django 3.1.7 on 2021-03-21 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20210319_1625'),
    ]

    operations = [
        migrations.CreateModel(
            name='Accesories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=1000, verbose_name='Nazwa towaru')),
                ('price', models.CharField(max_length=200, verbose_name='Cena towaru')),
                ('imag', models.ImageField(upload_to='accesories', verbose_name='Zdjecie obok listy towarów')),
            ],
        ),
        migrations.AlterField(
            model_name='category',
            name='device_icon',
            field=models.ImageField(blank=True, help_text='Obrazek urządzenia w menu', null=True, upload_to='icon_menu', verbose_name='Ikona urządzenia'),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(help_text='Nazwa urządzenia w menu', max_length=200, verbose_name='Kategoria'),
        ),
        migrations.AlterField(
            model_name='device',
            name='copy',
            field=models.CharField(blank=True, help_text='Cena za część zamienną', max_length=50, null=True, verbose_name='Cena zamiennik'),
        ),
        migrations.AlterField(
            model_name='device',
            name='image',
            field=models.ImageField(blank=True, help_text='Obraz urządzenia obok nazwy urządzenia w tablicy usługi', null=True, upload_to='device', verbose_name='Obraz urządzenia'),
        ),
        migrations.AlterField(
            model_name='device',
            name='name',
            field=models.CharField(help_text='Model urządzenia', max_length=500, verbose_name='Nazwa urządzenia'),
        ),
        migrations.AlterField(
            model_name='device',
            name='premium',
            field=models.CharField(blank=True, help_text='Cena za część premium', max_length=50, null=True, verbose_name='Cena premium'),
        ),
        migrations.AlterField(
            model_name='device',
            name='price',
            field=models.CharField(blank=True, help_text='Cena usługi dla urządzeń dla których nie ma zamiennika, premium, lub ceny dodatkowej', max_length=50, null=True, verbose_name='Cena usługi'),
        ),
        migrations.AlterField(
            model_name='device',
            name='price_1',
            field=models.CharField(blank=True, help_text='Cena dodatkowa(np.: Wymiana dysku SSD MacBook(W zależności od rozmiaru dysku inna cena))', max_length=50, null=True, verbose_name='Cena usługi dodatkowa'),
        ),
        migrations.AlterField(
            model_name='device',
            name='price_2',
            field=models.CharField(blank=True, help_text='Cena dodatkowa(np.: Wymiana dysku SSD MacBook(W zależności od rozmiaru dysku inna cena))', max_length=50, null=True, verbose_name='Cena usługi dodatkowa'),
        ),
        migrations.AlterField(
            model_name='device',
            name='time',
            field=models.CharField(blank=True, help_text='Czas naprawy urządzenia', max_length=40, null=True, verbose_name='Czas naprawy'),
        ),
        migrations.AlterField(
            model_name='review',
            name='choise',
            field=models.CharField(choices=[('Google', 'Google'), ('Facebook', 'Facebook')], default='', help_text='Z jakiej sieci jest opinia', max_length=100, verbose_name='Sieć'),
        ),
        migrations.AlterField(
            model_name='review',
            name='date',
            field=models.DateField(help_text='Data publikacji(Sortowanie po dacie malejąco)', null=True, verbose_name='Data'),
        ),
        migrations.AlterField(
            model_name='service',
            name='my_order',
            field=models.PositiveIntegerField(default=0, help_text='Porządek wyświetlania na stronie', verbose_name='Porządek'),
        ),
        migrations.AlterField(
            model_name='service',
            name='name',
            field=models.CharField(help_text='Nazwa usługi w menu', max_length=200, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='name_en',
            field=models.CharField(help_text='Nazwa usługi w menu', max_length=200, null=True, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='name_pl',
            field=models.CharField(help_text='Nazwa usługi w menu', max_length=200, null=True, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='name_ru',
            field=models.CharField(help_text='Nazwa usługi w menu', max_length=200, null=True, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='text',
            field=models.TextField(blank=True, help_text='Tekst bloku tekstowego', null=True, verbose_name='Opis'),
        ),
        migrations.AlterField(
            model_name='service',
            name='text_en',
            field=models.TextField(blank=True, help_text='Tekst bloku tekstowego', null=True, verbose_name='Opis'),
        ),
        migrations.AlterField(
            model_name='service',
            name='text_pl',
            field=models.TextField(blank=True, help_text='Tekst bloku tekstowego', null=True, verbose_name='Opis'),
        ),
        migrations.AlterField(
            model_name='service',
            name='text_ru',
            field=models.TextField(blank=True, help_text='Tekst bloku tekstowego', null=True, verbose_name='Opis'),
        ),
        migrations.AlterField(
            model_name='service',
            name='title',
            field=models.CharField(blank=True, help_text='Tytuł bloku tekstowego', max_length=200, null=True, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='title_en',
            field=models.CharField(blank=True, help_text='Tytuł bloku tekstowego', max_length=200, null=True, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='title_pl',
            field=models.CharField(blank=True, help_text='Tytuł bloku tekstowego', max_length=200, null=True, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='title_ru',
            field=models.CharField(blank=True, help_text='Tytuł bloku tekstowego', max_length=200, null=True, verbose_name='Nazwa usługi'),
        ),
        migrations.AlterField(
            model_name='team',
            name='my_order',
            field=models.PositiveIntegerField(default=0, help_text='Porządek wyświetlania na stronie', verbose_name='Porządek'),
        ),
    ]
