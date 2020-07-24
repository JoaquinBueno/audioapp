import React, {useState} from 'react'
import {NewDiscBtn} from '../components/newDiscussionBtn'
import {RecordBackground} from '../components/recordBackground'
import {GetAudio} from '../components/getAudio'
import {AudioCard} from '../components/audioCard'


export const Home =()=> {
    const [bgOpen, setBgOpen] = useState({
        backdropIsOpen: false
    })
    const [blobs, setBlobs] = useState([])

    const [render, setRender] = useState(false)
    

    const wannaRecord = () => {
        setBgOpen({
            backdropIsOpen: !bgOpen.backdropIsOpen
        })
    }

    const backdropHandler = () => {
        setBgOpen({
            backdropIsOpen: false
        })
    }

    const getBlob = (blob) => {
        setBlobs([blob])
        console.log(blobs)
    }

    const changeRender = () => {
        console.log(render)
        setRender(!render)
        console.log(render)
    }

    let backdrop;

    if (bgOpen.backdropIsOpen) {
        backdrop = <RecordBackground clickHandler={backdropHandler}/>
    }

    return(
        <>
            
            <NewDiscBtn click={wannaRecord} render={changeRender}/>
            {
                (render) ? 
                <GetAudio show={bgOpen.backdropIsOpen} getBlob={getBlob} click={backdropHandler} />
                : <div></div>
            }
            {backdrop}
            <AudioCard/>
        </>
    )
} 