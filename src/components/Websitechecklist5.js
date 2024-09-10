import React from 'react'
import { Link } from 'react-router-dom'
import weblaunch5 from '../webLaunch5.webp'
export default function Websitechecklist5() {
    return (
        <div className='website-checklist5 flx-r'>
            <div className='website-checklist5-launch basis'>
                <h2 className='fz3'>
                Web Store, Ready To Sell
                </h2>
                <p>Your website is ready for business from day one.
                </p>
                <div className='website-checklist-launch '>
                    <ul>
                        <li>No limits on the amount you can sell.</li>
                        <li>Customers can pay using any credit/debit card.</li>
                        <li>0% commissions from Websuss.</li>
                        <li>Convenient, fast, and secure order processing.</li>
                    </ul>
                </div>
                <div className='pricing-link'>
                    <Link target='_top' to={'/pricing'}>
                        get started
                    </Link>
                </div>
            </div>
            <div className='website-checklist5-img'>
                <img src={weblaunch5} alt='weblaunch3' />
            </div>

        </div>
    )
}
