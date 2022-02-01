from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.contrib import messages
from django.conf import settings
from .models import *
from .form import *
import urllib.request
import json


def render_tamplate(tpl, dt, request):
    categories = Category.objects.all()
    services = Service.objects.all()
    stolbiec = Stolbiec.objects.all()
    rows = Row.objects.all()
    dct = {'categories': categories, 'services': services, 'stolbiec': stolbiec, 'rows': rows}
    dct.update(dt)
    if request.method == 'POST':
        css_form = OrderPhone(request.POST)
        if css_form.is_valid():
            return phone_form(request)
        else:
            return render(request, tpl, dct)
    else:
        return render(request, tpl, dct)


def phone_form(request):
    css_form = OrderPhone(request.POST)

    if css_form.is_valid():
        name = css_form.cleaned_data['name']
        phone = css_form.cleaned_data['phone']
        message = css_form.cleaned_data['message']
        recipients = ['dmajster.pl@gmail.com']

        try:
            send_mail("[DobryMajster] Zamówienie rozmowy",
                      "Imie: %s \nNumer kontaktowy: %s \nProblem: %s"
                      "\n\nPlease don't reply to this message. "
                      "For the answer use the phone specified by the client."
                      % (name, phone, message), 'dmajster.pl@gmail.com', recipients)

        except BadHeaderError:
            return HttpResponse('Invalid header found')
        if request.LANGUAGE_CODE == 'pl':
            return redirect('/sukces')
        else:
            return redirect('/' + request.LANGUAGE_CODE + '/sukces')


def index(request):
    reviews = Review.objects.order_by('-date')
    dct = {'reviews': reviews}
    if request.method == 'POST':
        css_form = OrderPhone(request.POST)
        if css_form.is_valid():
            return phone_form(request)
        else:
            return render_tamplate('main/index.html', dct, request)
    else:
        return render_tamplate('main/index.html', dct, request)


def contact_form(request):
    c_form = ContactForm(request.POST)

    if c_form.is_valid():
        subject = c_form.cleaned_data['subject']
        name = c_form.cleaned_data['name']
        email = c_form.cleaned_data['email']
        phone = c_form.cleaned_data['phone']
        message = c_form.cleaned_data['message']
        recipients = ['dmajster.pl@gmail.com']

        try:
            send_mail("[DobryMajster] Contact From Message",
                      "Subject: %s \nName: %s \nEmail: %s \nPhone: %s \n\nMessage: %s"
                      "\n\nPlease don't reply to this message. "
                      "For the answer use the e-mail specified by the client."
                      % (subject, name, email, phone, message), 'dmajster.pl@gmail.com', recipients)
            send_mail(
                '[DobryMajster] Dziękujemy za Twój kontakt',
                'Dziękujemy za Twój kontakt.\n'
                'Skontaktujemy się z Tobą w najbliższym czasie.\n'
                'Pozdrawiamy,\nZespół DobryMajster.',
                'dobry.majster.warszawa@gmail.com',
                [c_form.cleaned_data['email']],
            )

        except BadHeaderError:
            return HttpResponse('Invalid header found')
        if request.LANGUAGE_CODE == 'pl':
            return redirect('/sukces')
        else:
            return redirect('/' + request.LANGUAGE_CODE + '/sukces')


