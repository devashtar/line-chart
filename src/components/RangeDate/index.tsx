import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import React, { useState } from 'react'
import * as Styled from './styled'
import { ITrack } from '../../types'

interface IProps {
    data: Array<ITrack>
    setPreparedData: React.Dispatch<(s: Array<ITrack>) => Array<ITrack>>
}

interface IRange {
    min: number
    max: number
}

export const RangeDate: React.FC<IProps> = ({ data, setPreparedData }) => {
    const [range, setRange] = useState({
        value: { min: 0, max: data.length - 1 },
    })

    const onChange = (value: IRange) => {
        setRange({ value })
        setPreparedData(() =>
            data.filter(
                (_, idx) => idx >= range.value.min && idx <= range.value.max
            )
        )
    }

    return (
        <Styled.WrapperBlock title='range'>
            <InputRange
                step={1}
                minValue={0}
                maxValue={data.length - 1}
                value={range.value}
                onChange={(value) => onChange(value as IRange)}
            />
        </Styled.WrapperBlock>
    )
}
