from django import forms
from .form import *


class ContactForm(forms.Form):
    subject = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    phone = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    message = forms.CharField(required=False, widget=forms.Textarea(attrs={'class': 'textarea-form-control'}))


class ServiceContact(forms.Form):
    name = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control'}))
    model = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control'}))
    datetime = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField(required=False, widget=forms.TextInput(attrs={'class': 'form-control'}))
    phone = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    message = forms.CharField(required=False, widget=forms.Textarea(attrs={'class': 'textarea-form-control'}))


class OrderForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control-popup'}))
    phone = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control-popup'}))
    services = forms.CharField(widget=forms.TextInput(attrs={'readonly': 'readonly'}))
    device = forms.CharField(widget=forms.TextInput(attrs={'readonly': 'readonly'}))


class OrderPhone(forms.Form):
    name = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control-popup'}))
    phone = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control-popup'}))
    message = forms.CharField(required=False, widget=forms.Textarea(attrs={'class': 'form-control'}))
