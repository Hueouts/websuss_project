import React,{useEffect} from 'react'
import Universaldropcontrol from '../Universaldropcontrol'
import Flexrigth from '../Flexrigth'
import Websitelaunchanchor from '../Websitelaunchanchor'
import websiteshoes1 from '../websiteshoes1.webp'
import websiteshoes2 from '../websiteshoes2.webp'
import websiteshoes3 from '../websiteshoes3.webp'
import websitesanitizer from '../websitesanitizer.webp'
import websitemessenger from '../websitemessenger.webp'
import websitestyle from '../websitestyle.webp'
import websitespecialist from'../websitespecialist.webp'
import websitecalender from '../websitecalender.webp'
export default function Website() {
    useEffect(()=>{
        document.title="Websuss || Website";
      },[])
  return (

    <div className='website'>
       <Universaldropcontrol 
             h21={`All-in-One`}
             h22={`Website Solution`}
             p={'Websuss empowers small businesses like yours to reach new customers,build a strong online presence, and convert visitors into loyal fans.'}
       />
       <Flexrigth h2={`Effortless Website Creation`}
               li1={`Quick, mobile-friendly website creation.`}
               li2={`Simplified launch process.`}
                img={websiteshoes1}
                sepcial={"a"}
                reverse={"p"}
               />

         <Flexrigth
         h2={`Your Brand, Amplified`}
         li1={`Content creation, captivating visuals, sleek design.`}
         li2={`Built-in blog, portfolio, and team sections.`}
         img={websitespecialist}
        sepcial={"b"}
         special2={"height1"}
         reverse={`reverse`}
         />      
               <Flexrigth 
               h2={`Ready, Set, Launch & Thrive`}
               li1={`Pre-launch Zoom call.`}
               li2={`Learn website management, updates, and optimization.`}
               li3={`Expert marketing insights.`}
               img={websitesanitizer}
               sepcial={"c"}
               special2={"height2"}
               />
               <Flexrigth
                  h2={`Attract & Convert With Confidence`}
                  li1={`Compelling narrative.`}
                  li2={`SEO-optimized content.`}
                  li3={`Showcase positive reviews.`}
                  li4={`Unlimited lead database.`}
                  img={websitecalender}
                  universal={'aa'}
                  sepcial={"d"}
                  special2={`height3 height`}
                  reverse={`reverse`}
               />
               <Flexrigth
               h2={`Turn Visitors Into Loyal Customers`}
               li1={`24/7 booking acceptance.`}
               li2={`Manage notifications.`}
               li3={`Sync calendars.`}
               li4={`Connect to third-party booking systems.`}
               img={websitemessenger}
               sepcial={"e"}
               special2={"height4"}
               />
               <Flexrigth
               h2={`Start Selling Online From Day 1`}
               li1={`Built-in web store.`}
               li2={`Secure order processing.`}
               li3={`Unlimited product listings.`}
               li4={`Convenient payment options.`}
               li5={`0% commissions.`}
               img={websiteshoes2}
               sepcial={"f"}
               reverse={`reverse`}
               special2={"height5"}
               />
               <Flexrigth
               h2={`Enhanced Functionality`}
               li1={`Instagram/TikTok feeds, live chat, galleries, search bars, audio streaming, and more.`}
               li2={`Explore additional features with our agents.`}
               img={websitestyle}

               sepcial={'special g'}
               special2={"height6"}
               />
               <Flexrigth
               h2={`Peace Of Mind With Websuss`}
               li1={`Free SSL security certificate.`}
               li2={`Reliable performance with free hosting and maintenance.`}
               li3={`Your domain, your way.`}
               img={websiteshoes3}
               universal={"aa"}
               sepcial={"special h"}
               special2={"height7"}
               reverse={`reverse`}
               />
               <Websitelaunchanchor/>
    </div>
  )
}
