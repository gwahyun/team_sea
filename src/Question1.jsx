import mainArt from './assets/10.gif';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import human from './assets/10human.gif';
import q from './assets/10q.png';
export default function Question1 (){

    return(<div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
  <Link to={'/6'} className="absolute">
  <img src={q}/>
  </Link>
    </div>)
}