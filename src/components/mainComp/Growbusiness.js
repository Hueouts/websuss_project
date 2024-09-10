import React from 'react'
import websitemap from '../websitemap.webp'
import adsmanager from '../adsmanager.webp'
import skinbeauty from '../skinbeauty.webp'
import Universaldropcontrol from '../Universaldropcontrol'
import Flexrigth from '../Flexrigth'
import Websitelaunchanchor from '../Websitelaunchanchor'

export default function Growbusiness() {
  return (
    <div className='grow-business'>
        <Universaldropcontrol
        h21={`Grow your Business`}
        p={`Partner with Websuss for Personalized Growth`}
        />
        <div>
       <Flexrigth
       h2={`Your Roadmap to Success`}
       li1={`Customized marketing support for consistent monthly growth.`}
       li2={`Collaborative marketing strategy aligned with your goals.`}
       li3={`Monthly action plans targeting key themes.`}
       img={websitemap}
       sepcial={'mc'}
       special2={"bbbheight1"}
       universal={'ads-manager-flex '}
       flxbasis={"flex-basis"}
       />
       <Flexrigth
       h2={`Account Management & Support`}
       li1={`Dedicated Growth Specialist for monthly consultations.`}
       li2={`Access to specialists for ongoing support and insights.`}
       img={adsmanager}
       reverse={`reverse`}
       sepcial={'ads-manager mc'}
       
       special2={"bbbheight2"}
       universal={'ads-manager-flex klxd'}
       />
       <Flexrigth
       h2={`Building Your Online Reputation`}
       li1={`Secure positive customer feedback.`}
       li2={`Insights and tools for effective business identity & reputation management.`}
       img={skinbeauty}
       sepcial={'ads-manager mc'}
       universal={'ads-manager-flex klxd'}
       flxbasis={"flex-basis"}
       special2={"bbbheight3"}
       />
       </div>
       <Websitelaunchanchor/>
    </div>
  )
}
