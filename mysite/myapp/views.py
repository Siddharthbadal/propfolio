from django.shortcuts import render
import pandas as pd
from pandas.io import json
from .models import Data
# Create your views here.


def home(request):
    if (request.method=='POST'):
        previous_data = Data.objects.all()
        previous_data.delete()
        file = request.FILES['file']
        
        df = pd.read_csv(file)
        json_rows = df.reset_index().to_json(orient='records')
        data=[]
        data= json.loads(json_rows)
        for d in data:
            name = d['property_name']
            price = d['property_price']
            rent = d['property_rent']
            emi = d['emi']
            tax = d['tax']
            exp = d['other_exp']
            expenses_monthly = emi+tax+exp
            monthly_income = rent - expenses_monthly

            data_table = Data(name=name, price=price, rent=rent, emi=emi, tax=tax, exp=exp, expenses_monthly=expenses_monthly,monthly_income =monthly_income )

            data_table.save()
        data_objects = Data.objects.all()
        context = {'data_objects': data_objects}
        return render(request, "myapp/index.html", context)
    else:
        print("Not a Post request") 
    return render(request, "myapp/index.html")

