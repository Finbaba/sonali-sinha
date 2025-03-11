
from django.db import models

class MutualFund(models.Model):
    rank = models.PositiveIntegerField(unique=True, default=1)  # Rank field added
    name = models.CharField(max_length=255)
    returns = models.FloatField()

    def __str__(self):
        return f"{self.rank}. {self.name}"

    class Meta:
        ordering = ['rank']  # Default sorting by rank

class Contact(models.Model):
    name = models.CharField(max_length=255)
    mobile = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.mobile}"

