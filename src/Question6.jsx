import mainArt from './assets/15_cropped.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';;
import q from './assets/15q.png';
export default function Question6 (){

    return(
    <div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
  <Link to={'/result'} className="absolute">
  <img src={q}/>
  </Link>
    </div>)
}