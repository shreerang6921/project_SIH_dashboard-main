import React from 'react';
import "../styles/RoadMap.css";
import road from  "../images/RoadMap.svg";
import roadsmall from  "../images/RoadSmall.svg";

export default function RoadMap() {
  return (
    <>
    <div  className="big">
        <img src={road}/>
    </div>

    <div className='small'>
      <img src={roadsmall}></img>
    </div>
    </>
  )
}
