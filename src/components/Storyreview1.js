import React from 'react'
import storyreview1 from '../storyreview1.webp'
export default function Storyreview1() {
    return (
        <div className='flx-r storyreview1 cont-u'>
            <div className='storyreview1-content flx-c '>
                <p>If you are looking for a website provider, then UENI
                    is fantastic. The level of service is really really good,
                    and I’m getting loads of leads as well...</p>
                <h2>BELLA GOODE</h2>
                <span>
                    Bella Goode and Training Centre
                </span>
            </div>
            <div className='storyreview1-img'>
                <img src={storyreview1} alt='storyreview'/>
            </div>
        </div>
    )
}
