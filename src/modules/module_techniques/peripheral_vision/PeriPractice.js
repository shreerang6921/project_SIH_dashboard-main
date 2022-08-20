/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTechniqueContext } from '../../../contexts/TechniqueContextProvider'
import Paragraph from '../../../Perform/Paragraph'
import Steps from '../../../Perform/Practice/components/Steps'

export default function PeriPractice() {
  const {id} = useParams()
  const {getPracticePara,getStepInstructions,practicePara,stepInstructions}=useTechniqueContext()
 


  useEffect(()=>{
    getPracticePara()
    getStepInstructions(id)
  },[])
  console.log(stepInstructions)
  console.log(practicePara)

     return (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-10'>
      <Steps id={id} data={stepInstructions.Instruction}/>
      <div className="relative">
        <div className={`absolute ${id == 1 ? "left-20" : "left-32"} border-4 border-l-0 border-dotted h-full border-r-purple-800 `}></div>
          <div className={`absolute ${id == 1 ? "right-20" : "right-32"} border-4 border-l-0 border-dotted h-full border-r-purple-800`}></div>
          <Paragraph data={practicePara}/>
      </div>
      </div>
    )
 
 
}
