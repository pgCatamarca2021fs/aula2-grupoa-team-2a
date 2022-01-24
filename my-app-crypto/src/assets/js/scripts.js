new Chart("graficoBitcoin", {
  type: "line",
  data: {
    labels: ["Sáb","Dom","Lun","Mar","Hoy"],
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: [4651134,4463134,4321134,4351134,4481134]
    }]
  },
  options: {
    responsive: true,
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 4000000, max:5000000}}],
    }
  }
});


new Chart("graficoEthereum", {
  type: "line",
  data: {
    labels: ["Sáb","Dom","Lun","Mar","Hoy"],
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: [684310,697856,693589,680345,704896]
    }]
  },
  options: {
    responsive: true,
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 600000, max:720000}}],
    }
  }
});

