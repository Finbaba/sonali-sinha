from django.core.management.base import BaseCommand
from django.urls import get_resolver

class Command(BaseCommand):
    help = 'Displays all URL patterns in the project'

    def handle(self, *args, **options):
        url_patterns = get_resolver().url_patterns
        for pattern in url_patterns:
            self.stdout.write(str(pattern))
