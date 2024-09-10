import React,{ useEffect, useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import Cookies from "js-cookies"
import arrow from '../arrow.webp'
export default function Websuspricing() {
       const [annual,setAnnual] = useState(false);
        const navigate = useNavigate()
       function styleYear(){
        const x = document.querySelector('.planYear');
        const y = document.querySelector('.planMonth');
        y.classList.remove("toog");
        x.classList.add("toog");
       }
       function styleMonth(){
        const x = document.querySelector('.planMonth');
        const y = document.querySelector('.planYear');
        y.classList.remove("toog");
        x.classList.add("toog");
       }
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
        <div className='pricing'>
            <h2>WEBSUSS PRICING</h2>
            <div>
                Launch, Manage & Grow your business Online <Link target='_top' to={'/pricing'}><img src={arrow} /></Link>
            </div>
            <div className='priceList'>
                <ul className='flx-r'>
                    <li>All Done For You</li>
                    <li>No Hidden Costs</li>
                    <li>So Much More Than A Website</li>
                </ul>
            </div>
            <div className='flx-r m10'>
                <div className='plan flx-r' >
                    <div className='planMonth toog' onClick={()=>{
                        styleMonth();
                        setAnnual(false);
                    }}>
                        <div> MONTHLY</div>

                    </div>

                    <div className='planYear' onClick={()=>{
                        styleYear();
                        setAnnual(true);
                    }}>
                        <div>YEARLY</div>
                    </div>
                </div>
            </div>
            <div className='popular flx-r m10'>
                <div>
                <h2>MOST POPULAR</h2>
                </div>
            </div>
            <div className='flx-r planCards m10'>
                <div>
                    <h3>Core</h3>
                    <div>
                        <span>$</span>
                        {annual ? <span>12</span>  :<span>1</span>}
                        {annual ? <span>/Year</span>:<span>/Month</span>}
                    </div>
                    <div>
                        <span>$</span>
                        {annual ?<span>1 </span>:<span>12 </span>}
                        {annual ? <span>Paid Monthly</span>:<span>Paid Annually</span>}
                    </div>
                    <div>
                        + <span>$599 </span><span>$149</span>
                        <span>setup fee</span>
                    </div>
                    <div className='m10'>
                        We build and launch your website
                    </div>
                    <div className='flx-r m10'>
                    <div onClick={()=>{params(12,149,"zlm")}}>
                        <Link>GET STARTED</Link>
                    </div>
                    </div>
                    <div className='m10'>
                        Core feature for your needs:
                        <ul>
                            <li>
                                Built-for-you website or online store
                            </li>
                            <li>
                                Personalized website design & copy
                            </li>
                            <li>
                                Ready in 7 days
                            </li>
                            <li>
                                1-to-1 launch & training call
                            </li>
                            <li>
                                Professional email(you@yourbusiness.com)
                            </li>
                            <li>
                                Unlimited edits for 15 days post launch
                            </li>
                            <li>
                                30-Day Money-back Guarantee
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Plus</h3>
                    <div>
                        <span>$</span>
                        {annual?<span>420</span>:<span>35</span>}
                        
                        {annual ? <span>/Year</span>:<span>/Month</span>}
                    </div>
                    <div>
                        <span>$</span>
                       {annual ? <span>35</span>:<span>420 </span>}
                        {annual ? <span>Paid Monthly</span>:<span>Paid Annually</span>}
                    </div>
                    <div>
                        + <span>$599 </span><span>$99</span>
                        <span>setup fee</span>
                    </div>
                    <div className="m10">We manage your online presence.
                    </div>
                    <div className='flx-r rr m10'>
                    <div onClick={()=>{params(420,99,"yal")}}>
                        <Link>GET STARTED</Link>
                    </div>
                    </div>
                    <div className='m10'>
                        Everything in Website Launch, plus:
                        <ul>
                            <li>
                                Built-for-you website or online store
                            </li>
                            <li>
                                Personalized website design & copy
                            </li>
                            <li>
                                Fast loading to rank high on Google
                            </li>
                            <li>
                                Custom domain name (yourbusiness.com)
                            </li>
                            <li>
                                Secure hosting & SSL certificate
                            </li>
                            <li>

                                Unlimited edits(30-days) post launch
                            </li>
                            <li>
                                30-Day Money-back Guarantee
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Ultra</h3>
                    <div>
                        <span>$</span>
                        {annual?<span>529</span>:<span>44.08</span>}
                        
                        {annual ? <span>/Year</span>:<span>/Month</span>}
                    </div>
                    <div>
                        <span>$</span>
                        {annual?<span>44.08 </span>:<span>529 </span>}
                        {annual ? <span>Paid Monthly</span>:<span>Paid Annually</span>}
                    </div>
                    <div>
                        + <span>$599 </span><span>$99</span>
                        <span>setup fee</span>
                    </div>
                    <div className="m10">We grow your business.
                    </div>
                    <div className='flx-r  m10'>
                    <div onClick={()=>{params(529,99,"lavy")}}>
                        <Link >GET STARTED</Link>
                    </div>
                    </div>
                    <div className='m10'>
                        Everything in Plus, plus:
                        <ul>
                            <li>
                                Built-for-you website or online store
                            </li>
                            <li>
                                Custom domain name & 4 email address
                            </li>
                            <li>
                                Advanced SEO to rank on Google
                            </li>
                            <li>
                                Convert visitors into customers
                            </li>
                            <li>

                                Promote your products on Social Media
                            </li>
                            <li>

                                VIP phone support
                            </li>
                            <li>
                                30-Day Money-back Guarantee
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
