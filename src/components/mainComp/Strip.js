// Stripe.js

import React, { useState, useEffect } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Cardbrandicon from '../Cardbrandicon';
import Cookies from 'js-cookies'
import { useLocation } from 'react-router-dom';
import Country from '../Country';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const formatDate = (date) => {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};
const addOneYear = (date) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + 1);
  return newDate;
};
const Stripe = () => {
  const [cardBrand, setCardBrand] = useState('unknown');
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const { search } = useLocation();
  const user = JSON.parse(Cookies.getItem("websussUser"));
  const [firstName, setFirstname] = useState(user ? user.firstName || "" : null);
  const [lastName, setLastName] = useState(user ? user.lastName || "" : null);
  const [email, setEmail] = useState(user ? user.email || "" : null);
  const [ep,setep] = useState(false);
  const [ep1,setep1] = useState(false);
  const [stAddr, setStAddr] = useState();
  const [addInfo, setAddInfo] = useState();
  const [cardNum, setCardNUm] = useState();
  const [orderDate, setOrderDate] = useState();
  const [useId, setUseId] = useState()
  const [expDate, setExpDate] = useState();
  const [tAmount, setTAmount] = useState();
  const [phone, setPhone] = useState(user ? user.phone || "" : null);
  const [mess, setMess] = useState();
  const params = new URLSearchParams(search);

  const month = parseInt(params.get('check-m'));
  const year = parseInt(params.get('check-y'));
  const plany = params.get('plan');
   const [plan, setplan] = useState();
  const navigate = useNavigate();
  const nc= document.getElementById('cardNumber');
  useEffect(() => {
    const now = new Date();
    const dateFormatted = formatDate(now);
    setOrderDate(dateFormatted);
  }, []);
  useEffect(() => {
    if(plany === "zlm"){
      setplan("core");
      setTAmount(161);
      console.log(tAmount,plan)
      return;
    }
    if(plany === "yal"){
      setplan("plus");
      setTAmount(519);
      console.log(tAmount,plan)
      return;
    }
    if(plany === "lavy"){
      
      setplan("ultra");
      setTAmount(628)
      console.log(tAmount,plan)
      return;
    }
    else{
      setTAmount(1);
      setplan("/");
    }
  }, []);
  useEffect(()=>{
    
    const now = new Date();
    const nextYearDate = addOneYear(now);
    const dateFormatted = formatDate(nextYearDate);
    setExpDate(dateFormatted);
  },[])

  const stripe = useStripe();
  const elements = useElements();

  const handleCardNumberChange = (event) => {

    setCardBrand(event.brand || 'unknown');
    setMess('');
    if (event.complete) {
      console.log(nc)
      // setLastFourDigits(event.value.slice(-4));
    }
  };
  const handelcheck = ()=>{
    if(email){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!emailRegex.test(email)){
        setMess("enter a valid email")
        setep(true)
        return -1;
       }
    }
    if(phone){
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      console.log(!phoneRegex.test(phone))
      if(!phoneRegex.test(phone)){
        setMess('enter valid phone number e.g. +1212555...');
        setep1(true);
        return -1;
      }
    }
    if(!firstName || !lastName || !email || !phone || !stAddr){
  setMess('please prvide all details in Billing form')
  
      return -1;
} else{
  return 1;
}
  }
  async function postData() {
    
    const obj = {
      // card_num:String,
      add_info: addInfo,
      // user_id:useId,
      order_date: orderDate,
      exp_date: expDate,
      firstName: firstName,
      lastName: lastName,
      email: email,
      addr: stAddr,
      plan: plan,
      total_amount: tAmount,
      phone: phone
    }
    if (user) {
      obj.user_id = user._id;
    }
    else {
      const new_usr = {
        firstName: firstName,
        lastName: lastName,
        displayName: firstName,
        email: email,
        phone: phone,
        pass: "eroiorfr"
      }
      const res = await axios.post('https:www.websuss.com/register', new_usr);
      const x = JSON.stringify(res.data);
      Cookies.setItem('websussUser', x)
    
         const y =  JSON.parse(Cookies.getItem("websussUser"))
      obj.user_id = y._id;
    }
     await axios.post('https:www.websuss.com/send-subs', obj).then(async(c)=>{
      console.log(c)
     const y = JSON.parse(Cookies.getItem("websussUser"))
     if(c.data === "success"){
     console.log(y._id)
      await axios.post(`https:www.websuss.com/subs-plan/${y._id}`)
      .then((x) => {
          if (x.data.message === "success") {

              Cookies.setItem('websussPlan', JSON.stringify(x.data.result))
              Cookies.removeItem('cart')
              setTimeout(() => {
                navigate(`/${plan}`);
                }, 500);
              return;
          }
      }).catch((err) => {
          console.log(err)
      })
     }
     }).catch((err)=>{
      console.log(err)
     })
    
    // setLoading(true);rs
  
    
  }
  const handlePayment = async (event) => {
    event.preventDefault();
    handelcheck();
    if(handelcheck()===-1){
      return;
    }
    setLoading(true)
    try {
      
      const response = await axios.post(
        `https:www.websuss.com/intent`,
        {
          amount: month ?  (month + year) * 100 : 50,
        },
      );

      console.log(response)
      if (response.status == 200) {
        const confirmPayment = await stripe.confirmCardPayment(response.data.client_secret, {
          payment_method: {
            card: elements.getElement(CardNumberElement),
          },
        }
        );
        console.log(confirmPayment)
        setLoading(false);

        if (confirmPayment.error) {
          setMess('card declined');
          return;
        }
        if (confirmPayment.paymentIntent.status === "succeeded") {
          postData();
          setMess(`you have successfully subscribe our ${plan} plan `);  
     
        }
        else {
          console.log("payment failed")
          setMess('card declined')
        }
      }
    }
    catch (err) {
      console.log(err);
    }

  }
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <>
      <div className='checkout'>

        <div className='checkout-heading'><h2>CHECKOUT</h2></div>
        <div className='checkout-flx flx-r'>
          <div className='checkout-billing-detail'>
            <h3>BILLING DETAILS</h3>
            <div className='billing-detail-form'>
              <form >
                <div className=' billing-detail-name flx-r'>
                  <div>
                    <label>First Name <span>*</span></label><br />
                    <input type="text" value={firstName} onChange={
                      (e) => {
                        setFirstname(e.target.value);
                      }} />
                  </div><div>
                    <label>Last Name <span>*</span></label><br />
                    <input type="text" value={lastName} onChange={
                      (e) => {
                        setLastName(e.target.value);
                      }} />
                  </div>
                </div>
                <div className='billing-detail-input'><label>Email Address <span>*</span></label>
                  <br />
                  <input type='email' value={email} onChange={
                    (e) => {
                      setEmail(e.target.value);
                      setep(false)
                    }} />
                    {ep &&(<span className='p-war'>enter valid email address</span>)}
                </div >
                <div className='detail-form-select'>
                  <label>Country / Region <span>*</span></label><br />

                  <Country />

                </div>
                <div className='billing-detail-input'>
                  <label>
                    Street Address <span>*</span>
                  </label><br />
                  <input onChange={(e) => { setStAddr(e.target.value) }} type="text" placeholder='House Number And Street Address' />
                </div>
                <div className="billing-detail-input"><label>Contact Number<span>*</span></label><br />
                  <input type='text' value={phone} onChange={(e) => 
                 {
                   setPhone(e.target.value);
                    setep1(false);
                  }} 
                  placeholder='+12125551234'/>

                  {ep1 && (<span className='p-war'>enter valid phone number e.g. +1212555...</span>)}
                </div>
              </form>
              <h3>
                ADDITIONAL INFORMATION
              </h3>
              <div className='billing-detail-input additional-info'>
                <label>Order Notes (Optional)</label><br />
                <input type="text" onChange={(e) => { setAddInfo(e.target.value); }} placeholder='Notes about your order, e.g. special notes for delivery' />
              </div>
            </div>
          </div>
          <div className='checkout-card-details'>
            <h3>YOUR ORDER</h3>
            <div className='checkout-card-table'>
              <table>
                <thead>
                  <tr>
                    <th>
                      Product</th><th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>YEARLY ULTRA PLAN PRICE
                      × 1</td>
                    <td>$ {month ? month : 50}</td>
                  </tr>
                  <tr>
                    <td>YEARLY ULTRA PLAN SETUP FEES
                      × 1</td>
                    <td>$ {year ? year : 100}</td>
                  </tr>
                  <tr>
                    <td>
                      Subtotal

                    </td>
                    <td>$ {month ? year + month : 150}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$ {month ? year + month : 150}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='checkout-card-strip'>
              <span className='stripe-head'>Credit/Debit Card (Stripe)</span>
              <div className='strip'>
                <i class="fa-solid fa-caret-up"></i>

                <div className='strip-for'>
                  <form onSubmit={handlePayment} >
                    <div className='strip-for-in'>
                      <span>Pay With Your Credit/Debit Card Via Stripe.</span>
                      <div className="card-element-wrapper">
                        <label htmlFor="cardNumber">Card Number <span>*</span></label>
                        <div className="card-number-wrapper  crd-num">
                          <div className='csg'>
                            <CardNumberElement
                              id="cardNumber"
                              options={CARD_ELEMENT_OPTIONS}
                              onChange={handleCardNumberChange}
                            /></div>
                          <div className='crd'>
                            <img
                              src={Cardbrandicon[cardBrand]}
                              alt={cardBrand}
                              className="card-brand-icon"
                            /></div>
                        </div>
                      </div>
                      <div className='flx-r xps'>
                        <div className='flx-r ghj'>
                          <div className="card-element-wrapper card-element-exp-cvx">
                            <label htmlFor="expiryDate">Expiry Date <span>*</span></label>
                            <CardExpiryElement id="expiryDate" options={CARD_ELEMENT_OPTIONS} />
                          </div>
                          <div className="card-element-wrapper card-element-exp-cvx">
                            <label htmlFor="cvc">CVC <span>*</span></label>
                            <CardCvcElement id="cvc" options={CARD_ELEMENT_OPTIONS} />
                          </div>
                        </div>
                      </div>
                      <span>{mess}</span>
                    </div>
                    <p>
                      Payment Will Be Automaticaaly Deducted After
                      The Completion Of Your Selected Package Duration.
                      In Order To Cancel The Auto-Payment, Please Unsubscribe.
                    </p>
                    <button type="submit" >
                      {loading ? 'Processing...' : 'Place Order'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Stripe;
