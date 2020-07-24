import React, {useState} from 'react'
import {MyAudios} from './myAudios'


export const UserViews = () => {

    const [views, setViews] = useState(1)

    return(
        <div>
            <MyAudios/>
        </div>
    )
}