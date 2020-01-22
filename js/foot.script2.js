$(function(){
    'use strict';
    
var ctx = document.getElementById('chartBar2').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: '# of Votes',
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: '#27AAC8'
    }]
  },
  options: {
    legend: {
      display: false,
        labels: {
          display: false
        }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          fontSize: 10,
          max: 80
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero:true,
          fontSize: 11
        }
      }]
    }
  }
});
});