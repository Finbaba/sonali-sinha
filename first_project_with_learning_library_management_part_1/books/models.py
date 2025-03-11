from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)       # Book ka title
    author = models.CharField(max_length=100)      # Author ka naam
    published_date = models.DateField()            # Publication date
    isbn = models.CharField(max_length=13, unique=True)  # Unique ISBN number

    def __str__(self):
        return self.title

