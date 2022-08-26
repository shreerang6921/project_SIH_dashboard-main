import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useTechniqueContext } from '../../../contexts/TechniqueContextProvider'
import Paragraph from "../../../Perform/Paragraph";
import Steps from "../../../Perform/Practice/components/Steps";
import SkipPara from "./SkipPara";
import "./skipwords.css"

export default function Skipwords() {
  const {id} = useParams();
  const {getPracticePara,getStepInstructions,practicePara,stepInstructions,begin}=useTechniqueContext()
 

  useEffect(()=>{
    
    getStepInstructions(id)
  },[])

  console.log(stepInstructions)
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-10'>
      <Steps id={id} data={stepInstructions?.Instruction}/>
     
      <SkipPara/>   
      </div>
    
      
  
  )
}

