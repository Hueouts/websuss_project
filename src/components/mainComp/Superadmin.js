import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookies'
export default function Superadmin() {
    const [aPas, setAPas] = useState()
    const [acc, setAcc] = useState(true);
    const [user, setUser] = useState([]);
    const [subs, setSubs] = useState([]);
    const [plan, setPlan] = useState();
    const [newSubs, setNewSubs] = useState(subs)
    const admin = window.sessionStorage.getItem('admin')
    function check(e) {
        e.preventDefault();
        if (aPas === "We") {
            window.sessionStorage.setItem('admin', 'true')
            setAcc(false);
        }
    }
    async function checkSubs() {
        await axios.post('https:www.websuss.com/admin/subs')
            .then((x) => {
                // console.log(x.data);
                setSubs(x.data)
                setNewSubs(x.data)
            }).catch((err) => {
                console.log(err);
                setSubs([]);
            })
    }
    const openInNewTab = (path) => {
        const newWindow = window.open(path, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    async function fetuchUser() {
        setSubs([]);
        await axios.post('https:www.websuss.com/admin/user')
            .then((x) => {
                setUser(x.data);
            }).catch((err) => {
                console.log(err);
            })
    }
    function all(){
        setPlan(null)
        setNewSubs(subs)
    }
    function core(){
        setNewSubs(subs.filter((x)=>(x.plan === "core")))
        setPlan('Core')
    }
    function plus(){
        setNewSubs(subs.filter((x)=>(x.plan === "plus")))
        setPlan('Plus')
    }
    function ultra(){
        setNewSubs(subs.filter((x)=>(x.plan === "ultra")))
        setPlan('Ultra')
    }

    useEffect(() => {
        fetuchUser();
    }, [])
    return (
        <div className='main-admn'>
            {acc && (
                <div className='outer-pass'>
                    <div className='inner-pass'>
                        <input type="text" placeholder='Enter Acc pin' onChange={(e) => { setAPas(e.target.value); check(e) }} />
                    </div>
                </div>
            )}
            {!acc && (<div>
                <div className='flx-r info-sys'>
{subs[0] === undefined ? 
<span className='tth'> Total Users:  {user.length}</span> : 
<span className='tth'> 
Total Subscriptions: {subs.length}
<br/>
<>{ plan &&  (<>Total {plan} users: {newSubs.length}</>)}</>

</span>}
                <div>
                    {subs[0] === undefined ?
                        <button className='queryBtn' onClick={checkSubs}>Check Subscription</button>
                        :
                        (<>
                        <button className='queryBtn' onClick={fetuchUser}>Check Users </button>
                        <div className='filt'>filters:
                        <button className='filtb' onClick={all}>All</button> 
                        <button className='filtb' onClick={core}>Core</button>
                         <button className='filtb' onClick={plus}>Plus</button>
                          <button className='filtb' onClick={ultra}>Ultra</button> 
                          </div>
                        </>)}
                </div>
                </div>
                {subs[0] === undefined && (<table className='usr-tb'>

                    <tr>
                        <th>id</th>
                        <th>F_Name</th>
                        <th>L_Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    {user.map((x, index) =>
                    (<tr key={index}>
                        <td>{x._id}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td><a href={`mailto:${x.email}`}>{x.email}</a></td>
                        <td>{x.phone}</td>
                    </tr>
                    ))}
                </table>)}

                {
                    subs[0] !== undefined &&
                    (<div>
                        <table className='subs-tb'>
                            <tr>
                                <th>
                                    Plan_id
                                </th>
                                <th>
                                    user_id
                                </th>
                                <th>
                                    F_Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Plan
                                </th>
                                <th>
                                    Total_Amount
                                </th>
                                <th>
                                    User_Addr
                                </th>
                                <th>
                                    Order Date
                                </th>
                                <th>
                                    Expiry Date
                                </th>
                                <th>
                                    Check Details
                                </th>
                            </tr>
                            {
                                newSubs.map((x, index) => (
                                    <tr className='flx-r' key={index}>
                                        <td>
                                            {x._id}
                                        </td>
                                        <td>
                                            {x.user_id}
                                        </td>
                                        <td>
                                            {x.firstName}
                                        </td>
                                        <td>
                                            {x.email}
                                        </td>
                                        <td>
                                            {x.plan}
                                        </td>
                                        <td>
                                            {x.total_amount} $
                                        </td>
                                        <td>
                                            {x.addr}
                                        </td>
                                        <td>{x.order_date}</td>
                                        <td>{x.exp_date}</td>
                                        <td>
                                            <button className='queryBtn' onClick={
                                                ()=>{
                                                    openInNewTab(`/super/admin/details?id=${x.user_id}`)
                                                }
                                            }>
                                                View_Details
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                    )}
            </div>)}


        </div>
    )
}
