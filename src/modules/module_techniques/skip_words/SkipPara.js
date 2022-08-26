import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useTechniqueContext } from '../../../contexts/TechniqueContextProvider'

export default function SkipPara() {
    const {id} = useParams();
    const {getPracticePara,getStepInstructions,practicePara}=useTechniqueContext()
 

  useEffect(()=>{
    getPracticePara()
    getStepInstructions(id)
  },[])
  let arr = practicePara.split(" ")
  
    return (
        <div className="">

        <div className=' flex flex-wrap border-2 border-slate-300 sm:p-5 p-3 text-justify rounded-md bg-[#fcfcf1] text-lg sm:text-base'>
          
             
                {
                    arr.map((word,idx)=>{
                        return <div className={`${(idx+1)%3 === 0 ? "bg m-2": "m-2"}`}>{word}</div>
                    })
                }
            
            </div>
        </div>
      )
   
}
