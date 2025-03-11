from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from portfolio.models import Subject, Book, PDF, Student, Purchase


def home(request):
    return render(request, 'portfolio/home.html')

def subject_list(request):
    subjects = Subject.objects.all()
    return render(request, 'portfolio/portfolio.html', {'subjects': subjects})


def book_list(request, subject_id):
    books = Book.objects.filter(subject_id=subject_id)
    return render(request, 'portfolio/portfolio.html', {'books': books})


def request_book(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    pdf = book.pdf
    if pdf.quantity > 0:
        pdf.decrease_quantity()
        return JsonResponse({'status': 'success', 'message': 'Book request successful!', 'remaining': pdf.quantity})
    else:
        return JsonResponse({'status': 'error', 'message': 'No PDFs available.'})

def portfolio(request):
    subjects = Subject.objects.all()  # Fetch all subjects
    return render(request, 'portfolio/portfolio.html', {'subjects': subjects})

def purchase(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    if request.method == "POST":
        # Save student details and redirect to payment gateway
        student, created = Student.objects.get_or_create(
            user=request.user,  # Assume logged-in user
            defaults={'age': request.POST['age'], 'mobile': request.POST['mobile'], 'email': request.POST['email']}
        )
        # Redirect to payment gateway here
        return redirect('payment_success')  # Mock payment success for now

    return render(request, 'portfolio/purchase.html')

def payment_success(request):
    # Handle payment success
    book_id = request.GET.get('book_id')
    book = get_object_or_404(Book, id=book_id)
    book.pdf.quantity -= 1
    book.pdf.save()

    student = request.user.student
    Purchase.objects.create(student=student, book=book)

    return render(request, 'portfolio/success.html', {'book': book})

def payment_failure(request):
    # Handle payment failure
    return render(request, 'portfolio/failure.html')

def purchase_blog(request):
    return render(request, 'portfolio/purchase.html')