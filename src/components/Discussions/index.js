import React from 'react'
import {DebContainer, DebItem, Image, Link} from './styles'
import {Overlay} from '../overlay'

export const Debate = ({src, to='/', premise}) => {
    return(
        <DebContainer>
        <DebItem>
            <Link to={to}>
                <Image src={src} alt=''/>
                <Overlay premisa={premise}/>
            </Link>
        </DebItem>
        </DebContainer>
    )
}