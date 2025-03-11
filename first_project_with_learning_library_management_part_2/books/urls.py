from django.urls import path
from books import views
from books.views import book_list
from django.http import HttpResponse

urlpatterns = [
    path('', book_list, name='book_list'),
    path('lend/<int:book_id>/<int:member_id>/', views.lend_book, name='lend_book'),
    path('search/', views.search_books, name='search_books'),
    path('overdue/', views.overdue_books, name='overdue_books'),
    path('test/', lambda request: HttpResponse("Books test URL is working")),
    path('lend/<int:book_id>/<int:member_id>/', views.lend_book, name='lend_book')

]

