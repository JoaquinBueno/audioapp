import React, {useState} from 'react'
import OMG from '../audio/ohmygod.mp3'

import {ACCont, Glow, ComponentContainer, FaVolumeUped,
    ACImage, RangeSeeker, FaVolumeMuted, ControlesP} from './styles'


export const AudioComponent = ({audioSrc, imagen, id}) => {
    const [muted, setMuted] = useState(false)
    const [vol, setVol] = useState(1)


    console.log(audioSrc)
    const song = new Audio(`${audioSrc}`)
    song.type = 'audio/mp3'
    // song.src = _audio

    const playPause =()=>{
        if (!song.paused){
            song.pause()
        } else {
            song.play()
        }
    }
    const stop = () => {
        song.pause()
        song.currentTime = 0
        document.getElementById('seek').value = 0
    }

    const mute = () => {
        if (muted){
            song.volume = vol
            setMuted(false)
            
        } else {
            song.volume = 0
            setMuted(true)
        }
    }

    // const setVolume = (volume) => {
    //     song.volume = volume
    //     setVol(volume)
    // }

    song.addEventListener('timeupdate', function(){
        let curtime = parseInt(song.currentTime,10)
        document.getElementById(id).max = song.duration;
        document.getElementById(id).value = curtime
    })

    const ButtonMuted = () => {
        if (muted){
            return( <FaVolumeMuted size='25px' onClick={mute}/>)
        }
        return <FaVolumeUped size='25px' onClick={mute}/>
    }

    return (
        <ComponentContainer>
            <ACCont>
                <Glow>
                    <ACImage src={imagen} onClick={playPause} alt=''/>
                    
                {/* <ControlsC class="playback_controls">
                        <FaPlayStyled onClick={playPause} size='25px'/>
                        <FaStopS size='25px' onClick={stop}/>
                    </ControlsC> */}
                    

                    
                </Glow>
            </ACCont>
            <ControlesP>
                    {ButtonMuted()}
                    <RangeSeeker type="range" id={id} defaultValue="0" max=""/>
            </ControlesP>
        </ComponentContainer>
    )
}