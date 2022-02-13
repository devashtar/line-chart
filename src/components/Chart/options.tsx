import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'bottom' as const,
        },
        interaction: {
            mode: 'index',
        },
        title: {
            display: true,
            position: 'bottom',
            text: '',
        },
        tooltip: {
            usePointStyle: true,
            callbacks: {
                beforeBody: function (itemTooltip: any) {
                    return `weight: ${itemTooltip[0].formattedValue}`
                },
                label: function (itemTooltip: any) {
                    return `id: ${itemTooltip.raw.id}`
                },
            },
        },
    },
    parsing: {
        xAxisKey: 'id',
        yAxisKey: 'value',
    },
}
