const grafico_linha = document.querySelector('#mychart')
    const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

    const data_temperatura = {
        labels: labels,
        datasets: [
            {
                label: 'Temperatura',
                data: [30, 29, 28, 25, 22, 23],
                fill: false,
                borderColor: '#cb0000',
                backgroundColor: '#cb0000',
                borderJoinStyle: 'bevel',
                tension: 0.2
            },
            {
                label: 'Umidade',
                data: [80, 82, 80, 85, 80, 83],
                fill: false,
                borderColor: '#0000ff',
                backgroundColor: '#0000ff',
                borderJoinStyle: 'bevel',
                tension: 0.2

            }
        ]
    }

    const config = {
        type: 'line',
        data: data_temperatura
    }

    const myChart_temperatura = new Chart(
        grafico_linha,
        config,
    )