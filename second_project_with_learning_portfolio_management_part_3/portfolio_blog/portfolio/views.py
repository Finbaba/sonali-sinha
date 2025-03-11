from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from portfolio.models import Subject, Book, PDF, Student, Purchase
import razorpay
from django.conf import settings

razorpay_client = razorpay.Client(auth=(settings.RAZORPAY_API_KEY, settings.RAZORPAY_API_SECRET))

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

# def payment_success(request):
#     # Handle payment success
#     book_id = request.GET.get('book_id')
#     book = get_object_or_404(Book, id=book_id)
#     book.pdf.quantity -= 1
#     book.pdf.save()

#     student = request.user.student
#     Purchase.objects.create(student=student, book=book)

#     return render(request, 'portfolio/success.html', {'book': book})

def payment_success(request):
    payment_order_id = request.session.get('payment_order_id')
    book_id = request.session.get('book_id')
    book = get_object_or_404(Book, id=book_id)

    # Verify payment
    payment_id = request.GET.get('razorpay_payment_id')
    try:
        razorpay_client.payment.fetch(payment_id)
        book.pdf.quantity -= 1
        book.pdf.save()

        # Save purchase history
        student = request.user.student
        Purchase.objects.create(student=student, book=book)

        return render(request, 'portfolio/success.html', {'book': book})
    except razorpay.errors.SignatureVerificationError:
        return redirect('payment_failure')

def payment_failure(request):
    return render(request, 'portfolio/failure.html')

def purchase_blog(request):
    return render(request, 'portfolio/purchase.html')

def purchase(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    if request.method == "POST":
        # Collect student details
        student, created = Student.objects.get_or_create(
            user=request.user,
            defaults={
                'age': request.POST['age'],
                'mobile': request.POST['mobile'],
                'email': request.POST['email']
            }
        )
        
        # Create Razorpay Order
        amount = 50000  # Amount in paise (e.g., ₹500.00)
        currency = "INR"
        payment_order = razorpay_client.order.create(dict(amount=amount, currency=currency, payment_capture=1))
        payment_order_id = payment_order['id']

        # Save order details for callback
        request.session['payment_order_id'] = payment_order_id
        request.session['book_id'] = book.id

        # Pass data to the frontend
        return render(request, 'portfolio/payment.html', {
            'book': book,
            'amount': amount / 100,  # Pass amount in rupees
            'order_id': payment_order_id,
            'api_key': settings.RAZORPAY_API_KEY
        })

    return render(request, 'portfolio/purchase.html', {'book': book})

def payment_callback(request):
    if request.method == "POST":
        payment_id = request.POST.get('razorpay_payment_id')
        print(f"Payment successful: {payment_id}")
        # Update database or perform further actions here
        return JsonResponse({"status": "success", "payment_id": payment_id})

def purchase_blog(request):
    if request.method == "POST":
        # Backend pe Razorpay order create karein
        amount = 50000  # Example: ₹500 in paise
        currency = "INR"

        # Create Razorpay order
        payment_order = razorpay_client.order.create(dict(amount=amount, currency=currency, payment_capture=1))
        payment_order_id = payment_order['id']

        # Store order ID and amount in session
        request.session['payment_order_id'] = payment_order_id
        request.session['amount'] = amount

        # Redirect user to payment page
        return render(request, 'portfolio/payment.html', {
            'order_id': payment_order_id,
            'amount': amount / 100,
            'razorpay_key_id': settings.RAZORPAY_API_KEY,
        })

    return render(request, 'portfolio/purchase.html')


