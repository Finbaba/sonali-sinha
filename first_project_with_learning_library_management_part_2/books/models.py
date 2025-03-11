from django.db import models
from members.models import Member  # Members model ko import karna hoga

class Book(models.Model):
    title = models.CharField(max_length=200)       # Book ka title
    author = models.CharField(max_length=100)      # Author ka naam
    published_date = models.DateField()            # Publication date
    isbn = models.CharField(max_length=13, unique=True)  # Unique ISBN number
    available_copies = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.title

    # Method to update available copies when a lending or return occurs
    def update_available_copies(self):
        lent_books_count = Lending.objects.filter(book=self, returned=False).count()  # Count of lent but not returned books
        self.available_copies = max(0, self.available_copies - lent_books_count)  # Decrease available copies
        self.save()

class Lending(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    borrowed_date = models.DateField(auto_now_add=True)
    return_date = models.DateField(null=True, blank=True)
    returned = models.BooleanField(default=False)

    def is_overdue(self):
        from datetime import date
        return not self.returned and self.return_date and date.today() > self.return_date

    # Override the save method to decrease or increase available copies
    def save(self, *args, **kwargs):
        if not self.pk:  # This is a new lending, so we are lending the book
            self.book.available_copies -= 1  # Decrease available copies
            self.book.save()  # Save the book instance with updated available_copies
        else:  # This is an update to an existing lending (book return)
            old_instance = Lending.objects.get(pk=self.pk)
            if old_instance.returned != self.returned and self.returned:  # Check if the book was marked as returned
                self.book.available_copies += 1  # Increase available copies
                self.book.save()  # Save the book instance with updated available_copies

        super(Lending, self).save(*args, **kwargs)  # Call the original save method
