from modeltranslation.translator import register, TranslationOptions
from .models import Post


@register(Post)
class BlogTranslationOptions(TranslationOptions):
    fields = ('title', 'short_desc', 'full_desc')
