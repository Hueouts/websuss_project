import React,{useEffect} from 'react'
import Universaldropcontrol from '../Universaldropcontrol';
import Flexrigth from '../Flexrigth';
import Websitelaunchanchor from '../Websitelaunchanchor';
import springsale from '../springsale.webp'
import gardner from '../gardner.webp'
import marketing from '../marketing.webp'
import yourbrand from '../yourbrand.webp'
import abbaycoach from '../abbaycoach.webp'
import websitespecialist from '../websitespecialist.webp'
export default function Socialmedia() {
    useEffect(()=>{
        document.title="Websuss | Grow Your Business With Social Media Marketing";
      },[])
  return (
    <div className='social-media'>
        <Universaldropcontrol
        h21={`Social Media Marketing`}
        p={`Amplify Your Reach, Engage Your Audience.`}
        />
        <div>
        <Flexrigth
        h2={`Expand Your Reach`}
        li1={`Tap into a vast audience pool.`}
        li2={`Present your brand to potential customers far and wide.`}
        img={springsale}
        sepcial={"m"}
        special2={'bbheight1'}
        universal={`social-flex`}
        flxbasis={"flex-bas"}
        />
        <Flexrigth
        h2={`Engage Authentically`}
        li1={`Forge genuine relationships.`}
        li2={`Build trust and loyalty through interactive content.`}
        img={gardner}
        reverse={`reverse`}
        
        special2={'bbheight2'}
        sepcial={`m`}
        />
        <Flexrigth
        h2={`Boost Brand Visibility`}
        li1={`Increase presence with targeted campaigns.`}
        li2={`Put your brand in the spotlight.`}
        img={marketing}
        sepcial={`m`}
        special2={"bbheight3"}
        flxbasis={"flex-bas"}
        />
        <Flexrigth
        h2={`Insightful Analytics`}
        li1={`Gain valuable insights into customer behavior.`}
        li2={`Refine your strategy effectively.`}
        img={yourbrand}
        special2={"bbheight4"}
        sepcial={`m`}
        reverse={`reverse`}
        />
        <Flexrigth
        h2={`Cost-Effective Promotion`}
        li1={`Maximize impact on your marketing budget with social media.`}
        img={abbaycoach}
        special={"m"}
        special2={"bbheight5 mk"}
        universal={`social-flex`}
        flxbasis={"flex-bas"}
        />
        <Flexrigth
        h2={`What Awaits Your Audience`}
        li1={`Tailored content matching individual interests.`}
        li2={`Direct communication for feedback and queries.`}
        li3={`Community building with like-minded individuals.`}
        li4={`Stay updated with the latest products, services, and offers effortlessly.`}
        img={websitespecialist}
        reverse={`reverse`}
        universal={"lk"}
        sepcial={`mk`}
        special2={"bbheight6"}
        />
        </div>
        <Websitelaunchanchor/>
    </div>
  )
}
