import React from 'react'
import { Link } from 'react-router-dom'
import weblaunch7 from '../webLaunch7.webp'
export default function Websitechecklist7() {
    return (
        <div className='website-checklist7 flx-r'>
            <div className='website-checklist7-launch basis'>
                <h2 className='fz3'>
                    Appointment Management System
                </h2>
                <p>Your website is ready to accept appointments from day one.
                </p>
                <div className='website-checklist-launch'>
                    <ul>
                        <li>Track sales, appointments, and behaviors on one dashboard.</li>
                        <li>Optimize offerings and marketing with data-driven decisions.</li>
                        <li>Tailor services to customer preferences for higher engagement.</li>
                        <li>Expand reach and grow business using strategic analytics.</li>
                    </ul>
                </div>
                <div className='pricing-link'>
                    <Link target='_top' to={'/pricing'}>
                        get started
                    </Link>
                </div>
            </div>
            <div className='website-checklist7-img'>
                <img src={weblaunch7} alt='weblaunch3' />
            </div>

        </div>
    )
}
