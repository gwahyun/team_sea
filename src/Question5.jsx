import mainArt from './assets/14_cropped.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';;
import q from './assets/14q.png';
export default function Question5 (){

    return(
    <div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
    <img className="absolute" src={q}/>
  <Link to={'/14'} >
  <div className='absolute bottom-0 right-[15%] w-[70%] h-[38%] opacity-0'>_</div>
  </Link>
    </div>)
}