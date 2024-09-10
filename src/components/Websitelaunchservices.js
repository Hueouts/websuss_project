import React from 'react'
import webLaunchicon1 from '../webLaunchicon1.svg'
import webLaunchicon2 from '../webLaunchicon2.svg'
import webLaunchicon3 from '../webLaunchicon3.svg'
export default function Websitelaunchservices() {
    return (
        <div className='flx-r website-service cont-u'>
        <div className='done-for-you flx-c'>
            <div className='website-icon'><img src={webLaunchicon1} alt='webicon-1' /></div>
            <div>
                <h2 className='fz2'>Done-for-you
                    service</h2>
            </div>
            <div>
                <p>
                    Our dedicated team does all the heavy lifting for you,
                    from website building to maintenance, so your online presence
                    is a success.
                </p>
            </div>
        </div>
        <div className='lightning-fast flx-c'>
            <div className='website-icon'><img src={webLaunchicon2} alt='webicon-2' /></div>
            <div>
                <h2 className='fz2'>Lightning-fast
                    delivery</h2>
            </div>
            <div>
                <p>
                    A professional site makes a lasting impression,
                    so we deliver yours in under a week. You’ll be able to sell
                    products and accept bookings right away.
                </p>
            </div>
    
        </div>
        <div className='customization-refinement flx-c'>
            <div className='website-icon'><img src={webLaunchicon3} alt='webicon-3' /></div>
            <div>
                <h2 className='fz2'>
                    Customization & refinement:
                </h2>
            </div>
            <div>
                <p>
                    You won’t be stuck with a cookie-cutter website. We work closely
                    with you to understand your needs and create a website that perfectly
                    reflects your brand.
                </p>
            </div>
        </div>
    </div>
    )
}
