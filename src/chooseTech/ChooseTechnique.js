import React from 'react';
import QualityCard from './QualityCard';
import "./techniques.css";
import Chunkword from './images/Chunkword.svg'
import Skipword from './images/Skipword.svg'
import Peripheral from './images/Peripheral.svg'

import {link} from 'react-router-dom';
import { useTechniqueContext } from '../contexts/TechniqueContextProvider';


export default function ChooseTechnique(){

  const {setCurrTech,putTechName} = useTechniqueContext()
  const handlePeri = ()=>{
    putTechName("peripheral")

  }
  const handleSkip = ()=>{
    putTechName("skipWords")

  }
  const handleChunk = ()=>{
    putTechName("wordChunk")

  }
  return (
    <>
      <div id="tech" className='TECH'>
           Explore Multiple Speed Reading Techniques
        </div>  
        <br></br>
          <div className='text1'>
            <QualityCard title="Peripheral Method" desc="lorem ipsum" images={Peripheral}  link="/peripheralInfo" func={handlePeri} /> 
            <QualityCard title="Skip Word Method" desc="lorem ipsum" images={Skipword} link="/skipWordsInfo" func={handleSkip}/>
            <QualityCard title="Word chunk method" desc="lorem ipsum" images={Chunkword} link="/wordChunkInfo" func={handleChunk}/>
        </div>
        
    </>
  )
 }
