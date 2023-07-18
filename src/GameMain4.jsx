import mainArt from './assets/5.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function GameMain4 (){

    const navigate = useNavigate();

    useEffect(()=>{
       setTimeout(()=>{
        navigate('/1');
       }, 3000)
    },[])
    return(<div className='flex justify-center items-center'>
        <img src={mainArt}/>
        </div>)
}