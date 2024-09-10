import React from 'react';
import { Link } from 'react-router-dom';
import weblaunch1 from '../webLaunch1.webp';

export default function Websitechecklist1() {
  return (
    <div className="website-checklist1  flx-r">
      <div className='website-checklist-launch basis'>
        <h1>Your Website Launch Checklist:</h1>
        <ul>
          <li>Professional Website</li>
          <li>Ready in 7 days</li>
          <li>All done for you</li>
          <li>Domain + email</li>
        </ul>
        <div className='pricing-link'>
          <Link target='_top' to={'/pricing'}> 
            launch my website
          </Link>
        </div>
      </div>
      <div className='website-checklist1-img '>
        <img src={weblaunch1} alt="webLaunch1" />
      </div>
    </div>
  );
}
