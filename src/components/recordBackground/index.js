import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    z-index: 100;
`

export const RecordBackground = () => {
    return <Backdrop></Backdrop>
}