import React from 'react'
import Cookies from 'js-cookies'

import { Link, useNavigate } from 'react-router-dom'
export default function Pricingtable() {
    const navigate = useNavigate();
    function params(monthly,yearly,plan){
        const month = encodeURIComponent(monthly);
        const year = encodeURIComponent(yearly); 
        const obj = {
           price:monthly,
        }
        Cookies.setItem('cart',JSON.stringify(obj));
       navigate(`/payment?check-m=${month}&check-y=${year}&plan=${plan}`);
   }
    return (
        <div className='pricing-table'>
            <table>
                <thead className='table-head'>
                    <tr className='fz2' >


                        <th rowSpan={"2"}> <div className='table-head-inner'>Features</div></th>

                        <th><div className='table-head-inner'>Core</div></th>
                        <th><div className='table-head-inner'>Pro</div></th>
                        <th><div className='table-head-inner'>Ultra</div></th>


                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td colSpan={"4"}>
                            <div className='table-link'>

                                <Link href='https://royal-elementor-addons.com/' target='_blank'>
                                    <span>

                                        <span>
                                            Catapult Your Business into the Online Cosmos
                                        </span>
                                        <br />
                                        We give your website or online store the ultimate lift-off!

                                    </span>
                                </Link>
                            </div></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Your website or online store built by us
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Stunning, multi-page design to reflect your brand
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Fast loading speed to rank high on Google
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Products and services set up & written by us
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Blog, galleries, events, team & other sections crafted by us
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Custom business logo
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Ready in 7 days
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            1-to-1 training call to launch your website
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Small business tax consultation ($199 value)
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            30-Day Money-back Guarantee
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            SEO text written by us to improve your ranking and boost traffic

                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>

                    </tr>
                    <tr >
                        <td colSpan={"4"}><div className='table-link' >
                            <Link href='https://royal-elementor-addons.com/' target='_blank'>
                                <span>

                                    <span>
                                        Go Pro and Beyond
                                    </span>
                                    <br />Because going pro is just the beginning - we're here to keep that online momentum going strong.

                                </span>
                            </Link>
                        </div></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Free custom domain name (yourbusiness.com)
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Connect domains you already own to your site
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Business email accounts (you@yourbusiness.com)
                        </span></Link></div></td><td className='td'>1 inbox</td><td className='td'>4 inboxes</td><td className='td'>4 inboxes</td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Easy-to-use website editor that works on any device
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Advanced website customization to add content & change design
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            0% commission on sales, appointments & leads
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Service Professional Pack - accept unlimited appointments 24/7. Confirm appointments & sync with calendar. Connect a third-party booking solution if you prefer.
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Ecommerce Pack - accept payments via credit card, debit card, PayPal or offline payment. Unlimited sales, bookings, leads, product listings, and product variations. Run site-wide promotions with coupon codes or discount products to maximize sales. Inventory management.
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Real-time alerts for sales, bookings, leads (SMS or WhatsApp) - 24/7
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Free yearly SSL certificate ($97 value)
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Build an unlimited lead database & export your contacts anytime
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Add custom HTML code to your website & easily integrate with third-party tools and widgets
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Automatically sync and promote your products on Google Shopping, Facebook Marketplace and Instagram Shop
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Remove Websuss branding
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td colSpan={"4"}><div className='table-link'>
                            <Link href='https://royal-elementor-addons.com/' target='_blank'>
                                <span>

                                    <span>
                                        Local SEO
                                    </span>
                                    <br />Be the local hero. Get spotted by customers in your neighborhood.

                                </span>
                            </Link>
                        </div></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Google Business Profile launched, verified & optimized
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Google Reviews displayed on your website
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            On-demand reviews collection
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Monthly Google Business Profile post
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            SEO audit report
                        </span></Link></div></td><td className='td'>1 time</td><td className='td'>Monthly</td><td className='td'>Monthly</td>
                    </tr>
                    <tr >
                        <td colSpan={"4"}><div className='table-link' >
                            <Link href='https://royal-elementor-addons.com/' target='_blank'>
                                <span>

                                    <span>
                                        VIP Treatment with Our Concierge Service
                                    </span>
                                    <br />Sit back, relax, and let us sprinkle some magic. We enhance and manage your website like the pros we are.

                                </span>
                            </Link>
                        </div></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Live Chat support
                        </span></Link></div></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Phone support
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            VIP priority support (less than 24 hours)
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Unlimited edit requests from you, done by us
                        </span></Link></div></td><td className='td'> For 30 Days</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Unlimited website power ups, set up by us
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td colSpan={"4"}><div className='table-link' >
                            <Link href='https://royal-elementor-addons.com/' target='_blank'>
                                <span>

                                    <span>
                                        Supercharge Your Site with Power Ups
                                    </span>
                                    <br />Level up your website with added functionalities – making it cooler and more powerful than ever

                                </span>
                            </Link>
                        </div></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Custom order forms
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Social media feeds (e.g. Instagram)
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Multimedia enhancements including streaming
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            30+ custom HTML integrations
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Lead capture forms / mailing list subscription
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Additional design layouts to showcase your content
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Live chat & messenger widgets
                        </span></Link></div></td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td colSpan={"4"}><div className='table-link'>
                            <Link href='https://royal-elementor-addons.com/' target='_blank'>
                                <span>

                                    <span>
                                        Grow Your Business Like a Boss
                                    </span>
                                    <br />
                                    We're not just dreamers; we're doers. We’ll craft a plan and watch your business bloom

                                </span>
                            </Link>
                        </div></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Dedicated VIP Growth Success Team
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            Custom growth plan tailored to your business
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            1-1 marketing calls to launch campaigns on topics such as:
                            <br />
                            - Email marketing
                            <br />
                            - Social media marketing
                            <br />
                            - Online advertising
                            <br />
                            - Search-engine optimization
                            <br />
                            - 5-star reviews & online reputation - And more
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr >
                        <td className='td'><div><Link to={'https://royal-elementor-addons.com/'}><span>
                            2x 1000-word blog articles written for your website every month
                        </span></Link></div></td><td className='td'>-</td><td className='td'>-</td><td className='td'><i className="fa-solid fa-check"></i></td>
                    </tr>
                    <tr className='btn-row'>
                        <td className='td'></td>
                        <td className='td'><div className='pricing-link'  onClick={()=>{params(12,149,"zlm")}}><Link to={""}>get started</Link></div></td>
                        <td className='td'><div className='pricing-link' onClick={()=>{params(420,99,"yal")}}><Link to={""}>get started</Link></div></td>
                        <td className='td'><div className='pricing-link' onClick={()=>{params(529,99,"lavy")}}><Link to={""}>get started</Link></div></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
