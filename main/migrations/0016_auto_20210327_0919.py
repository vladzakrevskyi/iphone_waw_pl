# Generated by Django 3.1.7 on 2021-03-27 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_row_stolbiec'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='stolbiec',
            options={'ordering': ['my_order'], 'verbose_name': 'Столбик', 'verbose_name_plural': 'Столбцы'},
        ),
        migrations.AddField(
            model_name='stolbiec',
            name='my_order',
            field=models.PositiveIntegerField(default=0, verbose_name='Porządek'),
        ),
    ]
