import styled from 'styled-components'

const height = '40px'

export const BlockWrapper = styled.div`
    background-color: #fefefe;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    height: ${height};
    border-radius: 4px;

    & > label {
        display: block;
        padding: 10px;
        padding-right: 32px;

        width: 176px;
        height: ${height};

        background: transparent top 50% right 10px / 24px no-repeat
            url(images/download-file.png);

        text-overflow: ellipsis;
        color: #333333;
        font-size: 16px;
        line-height: 18px;

        border: 1px solid orange;
        border-right: none;
        border-radius: 4px 0px 0px 4px;

        cursor: pointer;

        &:hover {
            box-shadow: 0px 0px 4px 1px rgba(251, 137, 44, 0.3);
        }
    }
`

export const Span = styled.div`
    padding: 10px;
    width: 140px;
    height: ${height};

    text-overflow: ellipsis;
    color: #333333;
    font-size: 16px;
    line-height: 18px;

    border: 1px solid orange;
    border-radius: 0px 4px 4px 0px;

    overflow: hidden;
`
