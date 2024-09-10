import React,{useEffect} from 'react'
import arrow from '../arrow.webp'
import Marquee from '../Marquee'
import Websuspricing from '../Websuspricing'
import Info from '../Info'
import Choose from '../Choose'
import Weektarget from '../Weektarget'
import Pledge from '../Pledge'
import Playbook from '../Playbook'
import Successstories from '../Successstories'
import Questions from '../Questions'
import { Link } from 'react-router-dom'
export default function Home1() {
  useEffect(()=>{
    document.title="Websuss || Home";
    
  },[])
  return (
  <>
  <div id='id' className='home1 flx-c'>
  <h2>GET YOUR WEBSITE FREE</h2>
  <h1>It All Starts with a New Website <Link to={'/pricing'}><img className='home1-img' src={arrow} alt='arrow' /></Link></h1>
  <div className='homeFlx flx-r'>
    <div className='homeFlx1'>
       <ul>
        <li>No Gimmicks, Just Great  Value</li>
        <li>Serving 100+ Business Categories</li>
       </ul>
    </div>
    
    <div className='homeFlx2'>
    <Link className='p-link' to={'/pricing'}>GET STARTED</Link>
    </div>
  </div>
  </div>
<Marquee/>
<Websuspricing/>
<Info/>
<Choose/>
<Weektarget/>
<Pledge/>
<Playbook/>
<Successstories/>
<Questions/>
  </>
  )
}
