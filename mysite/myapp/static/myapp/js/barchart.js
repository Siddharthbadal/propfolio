// income bar chart
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: property_names_list,
        datasets: [{
            label: 'Net Monthly Income',
            data: net_income_list,
            
            backgroundColor: [
                'rgba(75, 192, 192, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(75, 192, 192, 2)',
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


// expenses chart

const ctx2 = document.getElementById('myExpenseChart').getContext('2d');
console.log(net_income_list)
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: property_names_list,
        datasets: [{
            label: 'Net Monthly Expenses',
            data: net_expense_list,
            
            backgroundColor: [
                'rgba(255, 99, 132, 2)',
                'rgba(255, 99, 132, 2)',
                'rgba(255, 99, 132, 2)',
                'rgba(255, 99, 132, 2)',
                'rgba(255, 99, 132, 2)',
                'rgba(255, 99, 132, 2)',
                'rgba(255, 99, 132, 2)',
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


