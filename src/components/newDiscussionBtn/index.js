import React from 'react'
import {FaMicrophone} from 'react-icons/fa'
import {DivAddDisc, Div} from './styles'

export const NewDiscBtn =({click, render})=> {
    

    return (
        <DivAddDisc>
            <Div onClick={() => {click(); render()}}><FaMicrophone size='24px'/></Div>  
        </DivAddDisc>
    )
}