import React,{useEffect} from 'react'
import Universaldropcontrol from '../Universaldropcontrol';
import Flexrigth from '../Flexrigth';
import Websitelaunchanchor from '../Websitelaunchanchor';
import Handyman from '../Handyman.webp'
import sunglasses from '../sunglasses.webp'
import springsale from '../springsale.webp'
export default function Targetadv() {
    useEffect(()=>{
        document.title="Websuss | Reach Your Ideal Customers With Targeted Ads";
      },[])
  return (
    <div className='target-adv'>
        <Universaldropcontrol
        h21={`Targeted Advertising`}
        p={`Target the Right Audience, Drive Real Results with Websuss`}
        />
        <div>
        <Flexrigth
        h2={`Laser Focused Marketing`}
        p={`We use a data-driven strategy to help you reach your ideal 
        customers across various online platforms, ensuring your message 
        resonates with the right audience at the right time. `}
        li1={`Ideal customers that`}
        li2={`are interested in what you offer`}
        li3={`Surge in qualified leads`}
        li4={`Increased brand awareness`}
        li5={`Measure growth`}
        img={Handyman}
        sepcial={'nv'}
        universal={`social-flex n`}
        flxbasis={"flex-bas"}
        />
        <Flexrigth
        h2={`Navigating Success for Your Business`}
        li1={`See tangible growth with increased website traffic, lead generation, and ultimately, sales.`}
        li2={`Connect with your ideal demographic using data-driven strategies.`}
        li3={`Strengthen your brand status by appearing in the right place, at the right time, to the right people.`}
        li4={`Stay ahead in the marketplace by adopting advanced targeting techniques that outpace competitors.`}
        li5={`Using analytics to refine your campaigns, optimizing for effectiveness and efficiency.`}
        img={sunglasses}
        universal={`social-flex n`}
        sepcial={`dwidth nv`}
        special2={`grow`}
        reverse={`reverse`}

        />
        <Flexrigth
        h2={`Enriching Connections for Your Audience`}
        li1={`Engage every customer by tailoring your ads to meet their specific desires and challenges.`}
        li2={`Provide value through informative and engaging content that addresses common concerns.`}
        li3={`Foster a community by connecting users with similar interests through your brand.`}
        li4={`Provide audience essential information for informed choices, building trust and loyalty in products/services.`}
        img={springsale}
        sepcial={'nv'}
        universal={`social-flex n`}
        flxbasis={"flex-bas"}
        />
        </div>
        <Websitelaunchanchor/>
    </div>
  )
}
