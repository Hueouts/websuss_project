import React,{useEffect} from 'react'
import SuccessStories from '../Successstories'
import Storyreview1 from '../Storyreview1'
import Websitelaunchanchor from '../Websitelaunchanchor'
import Storyreview2 from '../Storyreview2'
import webLaunch8 from '../webLaunch8.webp'

export default function Stories() {
  useEffect(()=>{
    document.title="Websuss || SuccessStories";
  },[])
  return (
    <div className='stories'>
        <h1>
        Why Businesses Love WEBSUSS
        </h1>
        <Storyreview1/>
        <Storyreview2/>
        <SuccessStories/>
        <Websitelaunchanchor />
    </div>
    // commit
  )
}
