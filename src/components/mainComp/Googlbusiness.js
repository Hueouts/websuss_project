import React, {useEffect} from 'react'
import Universaldropcontrol from '../Universaldropcontrol'
import Flexrigth from '../Flexrigth'
import Websitelaunchanchor from '../Websitelaunchanchor'
import websitemap from '../websitemap.webp'
import businesstaylor from '../businesstaylor.webp'
import pricingbanner from'../pricingbanner.webp'
import landscaping from '../landscaping.webp' 
export default function Googlbusiness() {
    useEffect(()=>{
        document.title="Websuss || GoogleBusiness";
      },[])
  return (
    <div className='google-business'>
        <Universaldropcontrol
        h21={`Google Business`}
        h22={`Management Services`}
        p={`Boost your visibility where it counts.`}
        />
        <div>
          <Flexrigth
        p={`A robust Google Business Profile is crucial for your digital footprint and visibility. 
        Businesses with a fully optimized Google Business Profile see a 70% higher likelihood of
         customer purchases.`}
         li1={`Get discovered by local customers.`}
         li2={`Stand out from the competition.`}
         li3={`Built credibility.`}
         sepcial={'i'}
         img={landscaping}
        />
        <Flexrigth
        h2={`Increase Visibility & Drive Sales`}
        li1={`Optimized profile ready in 7 days.`}
        li2={`Verified Google Maps listing.`}
        li3={`Direct interaction with customers.`}
        li4={`Detailed reviews, services, and product listings.`}
        sepcial={'bwidth j'}
        special2={'bheight'}
        img={websitemap}
        reverse={'reverse'}
        />
        
        <Flexrigth
        h2={`Effortless Review Management`}
        li1={`Prompt reviews for positive feedback.`}
        li2={`Display reviews on your site.`}
        li3={`Cultivate a reputable online stature.`}
        sepcial={'bwidth k'}
        special2={'bheight'}
        img={businesstaylor}
        />
          </div>
        <Websitelaunchanchor img={pricingbanner}/>
      
    </div>
  )
}
