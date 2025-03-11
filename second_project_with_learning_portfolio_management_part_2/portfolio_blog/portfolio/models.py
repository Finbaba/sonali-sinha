from django.db import models
from django.contrib.auth.models import User

class Subject(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='books')

    def __str__(self):
        return self.title


class PDF(models.Model):
    book = models.OneToOneField(Book, on_delete=models.CASCADE, related_name='pdf')
    quantity = models.PositiveIntegerField(default=0)  # Number of available PDFs

    def __str__(self):
        return f"{self.book.title} - PDFs Available: {self.quantity}"

    def decrease_quantity(self):
        if self.quantity > 0:
            self.quantity -= 1
            self.save()

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    mobile = models.CharField(max_length=15)
    email = models.EmailField()

    def __str__(self):
        return self.user.username

class Purchase(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="purchases")
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    purchase_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.user.username} - {self.book.title} on {self.purchase_date}"
# Create your models here.
