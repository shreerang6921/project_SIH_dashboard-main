import React from 'react'
import { Link } from 'react-router-dom'


export default function Button({name,func,link}) {
  return (
    <div >
      <Link to={link}>
        <button className='w-fit rounded-md text-white hover:bg-violet-500 cursor-pointer m-2 px-2 py-1 bg-violet-700' onClick={func}>{name}</button>
    </Link>
    </div>
  )
}
