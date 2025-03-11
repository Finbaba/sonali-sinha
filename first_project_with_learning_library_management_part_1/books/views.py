from django.http import HttpResponse
from django.shortcuts import render
from books.models import Book


def home(request):
    return HttpResponse("Welcome to the Library - Books Section!")


def book_list(request):
    books = Book.objects.all()  # Saare books fetch karenge
    print(books)
    return render(request, 'books/book_list.html', {'books': books})





