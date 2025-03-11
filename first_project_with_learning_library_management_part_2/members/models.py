from django.db import models

class Member(models.Model):
    first_name = models.CharField(max_length=100)   # Member ka first name
    last_name = models.CharField(max_length=100)    # Member ka last name
    email = models.EmailField(unique=True)          # Unique email
    joined_date = models.DateField(auto_now_add=True) # Joining date (auto set)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

