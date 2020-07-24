import React, {useState} from 'react'
import {Debate} from '../Discussions'
import {DLContainer} from './styled'

export const ListOfDisc =()=> {
    
    const [discussions, setDiscussions] = useState([
        {
            src: '/assets/AbolerRicos.jpg',
            premise: 'Premisa: Los ricos tienen la culpa de la pobreza',
            to: '/discussions/ricos',
            id: 0
        },
        {
            src: '/assets/BLMDebate.jpg',
            premise: 'Premisa: Actualmente, existe racismo institucional en el mundo',
            to: '/discussions/racismo',
            id: 1
        },
        {
            src: '/assets/Feminismo.jpg',
            premise: 'Premisa: El feminismo moderno no ayuda a las mujeres',
            to: '/discussions/feminismo',
            id: 2
        }
    ])
    
    return (
        <DLContainer>
            {
                discussions.map(discussion => 
                    <Debate {...discussion} key={discussion.id}/>)
            }
        </DLContainer>
    )
}