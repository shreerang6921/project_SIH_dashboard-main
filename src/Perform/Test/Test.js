import React,{useEffect} from 'react'
import ControlPara from '../ControlPara'
import Read from '../Practice/components/Read'
import { useParams } from 'react-router-dom'
import Paragraph from '../Paragraph'
import { useTechniqueContext } from '../../contexts/TechniqueContextProvider'
import Button from '../Practice/components/Button'

export default function Test() {
  const {id} = useParams()

  const {getTest,postScore,testPara,putStepNo} = useTechniqueContext();
  useEffect(()=>{
    getTest()
  },[])

  const handleClick =(id) =>{
    putStepNo(id)
  }

  return (
    <div className='m-5 mt-20'>
        <Paragraph data={testPara.para}/>
        <ControlPara onStop={postScore}/>
        <Button name={"go to dashboard"} link="/" func={(id)=>{handleClick(id)}}/>
    </div>
  )

};
