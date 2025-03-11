from django.urls import path
from portfolio import views

urlpatterns = [
    path('', views.home, name='home'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('purchase/Blog/', views.purchase_blog, name='purchase_blog'),
    path('payment_success/', views.payment_success, name='payment_success'),
    path('payment_failure/', views.payment_failure, name='payment_failure'),
    path('callback/', views.payment_callback, name='payment_callback'),

]
