const grafico_linha = document.querySelector('#mychart_line')
const labels_line = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const vermelho = '#FF6384'
const azul = '#36A2EB'

const data = {
    labels: labels_line,
    datasets: [
        {
            label: 'Temperatura',
            data: [30, 29, 28, 25, 22, 23],
            fill: false,
            borderColor: vermelho,
            backgroundColor: vermelho,
            tension: 0.2
        },
        {
            label: 'Umidade',
            data: [80, 82, 80, 85, 80, 83],
            fill: false,
            borderColor: azul,
            backgroundColor: azul,
            tension: 0.2

        }
    ]
}

const config = {
    type: 'line',
    data: data
}

const myChart_temperatura = new Chart(
    grafico_linha,
    config,
)

const chart_bar = document.querySelector('#mychart_bar')
const labels_bar = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']

const data_bar = {
    labels: labels_bar,
    datasets: [
        {
            label: 'Temperatura Média',
            data: [22, 24, 27, 23, 20, 18],
            fill: false,
            borderColor: vermelho,
            backgroundColor: vermelho,
            tension: 0.2
        },

        {
            label: 'Umidade Média',
            data: [90, 89, 93, 87, 88, 82],
            fill: false,
            borderColor: azul,
            backgroundColor: azul,
            tension: 0.2
        }
    ]
}

const config_bar = {
    type: 'bar',
    data: data_bar,
}

const myChart_bar = new Chart(
    chart_bar,
    config_bar,
)