$(function(){
    'use strict';
  
var ctx = document.getElementById('Bar1').getContext('2d');
new Chart(ctx, {
type: 'bar',
data: {
labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
datasets: [{
label: '# of Votes',
data: [0, 22, 39, 50, 30, 25, 0],
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
