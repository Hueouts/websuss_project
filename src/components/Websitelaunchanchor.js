import React from 'react'
import { Link } from 'react-router-dom'
import weblaunch8 from '../webLaunch8.webp'
export default function Websitelaunchanchor({img}) {
  return (
    <div className='weblaunch-anchor'>
        <Link to={`/pricing`} target='_top'>
        <img src={img ? img  : weblaunch8} alt='linkimage'/>
        </Link>
    </div>
  )
}
