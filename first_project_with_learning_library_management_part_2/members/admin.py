from django.contrib import admin
from members.models import Member

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email')  # Columns to show
    search_fields = ('first_name','email')  # Search functionality
