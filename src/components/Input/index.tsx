import React, { useState } from 'react'
import * as Styled from './styled'

interface IProps {
    setData: React.Dispatch<any>
    setDisplayInput: React.Dispatch<any>
    filename: string
    setFilename: React.Dispatch<any>
}

export const Input: React.FC<IProps> = ({
    setData,
    setDisplayInput,
    filename,
    setFilename,
}) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList

        const fileReader = new FileReader()
        fileReader.readAsText(files[0], 'UTF-8')
        fileReader.onload = (e: ProgressEvent<any>) => {
            try {
                const data = JSON.parse(e.target.result)
                setDisplayInput(false)
                setData(data)
                setFilename(files[0].name)
            } catch (err) {
                setDisplayInput(true)
                setData(null)
                setFilename('')
                if (err instanceof Error) {
                    alert('Incorrect JSON format!')
                    console.error(err)
                }
            }
        }
    }

    return (
        <Styled.BlockWrapper>
            <input
                type='file'
                id='diagram'
                onChange={onChange}
                accept='application/JSON'
                multiple={false}
                hidden
            />
            <label htmlFor='diagram' title='click to choose your json file'>
                Choose file
            </label>
            <Styled.Span title='current filename'>{filename}</Styled.Span>
        </Styled.BlockWrapper>
    )
}
