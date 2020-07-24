import styled from 'styled-components'

export const AudioContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #1c2e4a;
    box-shadow: 3px 3px 3px rgba(0,0,0, 0.3);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    margin-top: 20px;
    transition: all 0.5s linear;
    &:hover, &:focus, &:active {
        box-shadow: 15px 15px 20px rgba( 0,0,0, 0.4);
        transform: scale(1.05);

    }

`

export const AnotherContainer = styled.div`
    z-index: 200;
    color: #1c2e4a;
    position: fixed;
    top: 15px;
    right: 15px;

`

export const Audio = styled.audio`
    transition: all 0.5s linear;
    box-shadow: 2px 2px 4px 0px #006773;
    border-radius: 25px;
    margin-top: 20px;

    &:hover, &:focus, &:active {
        box-shadow: 15px 15px 20px rgba( 0,0,0, 0.4);
        transform: scale(1.05);
        border: none;

    }
`

export const CompContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 200;
`

export const Div32 = styled.div`
    width: 45px;
    height: 45px;
    background: #1c2e4a;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

export const P = styled.p`
    font-size: 1.5em;
    font-weight: 700;
    color: white;
    padding-top: 55px;
`