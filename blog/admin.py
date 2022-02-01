from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Post


class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('__all__')
    list_display = ('title', 'date')
    list_editable = ('date',)


admin.site.register(Post, PostAdmin)
