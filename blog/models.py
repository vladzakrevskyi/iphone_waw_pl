from django.template.defaultfilters import slugify
from django.db import models


class Post(models.Model):
    image_small = models.ImageField('Obraz podglądu', blank=True, null=True, upload_to='posts')
    image_big = models.ImageField('Obraz artykułu', blank=True, null=True, upload_to='posts')
    title = models.CharField('Nazwa artykułu', max_length=200)
    short_desc = models.TextField('Krótki opis', max_length=1200)
    full_desc = models.TextField('Zawartosć artykułu')
    date = models.DateField('Data', auto_now=False)
    slug = models.SlugField(default='slug', unique=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Wpis'
        verbose_name_plural = 'Wpisy'
