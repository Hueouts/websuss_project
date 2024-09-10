import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../arrow.webp'
export default function Journey() {
    return (
        <div className='journey cont-p flx-c'>
            <h2 className='fz6'>
                The Websuss Journey <Link target='_top' to={'/pricing'} ><img src={arrow} /> </Link>
            </h2>
            <p>Hey there! Welcome to Websuss, where the journey began with a dream to break free from the 9-to-6 grind, wanting something more. The usual job scene wasn’t cutting it for us. We realized we had some mad marketing skills. Why not channel them? Lightbulb moment! Sleepless nights, countless hours of planning and then executing. Fast forward to today, and ta-da! Websuss was born. Aiming to simplify the online game for small businesses and have a blast while doing it.
                <br />
                <br/>
                We noticed a major hiccup in the small biz world. Getting online was a maze of time, money, and complexity. We thought, “Hey, why not fix that?” So, each month, we roll up our sleeves and hand-deliver fully built websites to hundreds of businesses. They’re not just pretty faces; they’re selling, they’re booking–all from day one.</p>

        </div>
    )
}
