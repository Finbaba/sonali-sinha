from django.http import HttpResponse
from django.shortcuts import render, redirect
from books.models import Book, Lending
from members.models import Member
from datetime import datetime



def home(request):
    return HttpResponse("Welcome to the Library - Books Section!")


def book_list(request):
    books = Book.objects.all()  # Saare books fetch karenge
    return render(request, 'books/book_list.html', {'books': books})

# def lend_book(request, book_id, member_id):
#     try:
#         book = Book.objects.get(id=book_id)
#         print(book_id)
#     except Book.DoesNotExist:
#         return render(request, 'books/error.html', {'message': 'Book not found.'})
#     member = Member.objects.get(id=member_id)
#     if book.available_copies > 0:
#         Lending.objects.create(member=member, book=book, return_date='2025-12-31')
#         book.available_copies -= 1
#         book.save()
#         return redirect('books_home')
#     else:
#         return render(request, 'books/error.html', {'message': 'No copies available.'})

# def lend_book(request, book_id, member_id):
#     # Fetch the book or return an error page if not found
#     book = get_object_or_404(Book, id=book_id)

#     # Fetch the member or return an error page if not found
#     member = get_object_or_404(Member, id=member_id)

#     # Check if the book is available for lending
#     if book.available_copies > 0:
#         # Create a new lending record
#         Lending.objects.create(member=member, book=book, return_date=request.POST.get('return_date'))

#         # Decrement available copies and save the book
#         book.available_copies -= 1
#         book.save()

#         # Redirect to the book list page
#         return redirect('book_list')  # Ensure the name matches your URL pattern
#     else:
#         # Show an error page if no copies are available
#         return render(request, 'books/error.html', {'message': 'No copies available.'})




def lend_book(request, book_id, member_id):
    try:
        # Fetch the book and member objects
        book = Book.objects.get(id=book_id)
        member = Member.objects.get(id=member_id)
    except (Book.DoesNotExist, Member.DoesNotExist):
        return render(request, 'books/error.html', {'message': 'Book or Member not found.'})

    # Check if the book is available
    if book.available_copies > 0:
        # Book is available for lending
        Lending.objects.create(member=member, book=book, return_date='2025-12-31')  # Example return date
        book.available_copies -= 1  # Reduce available copies
        book.save()
        return redirect('books_home')  # Redirect after lending
    else:
        # Book is not available, update the nearest return date if available
        # Here you can calculate the nearest return date based on your own logic.
        # For now, we'll just set a hardcoded date, but you can adjust as needed.
        nearest_return_date = "2025-01-15"  # Example return date for when book is available

        book.nearest_return_date = nearest_return_date  # Update nearest return date
        book.save()  # Save the book with updated return date
        
        return render(request, 'books/error.html', {'message': f'Book not available. Nearest return date: {nearest_return_date}'})


def search_books(request):
    query = request.GET.get('q', '')  # URL se query fetch karein
    results = Book.objects.filter(title__icontains=query) | Book.objects.filter(author__icontains=query)
    return render(request, 'books/search_results.html', {'results': results, 'query': query})

def overdue_books(request):
    overdue = Lending.objects.filter(returned=False).filter(return_date__lt=date.today())
    return render(request, 'books/overdue_list.html', {'overdue': overdue})


