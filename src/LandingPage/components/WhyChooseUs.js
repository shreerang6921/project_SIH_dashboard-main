import React from 'react';
import QualityCard from './QualityCard';
import "../styles/WhyChooseUs.css";
import { FaStar } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa';
import RoadMap from './RoadMap';
import wcuData from '../data/data';
export default function WhyChooseUs()
 {
  return (
    <>
      <div id="How it works" className='WCU z-0'>
          <h1> Why Us?</h1>
        </div>  
          <div className='text1 pb-40 z-0'>
            <QualityCard title="Trusted Platform" desc="1234" logo={<FaCalendarCheck></FaCalendarCheck>}/>
            <QualityCard title="Guaranteed Result" desc="567" logo={<FaStar></FaStar>}/>
            <QualityCard title="Excellent Customer" desc="089" logo={<FaHeadset></FaHeadset>}/>
            {/* {wcuData.map((card)=>{
              return <QualityCard title={card.title} desc = {card.desc}/>
            })} */}
        </div>

        <RoadMap/>
        
    </>
  )
 }
