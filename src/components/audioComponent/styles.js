import styled from 'styled-components'
import {FaPlay, FaStop, FaVolumeUp, FaVolumeMute} from 'react-icons/fa'


export const ACCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Glow = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);

    &:before, &:after{
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        box-shadow: 15px 15px 20px rgba(0,0,0,0.3);
        -webkit-background-size: 400% 400%;
        -moz-background-size: 400%;
        -o-background-size: 400%;
        background-size: 400%;
        max-width: -webkit-calc(200px + 4px);
        max-width: -moz-calc(200px + 4px);
        max-width: calc(200px + 4px);
        max-height: -webkit-calc(200px + 4px);
        max-height: -moz-calc(200px + 4px);
        max-height: calc(200px + 4px);
        width: -webkit-calc(200px + 4px);
        width: -moz-calc(200px + 4px);
        width: calc(200px + 4px);
        height: -webkit-calc(200px + 4px);
        height: -moz-calc(200px + 4px);
        height: calc(200px + 4px);
        z-index: -1;
        -webkit-animation: animate 20s linear infinite;
        -moz-animation: animate 20s linear infinite;
        -o-animation: animate 20s linear infinite;
        animation: animate 20s linear infinite;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    } 

    &:after{
        -webkit-filter: blur(20px);
         filter: blur(20px);
         transform: scale(1.05);
    }

`
export const ACImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    
`
export const FaPlayStyled = styled(FaPlay)`
    color: #ffffff;
`

export const ControlsC = styled.div`
    position: absolute;
    bottom: 25px;
    left: 75px;
`
export const FaVolumeMuted = styled(FaVolumeMute)`
    color: #000000;
    margin-right: 20px;
`
export const FaVolumeUped = styled(FaVolumeUp)`
    color: #000000;
    margin-right: 20px;
`

export const Range = styled.input`
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 5px;
    width: 100%;
    vertical-align: middle;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: #232323;
    outline: none;

    &:-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: 1px solid #000000;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #ffffff;
    }
`

export const RangeSeeker = styled.input`
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 5px;
    width: 60%;
    vertical-align: middle;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: #232323;
    outline: none;
    display: block;

    &:-webkit-slider-thumb{
        -webkit-appearance: none;
        /* width: 20px; */
        height: 20px;
        width:100%;
        border: 1px solid #000000;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #ffffff;
    }
`

export const ControlesP = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ComponentContainer = styled.div`
    width: 100%;
`