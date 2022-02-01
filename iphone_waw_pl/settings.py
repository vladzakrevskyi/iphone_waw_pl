from pathlib import Path
from django.utils.translation import gettext
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
# BASE_DIR = Path(__file__).resolve().parent.parent
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ')u10-&i*_hbqaf1^#lwc(!_1cn*mdpip=38_a5%jm^@b&a*n@qzm0'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

if DEBUG is False:
    COMPRESS_ENABLED = True
    COMPRESS_OFFLINE = True

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'main',
    'blog',
    'django_summernote',
    'compressor',
    'sorl.thumbnail',
    'modeltranslation',
    'django_smtp_ssl',
    'adminsortable2',
    'nested_admin',
    'translations',
    'django.core',
    'google_site_verification',
]

MIDDLEWARE = [
    'main.force_default_middleware.force_default_language_middleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.locale.LocaleMiddleware',
]
MIDDLEWARE_CLASSES = (
   'django.contrib.sessions.middleware.SessionMiddleware',
   'solid_i18n.middleware.SolidLocaleMiddleware',
    'django.middleware.locale.LocaleMiddleware',
   'django.middleware.common.CommonMiddleware',
)

X_FRAME_OPTIONS = 'SAMEORIGIN'

ROOT_URLCONF = 'iphone_waw_pl.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.media',
                'django.template.context_processors.static'
            ],
        },
    },
]

WSGI_APPLICATION = 'iphone_waw_pl.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
)



gettext = lambda s: s
LANGUAGES = (
    ('pl', gettext('Polish')),
    ('ru', gettext('Russian')),
    ('uk', gettext('Ukrainian')),
    ('en', gettext('English')),
)

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'main/locale'),
    'locale',
)
MODELTRANSLATION_DEFAULT_LANGUAGE = 'pl'
TRANSLATABLE_MODEL_MODULES = ('blog')

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)

LANGUAGE_CODE = 'pl'

TIME_ZONE = 'UTC'

USE_I18N = True
USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

STATICFILES_DIRS = (os.path.join(BASE_DIR+'/main/', 'static'), )

gettext = lambda s: s

THUMBNAIL_PRESERVE_FORMAT = True
GOOGLE_SITE_VERIFICATION_FILE = "google79f5fe823de19654.html"
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'dobry.majster.warszawa@gmail.com'
EMAIL_HOST_PASSWORD = 'dobrymajster_2021'
