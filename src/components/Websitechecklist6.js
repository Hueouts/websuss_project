import React from 'react'
import { Link } from 'react-router-dom'
import weblaunch6 from '../webLaunch6.webp'
export default function Websitechecklist6() {
    return (
        <div className='website-checklist6 flx-r cont-p'>
            <div className='website-checklist6-launch basis'>
                <h2 className='fz3'>
                Enhanced Analytics And Insights
                </h2>
                <p>Maximize your business’s potential with real-time insights from day one.
                </p>
                <div className='website-checklist-launch '>
                    <ul>
                        <li>On-site booking system or connect your own.</li>
                        <li>24/7 appointment management.</li>
                        <li>Email confirmation & calendar sync for bookings.</li>
                        <li>Confirm/change bookings from Business Hub.</li>
                    </ul>
                </div>
                <div className='pricing-link'>
                    <Link target='_top' to={'/pricing'}>
                        get started
                    </Link>
                </div>
            </div>
            <div className='website-checklist6-img'>
                <img src={weblaunch6} alt='weblaunch3' />
            </div>

        </div>
    )
}
