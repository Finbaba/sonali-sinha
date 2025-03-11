
from django.contrib import admin
from django.urls import path, include
from library_management.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'), 
    path('books/', include('books.urls')),   # Books app ke URLs ko include kiya gaya hai
    path('members/', include('members.urls')), # Members app ke URLs ko include kiya gaya hai
]



