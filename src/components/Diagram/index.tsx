import React, { useEffect, useState } from 'react'
import * as Styled from './styled'
import { Chart } from '../Chart'
import { RangeDate } from '../RangeDate'
import { Input } from '../Input'

export const Diagram: React.FC<{}> = () => {
    const [filename, setFilename] = useState('')
    const [data, setData] = useState<any>(null)
    const [preparedData, setPreparedData] = useState<any>(null)

    const [screenMode, setScreenMode] = useState<boolean>(false) // true = full screen
    const [displayRange, setDisplayRange] = useState<boolean>(false)
    const [displayInput, setDisplayInput] = useState<boolean>(true)

    useEffect(() => {
        setPreparedData(data)
    }, [data])

    const resetDiagram = () => {
        setData(null)
        setFilename('')
    }

    return (
        <Styled.Diagram screenMode={screenMode}>
            {displayInput && (
                <Styled.InputWrapper>
                    <Input
                        filename={filename}
                        setFilename={setFilename}
                        setData={setData}
                        setDisplayInput={setDisplayInput}
                    />

                    <Styled.Cancel onClick={() => setDisplayInput((s) => !s)}>
                        cancel
                    </Styled.Cancel>

                    <Styled.Reset onClick={() => resetDiagram()}>
                        reset
                    </Styled.Reset>
                </Styled.InputWrapper>
            )}

            {preparedData !== null ? (
                <Chart preparedData={preparedData} />
            ) : (
                'Upload file'
            )}

            <Styled.MenuWrapper className='menu'>
                {data !== null && displayRange && (
                    <RangeDate data={data} setPreparedData={setPreparedData} />
                )}

                <Styled.Upload
                    title='upload file'
                    onClick={() =>
                        setDisplayInput((s) => (data === null ? true : !s))
                    }
                />

                <Styled.Settings
                    title='settings'
                    onClick={() => setDisplayRange((s) => !s)}
                />

                <Styled.SwitchModeScreen
                    title='resize screen'
                    screenMode={screenMode}
                    onClick={() => setScreenMode((s) => !s)}
                />
            </Styled.MenuWrapper>
        </Styled.Diagram>
    )
}
