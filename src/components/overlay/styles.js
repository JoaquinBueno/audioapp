import styled from 'styled-components'

export const OverlayContainer = styled.div`
    position: absolute;
    bottom: 1%;
    left: 0;
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    background: #151E21;
    opacity: 0.8;

    &:hover {
        background: white;
        color: #151E21
    }
`
export const P = styled.p`
    color: white;
    text-align: center;
    font-weight: 700;
    &:hover {
        color: #151E21;
    }

`