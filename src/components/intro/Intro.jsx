import './intro.scss';
import {init} from'ityped';
import { useEffect,useRef } from 'react';

export default function Intro() {
 const textRef = useRef();
  useEffect(()=>{
   init (textRef.current,{
     showCursor: true,
     backDelay:1500,
     backSpeed:60,
     strings:["Freelance","Frontend", "Backend","Fullstack","Designer"],
   })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/foto2.png" alt="" />
        </div>
      </div>
      <div className="rigth">
        <div className="wrapper">
          <strong className='l1'>Hi there, I'm</strong>
          <strong className='l2'>Christopher Feilstrecker da Silva</strong>
          <strong className='l3'>Developer <span ref={textRef}></span></strong>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow-botton.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

