import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Country from '../Country';
export default function Payment() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const month = parseInt(params.get('check-m'));
  const year = parseInt(params.get('check-y'));
  const plan = params.get('plan')

  useEffect(() => {
    console.log(month, year, plan)
  }, [month, plan, year])
  return (
    <div className='checkout'>
    
      <div className='checkout-heading'><h2>CHECKOUT</h2></div>
      <div className='checkout-flx flx-r'>
        <div className='checkout-billing-detail'>
          <h3>BILLING DETAILS</h3>
          <div className='billing-detail-form'>
            <form>
              <div className=' billing-detail-name flx-r'>
                <div>
                  <label>First Name <span>*</span></label><br />
                  <input type="text" />
                </div><div>
                  <label>Last Name <span>*</span></label><br />
                  <input type="text" />
                </div>
              </div>
              <div className='billing-detail-input'><label>Email Address <span>*</span></label><br />
                <input type='email' />
              </div >
              <div className='detail-form-select'>
                <label>Country / Region <span>*</span></label><br />
               
                <Country/>
              
              </div>
              <div className='billing-detail-input'>
                <label>
                  Street Address <span>*</span>
                </label><br />
                <input type="text" placeholder='House NUmber And Street Address' />
              </div>
              <div className="billing-detail-input"><label>Create a Password<span>*</span></label><br />
                <input type='Password' />
              </div>
            </form>
            <h3>
              ADDITIONAL INFORMATION
            </h3>
            <div className='billing-detail-input additional-info'>
              <label>Order Notes (Optional)</label><br />
              <input type="text" placeholder='Notes about your order, e.g. special notes for delivery' />
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
                  <td>$ {month}</td>
                </tr>
                <tr>
                  <td>YEARLY ULTRA PLAN SETUP FEES
                    × 1</td>
                  <td>$ {year}</td>
                </tr>
                <tr>
                  <td>
                    Subtotal

                  </td>
                  <td>$ {year + month}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$ {year + month}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='checkout-card-strip'>
            <span className='stripe-head'>Credit/Debit Card (Stripe)</span>
            <div className='strip'>
            <i class="fa-solid fa-caret-up"></i>
              <span>Pay With Your Credit/Debit Card Via Stripe.</span>
              <form className='flx-c strip-form '>
                <div className='card-num'> <label for="card-num" >Card Number <span>*</span></label><br />
                  <input type="text" id='card-num' placeholder='1234 1234 1234' />
                </div>
                <div className='flx-r stip-exp'>
                  <div><label for="card-exp" >Expiry Date <span>*</span></label><br />
                    <input type="text" id='card-exp' placeholder='MM/YY' />
                  </div>
                  <div>
                    <label for="card-cvc" >Card Code(CVC) <span>*</span></label><br />
                    <input type="text" id='card-cvc' placeholder='CVC' />
                  </div>
                </div>

              </form>
              </div>
            <p>Payment Will Be Automaticaaly Deducted After The Completion Of
              Your Selected Package Duration. In Order To Cancel The Auto-Payment,
              Please Unsubscribe.</p>
            <div className='cart-place'>
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
