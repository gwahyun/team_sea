import mainArt from './assets/14_cropped.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';;
import q from './assets/14q.png';
export default function Question5 (){

    return(
    <div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
  <Link to={'/14'} className="absolute">
  <img src={q}/>
  </Link>
    </div>)
}