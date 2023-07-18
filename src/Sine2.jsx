import mainArt from './assets/7.gif';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import yesButton from './assets/yesButton.png';

export default function Sine2 (){
    const lineText1 ={
        kor: '모든 인간은 신성을 가지고 있습니다.',
        eng: 'Everyone has their own divinity.',
    }
    const lineText2 ={
        kor: '이 여정을 통해서 당신은 당신 안의 신을 만날 수 있습니다. ',
        eng: 'Through this journey, you can meet god in side of you.',
    }
    const lineText3 ={
        kor: '신이 되는 여정을 떠나겠습니까? ',
        eng: 'Are you ready to have a journey to become a god?',
    }

    const [text, setText] = useState(lineText1);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{

        setTimeout(()=>{
            setText(lineText2)
        },2000)

        setTimeout(()=>{
            setText(lineText3)
        },4000)

        setTimeout(()=>{
            setShow(true)
        },7000)
    },[])
  
    return(<div className='flex justify-center'>
    <img className='relative' src={mainArt}/>
    {show === false ? 
    <div className='absolute bottom-[30%] text-center '>
        <div className='flex justify-center flex-col'> 
        <h1 className='font-bold text-xl text-white'>{text.kor}</h1>
    <h2 className='text-white '>{text.eng}</h2>
    </div>
    </div>
    :
    <button className='absolute bottom-[25%] flex justify-center' onClick={()=> navigate('/3')}>
    <img src={yesButton} className="w-[50%] h-[50%]"/>
    </button>
    }
   
    </div>)
}