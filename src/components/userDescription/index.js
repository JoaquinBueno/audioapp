import React from 'react'
import {UserImg, UserDescCont, PUser} from './styles'

export const DescriptionUser =()=> {
    return (
      <UserDescCont>
          <UserImg src='https://image.flaticon.com/icons/svg/172/172163.svg' alt=''/>
          <PUser><strong>Descripcion:</strong> Hi! I'm Joaquin Bueno and i'm a full Stack Developer, currently working on AudioBird.com, the platform where people can say what they want and create debates!</PUser>
      </UserDescCont>  
    )
}