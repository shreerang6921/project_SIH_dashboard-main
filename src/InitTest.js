import React, { useEffect } from 'react'
import ControlPara from './Perform/ControlPara'
import Read from './Perform/Practice/components/Read'
import { useTechniqueContext } from './contexts/TechniqueContextProvider'
import Button from './Perform/Practice/components/Button';
import Paragraph from './Perform/Paragraph';

export default function InitTest() {
    const {techRoute,getInitTest,putInitVars,initData,init } = useTechniqueContext();
    useEffect(()=>{
      getInitTest()
    },[init])

   

  return (
    <div className='m-20'>
        <Paragraph data={initData.para}/>
        <ControlPara onStop={putInitVars}/>
        <Button name="Choose your technique" link={techRoute}/>
    </div>
  )
};