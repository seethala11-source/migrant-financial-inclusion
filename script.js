// Year in footer
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
// Charts (placeholder data – replace with your real numbers)
document.addEventListener("DOMContentLoaded", () => {
  const accountsCtx = document.getElementById("chartAccounts");
  const remittanceCtx = document.getElementById("chartRemittance");
  if (accountsCtx) {
    new Chart(accountsCtx, {
      type: "bar",
      data: {
        labels: ["General Population", "Migrant Workers"],
        datasets: [{
          label: "Account Ownership (%)",
          data: [78, 56], // <-- Replace with your data
          backgroundColor: ["#0d6efd", "#20c997"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { mode: "index", intersect: false }
        },
        scales: {
          y: { beginAtZero: true, max: 100, title: { display: true, text: "%" } }
        }
      }
    });
  }
  if (remittanceCtx) {
    new Chart(remittanceCtx, {
      type: "line",
      data: {
        labels: ["2018","2019","2020","2021","2022","2023","2024","2025"],
        datasets: [{
          label: "Average Remittance Cost (%)",
          data: [7.1, 6.9, 6.7, 6.4, 6.2, 6.0, 5.7, 5.5], // <-- Replace
          borderColor: "#0d6efd",
          backgroundColor: "rgba(13,110,253,.15)",
          tension: 0.25,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { mode: "index", intersect: false }
        },
        scales: {
          y: { beginAtZero: false, title: { display: true, text: "%" } }
        }
      }
    });
  }
}); 