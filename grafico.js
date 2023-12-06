const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [0, 1, 2, 3, 4, 5],
      datasets: [{
        label: 'Velocidad en función de tiempo',
        data: [0, 2, 4, 6, 8, 0],
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
  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: [0, 1, 2, 3, 4, 5],
      datasets: [{
        label: 'Aceleración en función de tiempo',
        data: [0, 2, 2, 2, 2, 0],
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
  const ctx3 = document.getElementById('myChart3');

  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: [0, 1, 2, 3, 4, 5],
      datasets: [{
        label: 'Posición en función de tiempo',
        data: [0, 2, 6, 12, 18, 20],
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