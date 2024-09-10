import React,{useEffect} from 'react'
import Websuspricing from '../Websuspricing'
import Questions from '../Questions'
import Pricingtable from '../Pricingtable'
import Websitelaunchanchor from '../Websitelaunchanchor'
import pricingbanner from '../pricingbanner.webp'
export default function Price() {
    useEffect(()=>{
        document.title="Websuss || Pricing";
      },[])
  return (
    <div className='p-rice'> 
     <div>
        <Websuspricing/>
        </div>
        <div className='p-rice-table'>
        <Pricingtable/>
        </div>
        <div className='pricing-question'>
            
        <Questions/>
        </div>
        
        <Websitelaunchanchor img={pricingbanner} />
    </div>
  )
}
