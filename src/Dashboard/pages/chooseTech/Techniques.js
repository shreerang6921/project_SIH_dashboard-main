import React from 'react';
import QualityCard from './QualityCard';
import "./techniques.css";
import Peripheral from "../../../images/Peripheral.jpg";



export default function Techniques(){
  const peripheral = ""
  const skipWords = ""
  const wordChunk = ""
 
  return (
    <>
      <div id="tech" className='TECH'>
           Explore Multiple Speed Reading Techniques
        </div>  
        <br></br>
          <div className='text1'>
            <QualityCard title="Peripheral Method" desc="lorem ipsum" images={Peripheral}  link="/peripheralInfo"/> 
            <QualityCard title="Skip Word Method" desc="lorem ipsum" images={Peripheral} link="/skipWordsInfo"/>
            <QualityCard title="Word chunk method" desc="lorem ipsum" images={Peripheral} link="/wordChunkInfo"/>
        </div>
        
    </>
  )
 }
