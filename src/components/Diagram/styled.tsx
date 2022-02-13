import styled from 'styled-components'

const fullMode = 'images/full-screen.svg'
const defaultMode = 'images/default-screen.svg'
const settings = 'images/settings.svg'
const upload = 'images/upload.svg'

export const Diagram = styled.div<{ screenMode: boolean }>`
    position: ${(props) => (props.screenMode ? 'absolute' : 'relative')};
    background-color: #fefefe;

    margin: 0px auto;
    margin-top: ${(props) => (props.screenMode ? '0px' : '40px')};

    min-width: 320px;
    min-height: 320px;
    max-width: 100%;
    max-height: 100vh;
    width: ${(props) => (props.screenMode ? '100%' : '60%')};
    height: ${(props) => (props.screenMode ? '100vh' : 'auto')};

    top: ${(props) => (props.screenMode ? '0px' : 'auto')};
    left: ${(props) => (props.screenMode ? '0px' : 'auto')};

    text-align: center;
    color: #888888;
    font-size: 24px;
    line-height: 80px;

    border: 2px solid orange;

    z-index: 10000;

    &:hover > .menu {
        display: flex;
    }
`

export const InputWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100000;
`

export const Cancel = styled.div`
    margin-top: 40px;
    background-color: #d84031;
    padding: 10px 28px;
    border-radius: 6px;

    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;

    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    }

    cursor: pointer;
`

export const Reset = styled.div`
    margin-top: 20px;
    background-color: #317fd8;
    padding: 10px 28px;
    border-radius: 6px;

    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;

    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    }

    cursor: pointer;
`

export const MenuWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;

    display: none;
    justify-content: space-between;
    align-items: center;
`

export const SwitchModeScreen = styled.div<{ screenMode: boolean }>`
    margin-left: 20px;
    background: transparent center / 28px
        url(${(props) => (props.screenMode ? fullMode : defaultMode)}) no-repeat;

    width: 28px;
    height: 28px;

    text-align: center;
    color: #333333;

    border-radius: 3px;

    cursor: pointer;

    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);

    &:hover {
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    }
`

export const Settings = styled.div`
    margin-left: 20px;
    background: transparent center / 28px url(${settings}) no-repeat;

    width: 28px;
    height: 28px;

    text-align: center;
    color: #333333;

    border-radius: 3px;

    cursor: pointer;

    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);

    &:hover {
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    }
`

export const Upload = styled.div`
    background: transparent center / 28px url(${upload}) no-repeat;

    width: 28px;
    height: 28px;

    text-align: center;
    color: #333333;

    border-radius: 3px;

    cursor: pointer;

    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);

    &:hover {
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    }
`
