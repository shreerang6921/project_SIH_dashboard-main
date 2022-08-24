import React from 'react'
import { useTechniqueContext } from '../contexts/TechniqueContextProvider';

export default function Paragraph({data}) {

  
     return (
      <div className=' border-2 border-slate-300 sm:p-5 p-3 rounded-md text-justify bg-amber-100 text-sm sm:text-base'>{data}
          </div>
    )
 
}
