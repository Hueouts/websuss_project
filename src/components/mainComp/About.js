import React,{useEffect} from 'react'
import Journey from '../Journey'
import Playbook from '../Playbook'
import Simplejourney from '../Simplejourney'
import Spearheading from '../Spearheading'
export default function About() {
  useEffect(()=>{
    document.title="Websuss || About us";
  },[])
  return (
    <div className='about'>
        <div className='cont-u'>
        <Journey/>
        </div>
        <div className='cont-u'>
        <Playbook/>
        </div>
        <div className='cont-u'>
        <Simplejourney/>
        </div>
        <div className='cont-u'>
        <Spearheading/>
        </div>
    </div>
  )
}
