import React from 'react'
import "./skipwords.css"

export default function Skipwords() {
  let arr=["hello", "hi", "bye", "no", "brravos", "sih", "pccoer", "shit", "bitches"]
  return (
    <div className="flex">
       {
        arr.map((word,idx)=>{
          return <div className={`${(idx+1)%3 === 0 ? "bg m-2": "m-2"}`}>{word}</div>
      
        })
       }
    </div>
  )
}

