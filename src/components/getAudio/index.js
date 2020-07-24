import React, {useState} from 'react'
import {FaMicrophoneSlash, FaMicrophone, FaWindowClose} from 'react-icons/fa'
import {AudioContainer, Audio, CompContainer, AnotherContainer, Div32, P} from './styles'
import {AiOutlineSend} from 'react-icons/ai'

export const GetAudio = ({show, click, getBlob}) => {

    const [isRecording, setIsRecording] = useState(false)
    const [blobURL, setBlobURL] = useState()
    const [streamObj, setStreamObj] = useState({})

    let showClass = {display: 'none'}

    if (show) {
        showClass = {display: 'contents'}
    }

    const onStartRecordHandler = (ev) => {
        
        setIsRecording(!isRecording)
        
        navigator.mediaDevices.getUserMedia({audio: true})
        .then(mediaStreamObj => {
            const audio = document.querySelector('audio')
            setStreamObj(mediaStreamObj)
            if ("srcObject" in audio) {
                audio.srcObject = mediaStreamObj
            } else {
                audio.src = window.URL.createObjectURL(mediaStreamObj)
            }
            const mediaRecorder = new MediaRecorder(mediaStreamObj)

            let audioSave = document.getElementById('audio2')
            let chunks = []

            mediaRecorder.start()

            const stop = document.getElementById('btnStop')

            if (!isRecording){
            stop.addEventListener('click', ev => {
                mediaRecorder.stop()

            })}
            mediaRecorder.onstop = (ev) => {
                let blob = new Blob(chunks, {'type': 'audio/mp3'})
                chunks = []
                let audioURL = window.URL.createObjectURL(blob)
                audioSave.src = audioURL
                
                getBlob(audioURL)

            }
            
            mediaRecorder.ondataavailable = ev => {
                chunks.push(ev.data)
            }


        }).catch(err => {console.log(err)
            setIsRecording(false)
        })
        
    }

    const onStop = () => {
        setIsRecording(!isRecording)
        const styleAudio = document.getElementById('audio2')
        styleAudio.style ={display: 'flex'}
    }

    

   return (
       <CompContainer className={showClass}>
           <div style={showClass}>
               <AnotherContainer>
                <FaWindowClose size='50px' onClick={click}/>
               </AnotherContainer>
            <P>Click to start recording</P>
            <AudioContainer>
                
                {
                        (!isRecording) ?
                        <FaMicrophone size='105px' 
                        onClick={onStartRecordHandler}
                        id='btnStart'/>
                        :
                        <FaMicrophoneSlash size='105px' 
                        onClick={onStop}
                        id='btnStop'/>

            }
            </AudioContainer>
                <div>
                    <audio controls style={{display: 'none'}}></audio>
                    <Audio id='audio2' controls style={{display: 'none'}} ></Audio>
                    
                </div>
                
                <P>Double Click to send</P>
                <Div32>
                <AiOutlineSend size='32px' onClick={() => {
                    getBlob(blobURL)
                    click()
                    }} onDoubleClick={click}/>
                </Div32>
            </div>
        </CompContainer>
    )
}