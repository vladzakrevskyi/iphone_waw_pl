# Generated by Django 3.1.7 on 2021-03-27 21:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0018_auto_20210327_2100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='row',
            name='choise',
            field=models.CharField(choices=[('Dodać przycisk', 'Dodać przycisk'), ('Bez przycisku', 'Bez przycisku')], default='Bez przycisku', max_length=100),
        ),
    ]
