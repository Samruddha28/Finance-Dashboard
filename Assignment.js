const lineCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue ($)",
      data: [12000, 19000, 15000, 22000, 30000, 25000],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59,130,246,0.2)",
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true } } 
  }
});

const doughnutCtx = document.getElementById("doughnutChart").getContext("2d");
new Chart(doughnutCtx, {
  type: "doughnut",
  data: {
    labels: ["Stocks", "Crypto", "Real Estate", "Cash"],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ["#10b981", "#f59e0b", "#3b82f6", "#ef4444"]
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "bottom" } }
  }
});
