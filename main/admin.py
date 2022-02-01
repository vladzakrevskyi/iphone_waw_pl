from django_summernote.admin import SummernoteModelAdmin
from django.contrib import admin
from .models import *
import nested_admin
from modeltranslation.admin import TranslationTabularInline


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'rating', 'choise')
    list_editable = ('date', 'rating', 'choise')


class RowInline(nested_admin.NestedTabularInline):
    model = Row
    extra = 0


class StolbiecInline(nested_admin.NestedStackedInline):
    model = Stolbiec
    inlines = [RowInline, ]
    extra = 0


class ServiceAdmin(nested_admin.NestedModelAdmin, SummernoteModelAdmin):
    summernote_fields = '__all__'
    inlines = [StolbiecInline, ]
    list_display = ('name', 'category', 'my_order')
    list_editable = ('category', 'my_order')


class AccessoriesAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')
    list_editable = ('price', )


class WorkAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'
    list_display = ('name', )

class ShippingAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'
    list_display = ('title', )

class LearningAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'
    list_display = ('name', )


class TeamAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'
    list_display = ('name_surname', 'my_order')
    list_editable = ('my_order',)


admin.site.register(Review, ReviewAdmin)
admin.site.register(Category)
admin.site.register(Accesories, AccessoriesAdmin)
admin.site.register(Work, WorkAdmin)
admin.site.register(Learning, LearningAdmin)
admin.site.register(Team, TeamAdmin)
admin.site.register(Shipping, ShippingAdmin)
admin.site.register(Service, ServiceAdmin)
