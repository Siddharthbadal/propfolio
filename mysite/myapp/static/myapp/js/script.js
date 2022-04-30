// declaring variables
table = document.getElementById("dataTable")
let net_prices, net_rent, net_emi, net_tax, net_expense, net_monthly_expense, net_monthly_income = 0;

let property_names = ""

let total_prices=0;
let total_rent=0;
let total_emi=0;
let total_tax=0;
let total_expense=0;
let total_net_monthly_expense=0;
let total_net_monthly_income=0;
let net_income_list = []
let property_names_list = []
let net_expense_list = []
let net_tax_list = []
let net_emi_list = []
let net_single_expenses_list = []
let net_prices_list = []

for(let i=1; i<table.rows.length - 1; i++){
  // values from table cells
  property_names = table.rows[i].cells[0].innerText;

  net_prices = table.rows[i].cells[1].innerText;
  net_rent=table.rows[i].cells[2].innerText
  net_emi=table.rows[i].cells[3].innerText
  net_tax=table.rows[i].cells[4].innerText
  net_expense=table.rows[i].cells[5].innerText
  net_monthly_expense=table.rows[i].cells[6].innerText
  net_monthly_income=table.rows[i].cells[7].innerText

  //pushing net monthly data into the net income array 
  net_income_list.push(net_monthly_income)
  property_names_list.push(property_names)
  net_expense_list.push(net_monthly_expense)
  net_tax_list.push(net_tax)
  net_emi_list.push(net_emi)
  net_single_expenses_list.push(net_expense)
  net_prices_list.push(net_prices)



  // coverting values to integer
  net_prices = parseInt(net_prices)
  net_rent=parseInt(net_rent)
  net_emi = parseInt(net_emi)
  net_tax= parseInt(net_tax)
  net_expense= parseInt(net_expense)
  net_monthly_expense= parseInt(net_monthly_expense)
  net_monthly_income = parseInt(net_monthly_income)


  // total price
  total_prices += net_prices
  total_rent += net_rent
  total_emi += net_emi
  total_tax += net_tax
  total_expense += net_expense
  total_net_monthly_expense += net_monthly_expense
  total_net_monthly_income += net_monthly_income

}

document.getElementById("totalPrice").innerHTML=total_prices
document.getElementById("totalRent").innerHTML=total_rent
document.getElementById("totalEMI").innerHTML=total_emi
document.getElementById("totalTax").innerHTML=total_tax
document.getElementById("totalExpense").innerHTML=total_expense
document.getElementById("totalMonthlyExpense").innerHTML=total_net_monthly_expense
document.getElementById("totalMonthlyIncome").innerHTML=total_net_monthly_income



