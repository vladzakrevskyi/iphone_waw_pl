# Generated by Django 3.1.7 on 2021-03-27 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0019_auto_20210327_2102'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='row',
            name='choise',
        ),
        migrations.AddField(
            model_name='stolbiec',
            name='choise',
            field=models.CharField(choices=[('Dodać przycisk', 'Dodać przycisk'), ('Bez przycisku', 'Bez przycisku')], default='Bez przycisku', max_length=100),
        ),
    ]
