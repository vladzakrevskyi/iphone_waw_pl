from django.db import models
from django.db.models import IntegerField
from django.template.defaultfilters import slugify
from adminsortable.models import Sortable
from django.core.validators import MaxValueValidator, MinValueValidator


class Team(models.Model):
    image = models.ImageField('Zdjęcie pracownika', upload_to='team_image', help_text='Zdjęcie pracownika', null=True, blank=True)
    name_surname = models.CharField('Imie i Nazwisko pracownika', max_length=200)
    post = models.CharField('Stanowisko pracownika', max_length=200)
    name_desc = models.TextField('Opis pracownika', max_length=400)
    my_order = models.PositiveIntegerField('Porządek', help_text='Porządek wyświetlania na stronie', default=0, blank=False, null=False)

    def __str__(self):
        return self.name_surname

    class Meta(object):
        ordering = ['my_order']
        verbose_name = 'Pracownik'
        verbose_name_plural = 'Pracownicy'


class Category(models.Model):
    name = models.CharField('Kategoria', help_text='Nazwa urządzenia w menu',  max_length=200)
    device_icon = models.ImageField('Ikona urządzenia', help_text='Obrazek urządzenia w menu',  blank=True, null=True, upload_to='icon_menu')
    slug = models.SlugField(default='slug', unique=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)
        return self.name

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Kategoria'
        verbose_name_plural = 'Kategorie'


class Service(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="sub")
    name = models.CharField('Nazwa usługi', help_text='Nazwa usługi w menu', max_length=200)
    image = models.ImageField('Obraz urządzenia', upload_to='service_image', help_text='Zdjęcie usługi', null=True,blank=True)
    title = models.CharField('Nazwa usługi', help_text='Tytuł bloku tekstowego', max_length=200, null=True, blank=True)
    text = models.TextField('Opis', help_text='Tekst bloku tekstowego', null=True, blank=True)
    my_order = models.PositiveIntegerField('Porządek', help_text='Porządek wyświetlania na stronie', default=0, blank=False, null=False)
    slug = models.SlugField(default='slug', unique=True)
    promo = models.TextField('Promocja', help_text='Tekst pod tytułem usługi na stronie usługi', blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Service, self).save(*args, **kwargs)
        return self.name

    def __str__(self):
        return self.name

    class Meta(object):
        ordering = ['my_order']
        verbose_name = 'Usluga'
        verbose_name_plural = 'Uslugi'


class Stolbiec(models.Model):
    stolbiec = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='stolbiec')
    stolbik = models.CharField('Tytuł kolumny', max_length=200, blank=True, null=True)
    my_order = models.PositiveIntegerField('Porządek', default=0, blank=False, null=False)

    class Meta:
        ordering = ['my_order']
        verbose_name = 'Kolumna'
        verbose_name_plural = 'Kolumny'


class Row(models.Model):
    rows = models.ForeignKey(Stolbiec, on_delete=models.CASCADE, related_name='rows', default='')
    row = models.CharField('Tytuł wiersza', max_length=200, blank=True, null=True)
    CHOICES = (
        ("Dodać przycisk", "Dodać przycisk"),
        ("Bez przycisku", "Bez przycisku"),
    )
    choise = models.CharField(max_length=100, choices=CHOICES, default="Bez przycisku")


    class Meta:
        verbose_name = 'Wiersz'
        verbose_name_plural = 'Wiersze'


class Device(models.Model):
    service = models.ForeignKey(Service, on_delete=models.PROTECT)
    image = models.ImageField('Obraz urządzenia', help_text='Obraz urządzenia obok nazwy urządzenia w tablicy usługi', blank=True, null=True, upload_to='device')
    name = models.CharField('Nazwa urządzenia', help_text='Model urządzenia', max_length=500)
    price = models.CharField('Cena usługi', help_text='Cena usługi dla urządzeń dla których nie ma zamiennika, premium, lub ceny dodatkowej', null=True, blank=True, max_length=50)
    price_1 = models.CharField('Cena usługi dodatkowa', help_text='Cena dodatkowa(np.: Wymiana dysku SSD MacBook(W zależności od rozmiaru dysku inna cena))', null=True, blank=True, max_length=50)
    price_2 = models.CharField('Cena usługi dodatkowa', help_text='Cena dodatkowa(np.: Wymiana dysku SSD MacBook(W zależności od rozmiaru dysku inna cena))', null=True, blank=True, max_length=50)
    copy = models.CharField('Cena zamiennik', help_text='Cena za część zamienną', null=True, blank=True, max_length=50)
    premium = models.CharField('Cena premium', help_text='Cena za część premium', null=True, blank=True, max_length=50)
    time = models.CharField('Czas naprawy', help_text='Czas naprawy urządzenia', max_length=40, null=True, blank=True)


    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Urządzenie'
        verbose_name_plural = 'Urządzenia'


class ValidateModelMixin(object):
    def clean(self, *args, **kwargs):
        self.full_clean(*args, **kwargs)


class Review(models.Model):
    name = models.CharField('Imie', max_length=100)
    desc = models.TextField('Tekst opinii')
    date = models.DateField('Data', help_text='Data publikacji(Sortowanie po dacie malejąco)',  auto_now=False, null=True)
    CHOICES = (
        ("1", "1"),
        ("2", "2"),
        ("3", "3"),
        ("4", "4"),
        ("5", "5"),
    )
    rating = models.CharField('Ocena', max_length=100, choices=CHOICES, default='')
    CHOICES = (
        ("Google", "Google"),
        ("Facebook", "Facebook"),
    )
    choise = models.CharField('Sieć', help_text='Z jakiej sieci jest opinia',  max_length=100, choices=CHOICES, default='')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Opinia'
        verbose_name_plural = 'Opinie'


class Accesories(models.Model):
    name = models.TextField('Nazwa towaru', max_length=1000)
    price = models.CharField('Cena towaru', max_length=200)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Akcesoria'
        verbose_name_plural = 'Akcesoria'


class Work(models.Model):
    name = models.CharField('Nazwa stanowiska', max_length=1000)
    desc = models.TextField('Tekst ogłoszenia', max_length=20000)
    image = models.ImageField('Zdjęcie bloku tekstowego', help_text='Zdjęcie bloku tekstowego', upload_to='work_img', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Ogłoszenie'
        verbose_name_plural = 'Praca'


class Learning(models.Model):
    name = models.CharField('Nazwa kursu', max_length=1000)
    desc = models.TextField('Tekst kursu', max_length=20000)
    image = models.ImageField('Zdjęcie kursu', help_text='Zdjęcie kursu', upload_to='learning_img', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Szkolenie'
        verbose_name_plural = 'Szkolenia'

class Shipping(models.Model):
    title = models.CharField('Tytuł', max_length=1000)
    desc = models.TextField('Tekst', max_length=20000)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Dostawa'
        verbose_name_plural = 'Dostawa'
