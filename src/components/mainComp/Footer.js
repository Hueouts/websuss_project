import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../footerImg.webp';

export default function Footer() {
  return (
    <footer className="footer-container ">
      <div className="footer-content flx-r">
        <div className="footer-info">
          <div className='footer-img'>
            <Link to={"/"}><img src={footerImg} alt="footerImage" className="footer-logo" />
            </Link>
          </div>
          <p className="footer-description">
              where the journey began with a dream to break free from the 9-to-6
              grind, wanting something more. The usual job scene wasn’t cutting
              it for us.
            </p>
          <div className="social-media-links flx-r">
            <div>
              <Link
                to="https://www.facebook.com/people/Websuss/61556979503550/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </div>
            <div>
              <Link
                to="https://www.youtube.com/channel/UCxjXYfMbz4Q9Z3XyZw1OhQw"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
            <div>
              <Link
                to={"https://www.instagram.com/websusss/"}
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
            <div>
              <Link to={"https://www.linkedin.com/company/websuss"} target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
            <div>
              <Link
                to={"https://www.pinterest.com/websusss/?invite_code=fccd5d8a32dd40c2871af5fd51789676&sender=907334793585430939"}
                target="_blank"
              >
                <i className="fa-brands fa-pinterest"></i>
              </Link>
            </div>
            <div>
              <Link to="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-links flx-r">
          <div>
            <h3>USEFUL LIST</h3>
            <ul>
              <li>
                <Link to={'/website-launch'} target="_top">Website Launch</Link>
              </li>
              <li>
                <Link to={'/success-stories'} target='_top'>Success Stories</Link>
              </li>
              <li>
                <Link to={"/pricing"} target='_top'>Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>USEFUL LIST</h3>
            <ul>
              <li>
                <Link to={'/about'} target='_top'>About</Link>
              </li>
              <li>
                <Link to={'/faq'} target='_top'>FAQs</Link>
              </li>
              <li>
                <Link to={'/policy'} target='_top'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-newsletter">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className='footer-input'>
            <input type="email"  id='footerEmail' placeholder="sample@mail.com" />
            <button type="submit">Subscribe</button>
          </div>
          <div>
            <p  className='footer-copy'>
              Don’t miss out on our latest insights and updates! Subscribe to our
              newsletter and stay in the know. Join our community today
            </p>
          </div>
        </div>
      </div>
      <hr/>
      <p className='footer-right'>Copyright © 2024 WEBSUSS | Powered by <Link to={'https://hueouts.com/'}>Hueouts</Link></p>
    </footer>
  );
}
