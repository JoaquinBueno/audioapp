import React from 'react'
import {OverlayContainer, P} from './styles'

export const Overlay =({premisa})=> {
    return (
        <OverlayContainer>
            <P>{premisa}</P>
        </OverlayContainer>
    )
}