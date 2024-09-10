import React from 'react'
import Cookies from 'js-cookies'

export default function Dashboard() {
    
    const user = JSON.parse(Cookies.getItem("websussUser"));
  return (
    <div className='dashboard-'>
       <div> <p>Hello {user ? `${user.firstName}` : "There"} (Not {user ? `${user.firstName}` : "You"} <button>Log Out</button>)</p>
        <p>From Your Account Dashboard You Can View Your <button>Recent Orders</button>, Manage Your <button>Shipping And Billing Addresses</button>, And <button>Edit Your Password And Account Details.</button></p>
    </div></div>
  )
}
