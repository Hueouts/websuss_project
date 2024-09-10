import React,{useEffect, useState} from 'react'
import Cookies from 'js-cookies'
import { useNavigate } from 'react-router-dom'
import { json } from 'react-router-dom'
export default function Cart() {
    const cart1 = Cookies.getItem('cart')
    const cart = JSON.parse(cart1)
    const navigate = useNavigate();
    const [del,setDel] = useState(false);
    useEffect(()=>{
        document.title="Websuss || Cart"
      },[])
    // useEffect(()=>{console.log( "cart");})
    return (
        <div className='cart'>
            <div className='cart-heading'><h2>Cart</h2></div>
            <div className='cart-table'>
                <table>
                    <thead>
                        <tr>
                           <th></th> <th>PRODUCT</th><th></th><th>PRICE</th><th>QUANTITY</th><th>SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className='cross-btt' onClick={()=>{
                                Cookies.removeItem('cart');
                                setDel(true)
                             setTimeout(() => {
                                navigate('/');
                            }, 1000);}}><i className="fa-solid fa-x"></i></button></td><td>{del ? "order deleted" : "" }</td>  <td>YEARLY CORE PLAN PRICE</td><td>	$ 1 / YEARS FOR 1 YEARS</td> <td>1</td> <td>$ {cart ? cart.price : 0}</td>
                        </tr>
                    <tr className='cart-coupn '> <td colSpan="5"> <div className='cart-coupn-code'><input type="text" placeholder='Coupon Code' /> <button>Apply Coupon</button></div> </td> <td><button disabled>Update Cart</button></td></tr>
                     
                    </tbody>
                </table>
            </div>
            <div className='cart-table2-out'>
            <div className='cart-table2'>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">CART TOTALS</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr> <td>
                                SUBTOTAL</td> <td>	$ {cart ? cart.price : 0}</td></tr>
                                <tr>
                                    <td>
                                TOTAL</td> <td>	$ {cart ? cart.price : 0}</td></tr>
                              <tr><td  className="proceed-check" colSpan="2">  <button>PROCEED TO CHECKOUT</button></td></tr>
                        </tbody>
                    
                </table>
            </div>
            </div>
        </div>
    )
}
