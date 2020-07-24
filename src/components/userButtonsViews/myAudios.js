import React, {useState} from 'react'
import {AudioCard} from '../audioCard'

export const MyAudios = () => {
    const [myPosts, setMyPosts] = useState([
        {
            src: '',
            img: '',
            description: '',
            claps: '',
            comments: '',
        }
    ])
    return(
        <div>
            <AudioCard />
        </div>
    )
}