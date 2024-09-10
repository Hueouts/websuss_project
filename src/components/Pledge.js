import React from 'react'
import { Link } from 'react-router-dom'
import arrofff from '../arrowfff.webp'
export default function Pledge() {
    return (
        <div className="websuss-pledge flx-r pledge">

  <div className="pledge-heading">
    <h2>
      The Websuss  Pledge <Link target='_top' to={'/pricing'}><img src={arrofff} alt="" className="pledge-image" /></Link>
    </h2>
  </div>

  <div className="pledge-description flx-r">
    <p className="pledge-benefit">
      A stunning website built with our exceptional website development services, fresh and ready to launch in just 7 days!
    </p>
    <p className="pledge-benefit">
      Personalized, dynamic SEO-based web copywriting and design cookie-cutter solution, tailor-made excellence!
    </p>
    <p className="pledge-benefit">
      Made exclusively for you – because your website should be as unique as you are!
    </p>
    <p className="pledge-benefit">
      Dedicated marketing, social media, PPC advertising, and SEO content to boost your online presence
    </p>
  </div>

</div>
    )
}
