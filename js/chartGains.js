var ctx = document.getElementById('myChart').getContext('2d')
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [{
        label: 'Clientes',
        backgroundColor: 'rgb(255, 99, 132,.2)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
},

// Configuration options go here
options: {}
})

var ctx = document.getElementById('mini-chart-1').getContext('2d')
// ctx.height = 200
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    // labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [{
        // label: 'Clientes',
        backgroundColor: 'rgb(255, 99, 132,.5)',
        borderColor: 'rgb(255, 99, 132)',
        // data: [0, 10, 5, 2, 20, 30, 45]
    }]
},

// Configuration options go here
options: {}
})


new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
    //   labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["rgb(0, 204, 204) ", "#007bff","rgb(241, 0, 117)","#673ab7",],
          data: [2478,5267,734,1700]
        }
      ]
    },
    options: {
      title: {
        display: true,
        // text: 'Predicted world population (millions) in 2050'
      }
    }
})


// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Sales Report", "Revenue", "Total profit"],
      datasets: [
        {
          label: "vendas",
          backgroundColor: ["rgb(241, 0, 117)", "#007bff","#ffc107"],
          data: [150,250,300,500,1000]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Vendas'
      }
    }
})