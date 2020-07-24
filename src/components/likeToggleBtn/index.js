import React, {useState} from 'react'
import {Heart, HeartLiked} from '../commentComponent/styles'

export const LikeButton = () => {
    const [isLiked, setIsLiked] = useState(false)

    const clickHandler = () => {
        setIsLiked(!isLiked)
    }
    return(
        (isLiked) ? <HeartLiked size='16px' onClick={clickHandler}/>
        : <Heart size='16px' onClick={clickHandler}/>

    )
}