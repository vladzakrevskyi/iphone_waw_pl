from django.shortcuts import render
from .models import Post
from main.models import Category, Service
from django.core.paginator import Paginator, EmptyPage


def render_tamplate(tpl, dt, request):
    categories = Category.objects.all()
    services = Service.objects.all()
    dct = {'categories': categories, 'services': services}
    dct.update(dt)
    return render(request, tpl, dct)


def blog(request):
    posts = Post.objects.all().order_by('-date')
    p = Paginator(posts, 15)
    page_num = request.GET.get('page',1)
    try:
        page = p.page(page_num)
    except EmptyPage:
        page = p.page(1)
    return render_tamplate('blog/blog.html', {'posts': page}, request)


def blog_post(request, post_slug):
    post = Post.objects.get(slug=post_slug)
    return render_tamplate('blog/details_view.html', {'post': post}, request)
