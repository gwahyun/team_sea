import { Link } from 'react-router-dom';
import mainArt from './assets/1.jpg';

export default function GameMain (){

    return(<Link to={"/main"} className='flex justify-center items-center'>
        <img src={mainArt}/>
        </Link>)
}