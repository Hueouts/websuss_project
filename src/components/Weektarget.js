import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../arrow.webp'
import headphone from '../headphones.webp'
export default function Weektarget() {
  return (
    <div className='weektarget' >
        <h2>
        JUST IN 7 DAYS!
        </h2>
        <p >
        Dominate the Web With our Exceptional Web Development Services <Link  to={'/pricing'}><img src={arrow} alt="arrow" /></Link>
        </p>
        <div className='dp-link1'><Link  to={'/pricing'}>GET YOURS NOW</Link></div>
      
        <p>That’s right! You heard it correctly. Focus on your business, and let us handle your online presence. After all, you wouldn’t show up to a car race on a bike, would you?</p>
   <div className='target-img'>
    <img src={headphone}  alt='background' />
    </div>
    <p>UPGRADE YOUR WEBSITE WITH WEBSUSS</p>
    <p>Unlock more as your business grows <Link  to={'/pricing'}><img src={arrow} alt="arrow" /></Link></p>
    <div className='dp-link1' ><Link  to={'/pricing'}>BROWSE ALL FEATURES</Link></div>
    </div>
  )
}
