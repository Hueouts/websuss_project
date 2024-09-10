import React from 'react'
import { Link } from 'react-router-dom'
import weblaunch4 from '../webLaunch4.webp'
export default function Websitechecklist4() {
    return (
        <div className='website-checklist4 flx-r'>
            <div className='website-checklist4-launch basis'>
                <h2 className='fz3'>
                    Launch & Training Call With The Team
                </h2>
                <p>Right after submitting your business information, you can book a call with the specialist who
                    built your website. You’ll have your call soon after we’ve finished building your
                    website. On this call, we will:
                </p>
                <div className='website-checklist-launch'>
                    <ul>
                        <li>Reveal your finished website for approval.</li>
                        <li>Make some tweaks to the website if needed.</li>
                    </ul>
                </div>
                <div className='pricing-link'>
                    <Link target='_top' to={'/pricing'}>
                        get started
                    </Link>
                </div>
            </div>
            <div className='website-checklist4-img'>
                <img src={weblaunch4} alt='weblaunch3' />
            </div>

        </div>
    )
}
