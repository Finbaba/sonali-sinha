from django.http import JsonResponse
from .models import MutualFund
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Contact
from django.views.decorators.csrf import csrf_exempt
import json


def get_mutual_funds(request):
    funds = MutualFund.objects.all().order_by('rank')[:10]  # ✅ Rank ke basis pe sorting
    data = [{"rank": fund.rank, "name": fund.name, "returns": fund.returns} for fund in funds]  # ✅ Rank include kiya
    return JsonResponse(data, safe=False)

@csrf_exempt
def save_contact(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            mobile = data.get('mobile')
            print(f"Data received: {name}, {mobile}")
            contact = Contact.objects.create(name=name, mobile=mobile)
            print(f"Contact Saved: {contact}")


            if not name or not mobile:
                return JsonResponse({'error': 'Name and mobile number are required.'}, status=400)

            # Yaha aap database me save kar sakte hain
            print(f"Received Contact - Name: {name}, Mobile: {mobile}")

            return JsonResponse({'message': 'Contact saved successfully!'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)
