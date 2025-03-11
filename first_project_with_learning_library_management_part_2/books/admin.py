from django.contrib import admin
from books.models import Book, Lending

# Book Admin Configuration
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'available_copies')  # Columns to display in admin panel
    search_fields = ('title', 'author')  # Search functionality
    
# Lending Admin Configuration
@admin.register(Lending)
class LendingAdmin(admin.ModelAdmin):
    list_display = ('book', 'member', 'borrowed_date', 'return_date', 'returned')  # Columns to display
    list_filter = ('returned', 'return_date')  # Add filters for returned status
    search_fields = ('book__title', 'member__name')  # Search by book title and member name

    #Admin panel me bulk actions add karne ke liye
    actions = ['mark_as_returned']

    def mark_as_returned(self, request, queryset):
        queryset.update(returned=True)

    mark_as_returned.short_description = "Mark selected lendings as returned"

