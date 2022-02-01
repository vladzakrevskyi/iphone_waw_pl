# Generated by Django 3.1.7 on 2021-03-22 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20210322_0718'),
    ]

    operations = [
        migrations.CreateModel(
            name='Learning',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1000, verbose_name='Nazwa kursu')),
                ('desc', models.TextField(max_length=20000, verbose_name='Tekst kursu')),
            ],
            options={
                'verbose_name': 'Szkolenie',
                'verbose_name_plural': 'Szkolenia',
            },
        ),
    ]
