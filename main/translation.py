from modeltranslation.translator import translator, register, TranslationOptions
from .models import *


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('name',)


@register(Service)
class ServiceTranslationOptions(TranslationOptions):
    fields = ('name', 'title', 'text', 'promo')


@register(Stolbiec)
class StolbiecTranslationOptions(TranslationOptions):
    fields = ('stolbik',)


@register(Row)
class DeviceTranslationOptions(TranslationOptions):
    fields = ('row',)


@register(Device)
class DeviceTranslationOptions(TranslationOptions):
    field = ('name',)


@register(Review)
class ReviewTranslationOptions(TranslationOptions):
    fields = ('name', 'desc')


@register(Accesories)
class ReviewTranslationOptions(TranslationOptions):
    fields = ('name', 'price')


@register(Work)
class ReviewTranslationOptions(TranslationOptions):
    fields = ('name', 'desc')


@register(Learning)
class ReviewTranslationOptions(TranslationOptions):
    fields = ('name', 'desc')


@register(Team)
class ReviewTranslationOptions(TranslationOptions):
    fields = ('name_surname', 'post', 'name_desc')

@register(Shipping)
class ReviewTranslationOptions(TranslationOptions):
    fields = ('title', 'desc')

