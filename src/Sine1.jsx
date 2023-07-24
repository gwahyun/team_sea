import mainArt from './assets/6.gif';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Sine1 (){

    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=> navigate('/2'), 5000);
    },[])
    return(<div className='flex justify-center'>
        <img className='relative' src={mainArt}/>
        <div className='absolute bottom-[8%] text-center'>
        <h1 className='font-bold text-xl text-white'>신</h1>
        <h2 className='text-white '>God</h2>
        </div>
        </div>)
}