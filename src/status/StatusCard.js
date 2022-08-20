import React from 'react'
import { Link } from 'react-router-dom'
import TickTok from './TickTok'

export default function StatusCard({name,link}) {
  return (

    <div className="flex justify-between bg-slate-200 rounded-md border-2 border-slate-200 p-6 w-auto m-2">
        <Link to={link}>
        {name}
        <div className="hidden">

        <TickTok />
        </div>
        </Link>
    </div>
  )
}
