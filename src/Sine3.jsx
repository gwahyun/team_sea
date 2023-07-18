import mainArt from './assets/9.gif';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Sine3 (){

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/4')
        },2000)
    },[])
  
    return(<div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
   
    </div>)
}