from django.http import HttpResponse
from django.shortcuts import render
from members.models import Member

def home(request):
    return HttpResponse("Welcome to the Library - Members Section!")


def member_list(request):
    members = Member.objects.all()  # Saare members fetch karenge
    print(members)
    return render(request, 'members/member_list.html', {'members': members})


