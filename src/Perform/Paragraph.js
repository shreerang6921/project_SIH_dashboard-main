import React from 'react'
import { useTechniqueContext } from '../contexts/TechniqueContextProvider';

export default function Paragraph({data}) {

  
     return (
      <div className=' border-2 border-slate-300 sm:p-5 p-1 rounded-md text-justify bg-[#fcfcf1] text-lg sm:text-base'>{data}
          </div>
    )
 
}
