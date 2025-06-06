from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from django.contrib import messages
from django.contrib.auth.models import auth
from django.core.paginator import Paginator
import pandas as pd
#import pandas as pd
from shop.models import Debts, shop, shopdb, verifyDB
# Create your views here.


def index(request):
    if request.method == 'POST':
        date = request.POST['date']
        name = request.POST['name']
        item_type = request.POST['category']
        quantity = request.POST['quantity']
        price = request.POST['price']
        
        if name is not None and date is not None:
            result = Debts.objects.create(date=date,name=name,item_type=item_type,quantity=quantity,price=price)
            if result == True:
                messages.info(request, 'data inserted successfully')
            
    return render(request, 'index.html')

def home(request):
    data = Debts.objects.all().values().order_by('id')
    pages = Paginator(data,12)
    page_count = ''
    try:
        page = request.GET['page']
        if page is None:
            messages.info(request, "no page was found try inserting any number eg.1 alongside url   ")
        else:    
            page_count = pages.get_page(page)
    except:
        messages.info(request, "no page was found try inserting any query eg.?page=1  alongside url")        
    return render(request, "home.html", {'pages': page_count})


def uploads(request):
    if request.method == 'POST':
        dataset = request.FILES['file']
        try:
            proccess(dataset)
        except Exception as e:
           return HttpResponse(request, f"file proccessing failed {e}")
    return render(request, 'file.html')

def proccess(filename):
    df = pd.read_csv(filename)
    try:
        for _, row in df.iterrows():
            shopdb.objects.create(
                product_name=row['product name'],
                product_description = row['product description'],
                product_price = row['product price'],
                stock_status= row['product stock status']
            )
        return redirect('home')    
    except Exception as e:
        print(e)
        return HttpResponse(f'file does not have correct format or file path not valid {str(e)}')
         
           
        
def shop_bkd(request):
    if request.method == 'POST':
        item_name = request.POST['item_name']
        description = request.POST['description']
        item_quantity_category = request.POST['item_quantity_category']
        quantity = request.POST['quantity']
        pay_method = request.POST['pay_method']
        price = request.POST['price']
        tel = request.POST['tel']
        date = request.POST['date']
        db = shop(item_name=item_name,description=description,item_quantity_category=item_quantity_category,
                  quantity=quantity,pay_method=pay_method,price=price,tel=tel,date=date)
        if item_name is not None and price is not None:
            db.save()
    return render(request, 'shop.html')


def shop_home(request):
    return render(request, "shopping.html")

def verify(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        tel = request.POST.get('tel')
        
        savedb = verifyDB(email=email,tel=tel)
        if verifyDB.objects.filter(email=email).exists():
            messages.error(request, 'Details Already Exist click the below link @go to home')
            #return redirect(request, 'shop_home')  
        else:
            savedb.save()
            if savedb == True:
                messages.success(request, 'Details Recorded Successfully')    
    return render(request, 'verify.html')

def authenticate(request):
    if 'auth' in request.GET:
        user = verifyDB.objects.filter(email=request.GET['auth']).exists()
        if  user == True:
            #print('visiting auth url for logging in')
            return render(request,'shopping.html')
        else:
            return JsonResponse('Taarifa ulizozitoa sio sahihi jaribu tena', safe=False)            