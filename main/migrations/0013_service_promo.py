# Generated by Django 3.1.7 on 2021-03-26 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_auto_20210322_2142'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='promo',
            field=models.TextField(blank=True, help_text='Tekst pod tytułem usługi na stronie usługi', null=True, verbose_name='Promocja'),
        ),
    ]