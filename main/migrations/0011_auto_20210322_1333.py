# Generated by Django 3.1.7 on 2021-03-22 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_learning'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='work',
            options={'verbose_name': 'Ogłoszenie', 'verbose_name_plural': 'Praca'},
        ),
        migrations.AddField(
            model_name='learning',
            name='image',
            field=models.ImageField(blank=True, help_text='Zdjęvie kursu', null=True, upload_to='learning_img', verbose_name='Zdjęcie kursu'),
        ),
    ]
