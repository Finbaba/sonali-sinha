from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {
        'apps': [
            {'name': 'Books', 'url': '/books/'},
            {'name': 'Members', 'url': '/members/'},
        ]
    })
