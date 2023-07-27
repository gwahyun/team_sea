import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import mainArt from './assets/2.gif';


export default function GameMain2 (){
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=> navigate('/start'), 2000);
    },[])
    return(<div className='flex justify-center items-center'>
        <img src={mainArt}/>
        </div>)
}