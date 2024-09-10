import React from 'react'
import gaurantee from '../gaurnte.webp'
import choose1 from "../choose1.svg"
import choose2 from "../choose2.svg"
import choose3 from "../choose3.svg"
import choose4 from "../choose4.svg"
export default function Choose() {
    return (
        <div className='choose'>
            <div className='flx-r '>
                <div className='chooseFlx1'>

                    <strong>Why Choose Websuss</strong>

                    <p>Ditch the hassle and choose your way forward with Websuss. </p>
                </div>
                <div className='flx-r chooseFlx2'>
                    <div>
                        <img src={gaurantee} />
                    </div>
                    <div>
                        <em> Zero risk to get started. Not satisfied?
                            <br />Just email our customer success teamfor a full refund.
                        </em>
                    </div>
                </div>
            </div>
            <div className='flx-r chooseCard m10'>
                <div className='chooseCards' >
                    <div >
                        <img src={choose1} width={"80px"} height={"80px"} alt="" />
                    </div>
                    <div>
                        <h3>Hassle-Free</h3>
                        <p>Website creation, design to content, SEO, and ongoing management. We handle everything.</p>
                    </div>
                </div>
                <div className='chooseCards'>
                    <div>
                        
                    <img src={choose2} width={"90px"} height={"90px"} alt="" />
                    </div>
                    <div>
                        <h3>Affordable</h3>
                        <p>No hidden fees, no surprises. One-time setup fee, secure hosting, and ongoing support.</p>
                    </div>

                </div>
                <div className='chooseCards'>
                    <div>
                        
                    <img src={choose3} width={"86px"} height={"86px"} alt="" />
                    </div>
                    <div>
                        <h3>Made For You</h3>
                        <p>Skip the generic templates. We build a website that reflects your brand and needs.</p>
                    </div>

                </div>
                <div className='chooseCards'>

                    <div>
                        
                    <img src={choose4} width={'100px'} height={"100px"} alt="" />
                    </div>
                    <div>
                        <h3>Growth-Focused
                        </h3>
                        <p>Get found online, attract customers, and start converting leads from day one.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
