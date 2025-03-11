from django.contrib import admin
from .models import MutualFund, Contact

@admin.register(MutualFund)
class MutualFundAdmin(admin.ModelAdmin):
    list_display = ('rank', 'name', 'returns')
    list_display_links = ('name',)  # ✅ Name ko link banayenge
    list_editable = ('rank', 'returns')  # ✅ Editable fields
    ordering = ['rank']

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):  # ✅ Contact ke liye admin class
    list_display = ('name', 'mobile', 'created_at')  # ✅ Admin panel me yeh fields dikhegi
    ordering = ['-created_at']  # ✅ Latest entries pehle dikhenge
