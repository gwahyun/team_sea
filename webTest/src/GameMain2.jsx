import { Link } from 'react-router-dom';
import mainArt from './assets/2.gif';

export default function GameMain2 (){

    return(<Link to={'/start'} className='flex justify-center items-center'>
        <img src={mainArt}/>
        </Link>)
}