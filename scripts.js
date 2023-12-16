// JavaScript code for the budgeting and finance tracker web application

// Create a new chart object for the income chart
var incomeChart = new Chart(document.getElementById("income-chart"), {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: 'Income',
        data: [1000, 1200, 1500, 1800, 2000, 2200]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  // Create a new chart object for the expense chart
  var expenseChart = new Chart(document.getElementById("expense-chart"), {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: 'Expenses',
        data: [500, 600, 700, 800, 900, 1000]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });