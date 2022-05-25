import React from 'react';
import {useEffect} from "react";

const Timer = ({timer,end,setTimer}) => {
 
  

   useEffect(()=>{
     
    const id= setInterval(()=>{
        setTimer((watchs)=>Number(watchs+1))
    },1000)
    if(timer===end){
        clearInterval(id);
        
    }
   return ()=>{
       clearInterval(id)
   }
   },[end,setTimer,timer])

  return (
    <div>
        <h1>Timer - End Time:{end}</h1>
        <h1>{timer}</h1>
        {timer===end ? <h1>Timer stopped !!!</h1>: <h5>Timer running....</h5>}
    </div>
  )
}

export default Timer
