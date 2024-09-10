import React from 'react'
import { Link } from 'react-router-dom'
import weblaunch3 from '../webLaunch3.webp'
export default function Websitechecklist3() {
  return (
    <div className='website-checklist3 flx-r cont-u '>
    <div className='website-checklist3-launch basis'>
    <h2 className='fz3'>
    Build Credibility With A Custom Domain, Pro Email & Secure Hosting
    </h2>
    <p>We bundle together your domain, email, and hosting to give your website 
        the perfect start with a unique identity, enhanced credibility,
         and seamless user experience..
</p>
<div className='website-checklist-launch'>
<ul>
<li>Choose a custom domain or connect existing domain.</li>
<li>Make some tweaks to the website if needed.</li>
</ul>
</div>
<div className='pricing-link'>
      <Link target='_top' to={'/pricing'}> 
       get started
      </Link>
    </div>
</div>
<div className='website-checklist3-img'>
    <img src={weblaunch3} alt='weblaunch3' />
</div>

</div>
  )
}
