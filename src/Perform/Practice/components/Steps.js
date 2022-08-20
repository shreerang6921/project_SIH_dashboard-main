import React from 'react';
import { useTechniqueContext } from '../../../contexts/TechniqueContextProvider';
import ControlPara from "../../ControlPara";
import Button from './Button';

export default function Steps({id,data}) {
  
  const {putStepNo} = useTechniqueContext();

  const handleTest =()=>{
    putStepNo(id)
  };

  const hello=() =>{console.log("hi gujesh")}

 
  
  return (
    <div className='border-1 rounded-md bg-slate-200 h-fit p-5'>
        <h1 className='pb-5 font-bold text-3xl'> Step {id}</h1>
        <div className=''>
        </div>
      {data}
        <ControlPara onStop={hello}/>
        <Button name="Take Test" func={handleTest} link={`/test/${id}`} />
    </div>
  )
}
