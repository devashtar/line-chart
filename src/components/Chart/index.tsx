import React from 'react'
import { Line } from 'react-chartjs-2'

import { ITrack } from '../../types'

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
        position: 'top',
        legend: {
            display: false,
            position: 'bottom' as const,
            text: '',
        },
        title: {
            display: true,
            position: 'bottom' as const,
            text: '',
        },
        interaction: {
            mode: 'index',
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

interface IProps {
    preparedData: Array<ITrack>
}

export const Chart: React.FC<IProps> = ({ preparedData }) => {
    const data = {
        labels: preparedData.map((item) =>
            new Date(item.year).toLocaleString()
        ),
        datasets: [
            {
                label: 'truck',
                data: preparedData.map((item) => ({
                    id: item.id,
                    value: item.sales,
                })),
                fill: false,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                pointStyle: 'circle',
                pointRadius: 5,
            },
        ],
    }

    return <Line options={options} data={data} />
}
