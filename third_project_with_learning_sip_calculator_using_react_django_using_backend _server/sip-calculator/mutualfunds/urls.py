from django.urls import path
from .views import get_mutual_funds
from .views import save_contact

urlpatterns = [
    path("mutualfunds/", get_mutual_funds, name="mutualfunds-list"),
    path('save-contact/', save_contact, name="save_contact"),
]
