import mainArt from './assets/13_cropped.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';;
import q from './assets/13q.png';
export default function Question3 (){

    return(
    <div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
  <Link to={'/12'} className="absolute">
  <img src={q}/>
  </Link>
    </div>)
}