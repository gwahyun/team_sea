import mainArt from './assets/12_cropped.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import human from './assets/walk.gif';

export default function Move3 (){

    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=> navigate('/9'), 9000);
    },[])
    
    return(<div className='flex flex-col'>
    <img className='relative' src={mainArt}/>
<img className='' src={human}/>
    </div>)
}