def service_contact_form(request):
    cs_form = ServiceContact(request.POST)

    if cs_form.is_valid():
        name = cs_form.cleaned_data['name']
        model = cs_form.cleaned_data['model']
        datetime = cs_form.cleaned_data['datetime']
        email = cs_form.cleaned_data['email']
        phone = cs_form.cleaned_data['phone']
        message = cs_form.cleaned_data['message']
        recipients = ['dmajster.pl@gmail.com']

        try:
            send_mail("[DobryMajster] ServiceContact Message",
                        "Name: %s \nModel: %s\nTermin: %s\nEmail: %s \nPhone: %s \nMessage: %s"
                        "\n\nPlease don't reply to this message. "
                        "For the answer use the e-mail specified by the client."
                        % (name, model, datetime, email, phone, message), 'dmajster.pl@gmail.com', recipients)
            send_mail(
                '[DobryMajster] Potwierdzenie rezerwacji',
                '%s dziękujemy za rezerwacje terminu\n'
                'Twój termin: %s\n'
                'Pozdrawiamy,\nZespół DobryMajster.'
                % (name, datetime), 'dobry.majster.warszawa@gmail.com',
                [cs_form.cleaned_data['email']],
            )

        except BadHeaderError:
            return HttpResponse('Invalid header found')
        if request.LANGUAGE_CODE == 'pl':
            return redirect('/sukces')
        else:
            return redirect('/' + request.LANGUAGE_CODE + '/sukces')


def order_contact_form(request):
    os_form = OrderForm(request.POST)

    if os_form.is_valid():
        services = os_form.cleaned_data['services']
        device = os_form.cleaned_data['device']
        name = os_form.cleaned_data['name']
        phone = os_form.cleaned_data['phone']
        recipients = ['dobry.majster.warszawa@gmail.com']

        try:
            send_mail("[DobryMajster] Nowe Zamówienie",
                      "Zamówienie \n"
                      "Usługa: %s \nModel Urządzenia: %s \nImie: %s \nNumer Kontaktowy: %s \n"
                      "\n\nPlease don't reply to this message. "
                      % (services, device, name, phone), 'dmajster.pl@gmail.com', recipients)

        except BadHeaderError:
            return HttpResponse('Invalid header found')
        if request.LANGUAGE_CODE == 'pl':
            return redirect('/sukces')
        else:
            return redirect('/' + request.LANGUAGE_CODE + '/sukces')


def contact(request):
    if request.method == 'POST':
        c_form = ContactForm(request.POST)
        if c_form.is_valid():
            return contact_form(request)
        else:
            return render_tamplate('main/contact.html', {}, request)
    else:
        return render_tamplate('main/contact.html', {}, request)


def service(request, category_slug, service_slug):
    service = Service.objects.get(slug=service_slug)
    devices = Device.objects.filter(service__slug=service_slug, service__category__slug=category_slug)
    if request.method == 'POST':
        cs_form = ServiceContact(request.POST)
        os_form = OrderForm(request.POST)
        if os_form.is_valid():
            return order_contact_form(request)
        elif cs_form.is_valid():
            return service_contact_form(request)
        else:
            return render_tamplate('main/detail_service.html', {'service': service, 'devices': devices}, request)
    else:
        return render_tamplate('main/detail_service.html', {'service': service, 'devices': devices}, request)


def service_single(request, category_slug):
    service = Service.objects.get(category__slug=category_slug)
    devices = Device.objects.filter(category__slug=category_slug)
    return render_tamplate('main/detail_service.html', {'service': service, 'devices': devices}, request)


def sukces(request):
    return render_tamplate('main/sukces.html', {}, request)


def privacy_policy(request):
    return render_tamplate('main/privacy_policy.html', {}, request)


def shipping(request):
    shipping = Shipping.objects.all()
    dct = {'shipping': shipping}
    return render_tamplate('main/shipping.html', dct, request)


def accessories(request):
    accessories = Accesories.objects.all()
    dct = {'accessories': accessories}
    return render_tamplate('main/accessories.html', dct, request)


def review(request):
    reviews = Review.objects.order_by('-date')
    dct = {'reviews': reviews}
    return render_tamplate('main/review.html', dct, request)


def team(request):
    team = Team.objects.all()
    return render_tamplate('main/team.html', {'team': team}, request)


def work(request):
    work = Work.objects.all()
    dct = {'work': work}
    return render_tamplate('main/work.html', dct, request)


def learning(request):
    learning = Learning.objects.all()
    dct = {'learning': learning}
    return render_tamplate('main/learning.html', dct, request)


def about(request):
    return render_tamplate('main/about_us.html', {}, request)
