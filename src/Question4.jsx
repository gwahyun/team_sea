import mainArt from './assets/13_cropped.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';;
import q from './assets/13q.png';
export default function Question3 (){

    return(
    <div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
    <img className="absolute" src={q}/>
  <Link to={'/12'} >
  <div className='absolute bottom-0 right-[25%] w-[50%] h-[40%] opacity-0'>_</div>
  </Link>
    </div>)
}