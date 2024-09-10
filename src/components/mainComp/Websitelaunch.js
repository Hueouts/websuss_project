import React, { useEffect } from 'react'
import Websitechecklist1 from '../Websitechecklist1'
import Websitechecklist2 from '../Websitechecklist2'
import Websitechecklist3 from '../Websitechecklist3'
import Websitechecklist4 from '../Websitechecklist4'
import Websitelaunchservices from '../Websitelaunchservices'
import Websitechecklist5 from '../Websitechecklist5'
import Websitechecklist6 from '../Websitechecklist6'
import Websitechecklist7 from '../Websitechecklist7'
import Websitelaunchanchor from '../Websitelaunchanchor'
export default function Websitelaunch() {
  useEffect(()=>{
    document.title="Websuss || Website Launch"
  },[])
  return (
    <div className='weblaunch'>
      <div>
      <Websitechecklist1/>
      <h2 className='fz2'>WHAT WE DO FOR YOU </h2>
      <Websitechecklist2/>
      <Websitechecklist3/>
      <Websitechecklist4/>
      <h2 className='fz2'>EFFORTLESS WEBSITES, POWERFUL RESULTS</h2>
      <Websitelaunchservices/>
      <h2 className='fz2'>WHAT ELSE DO YOU GET?</h2>
      <Websitechecklist5/>
      <Websitechecklist6/>
      <Websitechecklist7/>
      </div>
      
      <Websitelaunchanchor/>

    </div>
  )
}
