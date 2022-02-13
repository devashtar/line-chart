import React from 'react'
import * as Styled from './styled'

interface IProps {
    children: React.ReactNode[] | React.ReactNode
}

export const Container: React.FC<IProps> = ({ children }) => {
    return <Styled.Container>{children}</Styled.Container>
}
