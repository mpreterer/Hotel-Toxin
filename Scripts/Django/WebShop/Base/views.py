from django.shortcuts import render

product = [
    {
        'title': 'Кеды',
        'model': 'nike-sb-13',
        'about': 'Repudiandae odio qui sequi hic sunt officia minus explicabo blanditiis suscipit, itaque.'

    },
    {
        'title': 'Кроссовки',
        'model': 'AdiddasAir-V',
        'about': 'Repudiandae odio qui sequi hic sunt officia minus explicabo blanditiis suscipit, itaque.'
    },
    {
        'title': 'Кеды',
        'model': 'PumaPr',
        'about': 'Repudiandae odio qui sequi hic sunt officia minus explicabo blanditiis suscipit, itaque.'
    }
]

def home(request):
    data = {
        'product': product,
        'title': 'Главная страничка'
    }
    return render(request, 'Base/home.html', data)
