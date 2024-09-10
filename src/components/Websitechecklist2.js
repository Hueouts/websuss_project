import React from 'react'
import { Link } from 'react-router-dom'
import weblaunch2 from '../webLaunch2.webp';
export default function Websitechecklist2() {
  return (
    <div className='website-checklist2 flx-r  '>
        <div className='website-checklist2-launch basis'>
        <h2 className='fz3'>
        A Website That Is Ready To Sell
        </h2>
        <p>Websuss makes going online simple and affordable. We build beautiful,
             professional websites tailored to your business, ready to sell your products, 
             take bookings, and onboard new customers.
</p>
<div className='website-checklist-launch'>
<ul>
    <li>Website Design & Development</li>
    <li>Content Creation</li>
    <li>SEO Optimization</li>
    <li>E-commerce with a 24/7 Booking System</li>
    <li>Mobile-Friendly & Responsive</li>
</ul>
</div>
<div className='pricing-link'>
          <Link target='_top' to={'/pricing'}> 
           get started
          </Link>
        </div>
    </div>
    <div className='website-checklist2-img website-checklist1-img'>
        <img src={weblaunch2} alt='weblaunch2' />
    </div>

    </div>
  )
}
