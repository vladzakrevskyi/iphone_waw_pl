from django.urls import path, include
from django.conf import settings
from . import views
from django.contrib.staticfiles.urls import static
from django.views.generic.base import TemplateView
from google_site_verification import GOOGLE_SITE_VERIFICATION_URL


urlpatterns = [
  path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),),
  path('', views.index, name='home'),
  path('kontakt', views.contact, name='contact'),
  path('blog/', include('blog.urls')),
  path('sukces', views.sukces, name="sukces"),
  path('dostawa', views.shipping, name="shipping"),
  path('akcesoria', views.accessories, name="accessories"),
  path('opinie', views.review, name="review"),
  path('zespol', views.team, name="team"),
  path('praca', views.work, name="work"),
  path('szkolenia', views.learning, name="learning"),
  path('o-nas', views.about, name="about"),
  path('polityka-prywatnosci', views.privacy_policy, name="privacy-policy"),
  path('<category_slug>/', views.service_single, name='detail_service_single'),
  path('<category_slug>/<service_slug>', views.service, name='detail_service'),
  GOOGLE_SITE_VERIFICATION_URL
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



