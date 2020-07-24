import React from 'react'
import {Link} from '@reach/router'
import { Overlay} from '../overlay'
import {SectionImage, Div} from './styles'


export const Section =({to = '/', src, title})=> {
    return (
        <Div>
            <Link to={to}>
            <SectionImage src={src} alt=''/>
            <Overlay premisa={title}/>
            </Link>
        </Div>
    )
}