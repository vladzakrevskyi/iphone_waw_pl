from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
  path('', views.blog, name='blog'),
  path('<post_slug>/', views.blog_post, name='blog_post'),
  path('summernote/', include('django_summernote.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
