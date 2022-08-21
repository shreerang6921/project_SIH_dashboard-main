import React from 'react'
import PeriPractice from './module_techniques/peripheral_vision/PeriPractice'
import { useTechniqueContext } from '../contexts/TechniqueContextProvider'
export default function Practical() {
const {currTech} = useTechniqueContext()
const tech = currTech
if(currTech=="peripheral"){
    return (
       
        <PeriPractice/>
   
  )
}
else{
  return(
    <div>
        hi
    </div>
  )
}

}
