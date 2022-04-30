const ctxExpense = document.getElementById('expenseSpreadChart').getContext('2d');
const myExpenseChart = new Chart(ctxExpense, {
    type: 'bar',
    data: {
        labels: property_names_list,
        datasets: [{
            label: 'Monthly EMI',
            data: net_emi_list,
            
            backgroundColor: [
                'rgba(255, 99, 132, 2)',  
            ],
            borderColor: [
                'rgb(105,105,105)',
            ],
            borderWidth: 1
        },
        {
            label: 'Monthly Tax',
            data: net_tax_list,
            
            backgroundColor: [
                'rgba(153, 102, 255, 1)',  
            ],
            borderColor: [
                'rgb(105,105,105)',
            ],
            borderWidth: 1
        },
        {
            label: 'Monthly Expense',
            data: net_single_expenses_list,
            
            backgroundColor: [
                'rgba(255, 206, 86, 1)',  
            ],
            borderColor: [
                'rgb(105,105,105)',
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// income spread chart

const ctxIncome = document.getElementById('incomeSpreadChart').getContext('2d');

const myIncomeChart = new Chart(ctxIncome, {
    type: 'doughnut',
    data: {
        labels: property_names_list,
        datasets: [{
            label: 'Net Monthly Income',
            data: net_income_list,
            
            backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(255, 99, 132, 2)',
                'rgba(255, 105, 86, 1)',
                'rgba(153, 102, 255, 1)',
                
            ],
            borderColor: [
                'rgb(105,105,105)',
                'rgb(105,105,105)',
                'rgb(105,105,105)',
                'rgb(105,105,105)',
                'rgb(105,105,105)',
                'rgb(105,105,105)',
                'rgb(105,105,105)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
