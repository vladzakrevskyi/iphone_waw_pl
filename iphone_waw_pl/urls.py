from django.conf.urls.i18n import i18n_patterns
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
    path('i18n/', include('django.conf.urls.i18n')),
]

urlpatterns += i18n_patterns(
    path('', include('main.urls')),
    path('summernote/', include('django_summernote.urls')),
    prefix_default_language=False
)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
