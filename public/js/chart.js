const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['pessoa1', 'pessoa2', 'pessoa3', 'pessoa4', 'pessoa5'],
    datasets: [
      {
        label: 'Tipos de atendimentos',
        data: [10, 20, 30, 40, 50],
        backgroundColor: [
          'rgba(155, 20, 125, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(82, 34, 118, 1)',
          'rgba(104, 66, 194, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(155, 20, 125, 1)',
        ],
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
});

const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    datasets: [
      {
        label: 'Quantidade de atendimentos',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: [
          'rgba(155, 20, 125, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(82, 34, 118, 1)',
          'rgba(104, 66, 194, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(155, 20, 125, 1)',
        ],
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
});

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: [
      'Sem acesso',
      'LOS',
      'Troca de senha',
      'Mudança de endereço',
      'Envio de boleto',
    ],
    datasets: [
      {
        label: 'Tipos de atendimentos',
        data: [1000, 20, 300, 403, 5000],
        backgroundColor: [
          'rgba(155, 20, 125, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(82, 34, 118, 1)',
          'rgba(104, 66, 194, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(155, 20, 125, 1)',
        ],
      },
    ],
  },
});

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: [
      'Sem acesso',
      'LOS',
      'Troca de senha',
      'Mudança de endereço',
      'Envio de boleto',
    ],
    datasets: [
      {
        label: 'Tipos de atendimentos',
        data: [1000, 20, 300, 403, 5000],
        backgroundColor: [
          'rgba(155, 20, 125, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(82, 34, 118, 1)',
          'rgba(104, 66, 194, 1)',
          'rgba(249, 168, 38, 1)',
          'rgba(155, 20, 125, 1)',
        ],
      },
    ],
  },
});
