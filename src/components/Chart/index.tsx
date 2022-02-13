import React from 'react'
import { Line } from 'react-chartjs-2'
import { options } from './options'
import { ITrack } from '../../types'

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
