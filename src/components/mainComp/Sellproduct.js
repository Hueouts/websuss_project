import React,{useEffect} from 'react'
import Universaldropcontrol from '../Universaldropcontrol';
import Flexrigth from '../Flexrigth';
import Websitelaunchanchor from '../Websitelaunchanchor';
import skinbeauty from '../skinbeauty.webp'
import adsmanager from '../adsmanager.webp'
import websitemessenger from '../websitemessenger.webp'
export default function Sellproduct() {
    useEffect(()=>{
        document.title="Websuss | Sell Online";
      },[])
    return (
    <div className='sell-product'>
        <Universaldropcontrol
        h21={`Effortless Booking & Selling`}
        h22={`Grow Your Business Online`}
        p={`Kickstart your business on day one with our comprehensive e-commerce and booking solutions.`}
        />
        <div>
        <Flexrigth
        h2={`Effortless Booking & Customer Management`}
        li1={`Accept bookings 24/7 through your website.`}
        li2={`Receive automatic SMS and email notifications.`}
        li3={`Easily confirm or modify bookings and sync calendars.`}
        li4={`Connect to third-party booking systems.`}
        img={skinbeauty}
        sepcial={`l`}
        special2={`bheight bheight1`}
        />
        <Flexrigth
        h2={`Start Selling Online In Minutes`}
        li1={`Built-in web store for easy product/service sales.`}
        li2={`Unlimited product listings for scalable business growth.`}
        li3={`Secure payment options with credit & debit cards.`}
        li4={`Enjoy 0% commissions on all sales.`}
        reverse={`reverse`}
        universal={"ll"}
        sepcial={`l dk`}
        special2={`bheight bheight2`}
        img={adsmanager}
        />
        <Flexrigth
        h2={`Expand Your Reach & Drive Sales`}
        li1={`Sync product catalog with Google, Facebook, and Instagram.`}
        li2={`Promote products on Google search results, Gmail, and Google Shopping for targeted traffic and increased sales.`}
        img={websitemessenger}
        sepcial={`lo`}
        special2={`bheight bheight3`}
        universal={`universal`}
        />
        </div>
        <Websitelaunchanchor />
    </div>
  )
}
