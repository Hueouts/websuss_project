import React from 'react'
import { Link } from 'react-router-dom'
export default function Flexrigth({ h2, p, li1, li2, li3, li4, li5, img, sepcial, reverse, special2, universal, specialimg,flxbasis }) {
    return (
        <div className={`flx-r  flx-universal-right ${reverse}`}>
            <div className={`flx-universal-right1 ${universal}`}  >
                {h2 ? <h2>{h2}</h2> : false}
                {p ? <p><span>{p}</span></p> : false}
                <ul>
                    {li1 ? <li>{li1}</li> : false}
                    {li2 ? <li>{li2}</li> : false}
                    {li3 ? <li>{li3}</li> : false}
                    {li4 ? <li>{li4}</li> : false}
                    {li5 ? <li>{li5}</li> : false}
                </ul>
                <div className='pricing-link'>
                    <Link target='_top' to={'/pricing'}>Get started</Link>
                </div>
            </div>
            <div className={`${flxbasis}`}>
            <div className={`flx-universal-right-img ${sepcial} ${special2}`} >
                <img className={specialimg} src={img} alt='img' />
            </div>
            </div>
        </div>
    )
}
