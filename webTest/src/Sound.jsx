import { useEffect } from 'react'
import Opening from './assets/music/opening.mp3'
export default function Sound(){

    return(
        <audio src={Opening} autoPlay={true} loop='true' />
    )
}