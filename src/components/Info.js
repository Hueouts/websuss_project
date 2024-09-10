import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../arrow.webp'
export default function Info() {
    return (
        <div className='info'>
            <h2 className='m10'>
                Let’s cut it short and move on to the actual point here, what Websuss can do for you.
                <Link target='_top' to={'/pricing'}><img src={arrow} width={"50px"} height={"50px"} alt="arrow" /></Link>
            </h2>
         
            <p className='m10'>
                Websuss is here for new businesses like yours. We help you establish your online presence through our digital services, SEO-based content, pay-per-click advertising, and social media marketing. By now, you’re likely aware that without a strong online presence, it’s like using a paper map instead of GPS in today’s digital world. With a professional web development service, you’ll be miles ahead of your competition.<br/><br/>
                Did you invest a significant amount in your website, but it looks outdated and isn’t generating sales? That’s where our web development solutions come in. A bland website isn’t going to resonate with your target audience or drive sales. Your website is a representation of your brand and deserves to shine! It should not only be visually appealing but also be the driving force behind your online sales, not just another option. We can help!<br/><br/>
                We help you generate more sales, bookings and leads with a beautiful website built for you at a competitive price through our web development services. There are no hidden costs, no expensive agency fees, no months of waiting, and no complicated DIY website builders – just a product that delivers results for your business.

            </p>
        </div>
    )
}
