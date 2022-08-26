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

 console.log(data)
  
  return (
    <div className='border-1 rounded-md bg-slate-200 p-5 h-fit'>
        <h1 className='pb-5 font-bold text-3xl'> Step {id}</h1>
        <div className=''>
        </div>
        
      {data?.map((inst,idx)=>{
        return <p key= {idx}>{inst}<br/></p>
      })}
        <ControlPara onStop={hello}/>
        <Button name="Take Test" func={handleTest} link={`/test/${id}`} />
    </div>
  )
}
