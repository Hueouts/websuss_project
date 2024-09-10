import React from 'react'
import { Link } from 'react-router-dom'

export default function Universaldropcontrol({h21,h22,p}) {
  return (
    <div className='universal-drop-cotrol flx-c'>
         <h2>{h21}<br/>{h22}</h2>
         <p>{p}</p>
         <div className='pricing-link'>
            <Link target='_top' to={'/pricing'}>Choose a Plan</Link>
         </div>
    </div>
  )
}
