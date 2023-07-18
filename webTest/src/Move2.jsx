import mainArt from './assets/11_cropped.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import human2 from './assets/walk2.gif';

export default function Move2 (){

    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=> navigate('/7'), 9000);
    },[])
    return(<div className='flex flex-col'>
    <img className='relative' src={mainArt}/>
<img className='' src={human2}/>
    </div>)
}