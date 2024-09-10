import './App.css';
import './customCss/footer.css'
import './customCss/about.css'
import './customCss/weblaunch.css'
import './customCss/stories.css'
import './customCss/pricing.css'
import './customCss/website.css'
import './customCss/business.css'
import './customCss/sellproduct.css'
import './customCss/socialmedia.css'
import './customCss/target.css'
import './customCss/growbusiness.css'
import './customCss/login.css'
import './customCss/policy.css'
import './customCss/cart.css'
import './customCss/checkout.css'
import './customCss/myaccount.css'
import './customCss/stripe.css'
import './customCss/core.css'
import './customCss/universe.css'
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Cookies from 'js-cookies'
import Nav from './components/mainComp/Nav';
import Home1 from './components/mainComp/Home1';
import About from './components/mainComp/About';
import Footer from './components/mainComp/Footer';
import Websitelaunch from './components/mainComp/Websitelaunch';
import Stories from './components/mainComp/Stories';
import Price from './components/mainComp/Price';
import Website from './components/mainComp/Website';
import Googlbusiness from './components/mainComp/Googlbusiness';
import Sellproduct from './components/mainComp/Sellproduct';
import Socialmedia from './components/mainComp/Socialmedia';
import Targetadv from './components/mainComp/Targetadv';
import Growbusiness from './components/mainComp/Growbusiness';
import Login from './components/mainComp/Login';
import Questions from './components/Questions';
import Policy from './components/Policy';
import Payment from './components/mainComp/Payment';
import Cart from './components/mainComp/Cart';
import Myaccount from './components/mainComp/Myaccount';
import Strip from './components/mainComp/Strip';
import SearchBar from './components/HighlightText';
import Core from './components/mainComp/Core';
import Ultra from './components/mainComp/Ultra';
import Test from './components/mainComp/Test';
import HighlightText from './components/HighlightText';
import React, {useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Plus from './components/mainComp/Plus';
import Superadmin from './components/mainComp/Superadmin';
import Getques from './components/mainComp/Getques';
function App() {
const stripePromise = loadStripe('pk_live_RQHG9tFepmWCQ6rtPMPSZ5n4');
const user = Cookies.getItem('websussUser')



  return (
   <>
   <Router>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home1/>}/>
     <Route path='about' element={<About/>} />
     <Route path='website-launch' element={<Websitelaunch/>} />
     <Route path='success-stories' element={<Stories/>} />
     <Route path='pricing' element={<Price/>} />
     <Route path='website' element={<Website/>} />
     <Route path='google-business-profile' element={<Googlbusiness/>}/>
     <Route path='sell-product-and-take-bookings' element={<Sellproduct/>}/>
     <Route path='social-media-promotion' element={<Socialmedia/>}/>
     <Route path='targeted-advertising' element={<Targetadv/>} />
     <Route path='grow-your-business' element={<Growbusiness/>}/>
     <Route path='faq' element={<Questions/>} />
     <Route path='login' element={<Login/>}/>
     <Route path='policy' element={<Policy/>}/>
     <Route path='cart' element={<Cart/>}/>
     <Route path='my-account' element={ <Myaccount/>}/>
     <Route path="super/admin" element={<Superadmin/>}/>
     <Route path='super/admin/details' element={<Getques/>}/>
     <Route path='payment' element={    
        <Elements stripe={stripePromise}>
        <Strip/>
      </Elements>}/>
      <Route path='test' element={<Test/>} />
      <Route path='core' element={ <Core/>}/>
      <Route path="plus" element={ <Plus/>}/>
      <Route path="ultra" element={ <Ultra/>}/>
    </Routes>
    <Footer/>
   </Router>
  

   </>
  );
}

export default App;
