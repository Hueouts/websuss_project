import React, { useState} from 'react'
import Cookies from 'js-cookies'
import axios from 'axios';
export default function Detailform() {
    const user = JSON.parse(Cookies.getItem('websussUser'));
    // =======================userWarning====================//
    const [success, setSuccess] = useState(false);
    const [correctPass, setCorrectPass] = useState(false);
    const [newPass, setNewPass] = useState(false);
    const [newPass2, setNewPass2] = useState(false);
    const [newPass3, setNewPass3] = useState(false);
    const [newPass4, setNewPass4] = useState(false);
    const [confirmPass, setConfirmPass] = useState(false);
    const [passToString1, setPassToString1] = useState(false);
    const [passToString2, setPassToString2] = useState(false);
    const [passToString3, setPassToString3] = useState(false);
    // =======================Values=======================//
    const [firstName, setFirstName] = useState(user ? user.firstName || '' : null);
    const [lastName, setLastName] = useState(user ? user.lastName || '' : null);
    const [displayName, setDisplayName] = useState(user ? user.displayName || '' : null);
    const [email, setEmail] = useState(user ? user.email || '' : null);
    const [pass, setpass] = useState();
    const [newPassValue, setNewPassValue] = useState();
    const [confirmNewPass, setConfirmNewPass] = useState();
    const hasUppercase = /[A-Z]/.test(newPassValue);
    const hasLowercase = /[a-z]/.test(newPassValue);
    const hasNumber = /\d/.test(newPassValue);
    const hasSymbol = /[^\w\s]/.test(newPassValue);

    // =====================passToString=================//
    function passtostr1() {
        setPassToString1(!passToString1)
    }
    function passtostr2() {
        setPassToString2(!passToString2)
    }
    function passtostr3() {
        setPassToString3(!passToString3)
    }
    const passCheck = () => {
        if (newPassValue) {
            if (newPassValue.length < 4 && newPassValue.length > 0  ) {
                setNewPass(true);
                setNewPass2(false);
                setNewPass3(false);
                setNewPass4(false);
                return;
            }
          else  if( !hasNumber || !hasLowercase || !hasUppercase ||  !hasSymbol){
            setNewPass(false);
            setNewPass2(true);
            setNewPass3(false);
            setNewPass4(false);
            }
            else if(newPassValue.length < 7){
                setNewPass(false);
                setNewPass2(false);
                setNewPass3(true);
                setNewPass4(false);
            }
            else if(newPassValue.length > 6){
                setNewPass(false);
                setNewPass2(false);
                setNewPass3(false);
                setNewPass4(true);
            }
            else {
                setNewPass(false);
                setNewPass2(false);
                setNewPass3(false);
                setNewPass4(false);
            }
        }
    }
    const handelSubmit = async(e) => {
        e.preventDefault();

          
        const obj =  newPassValue ?
         { 
            firstName: firstName,
            lastName: lastName,
            displayName:displayName,
            email: email,
            pass:newPassValue,
            old_pass:pass
        }:{  _id:user._id,
            firstName: firstName,
            lastName: lastName,
            displayName:displayName,
            email: email,
        } 
    
        if(newPassValue !== confirmNewPass){
            setConfirmPass(true);
            return;
        }
        if(!newPassValue){
            const res= await axios.put(`https:www.websuss.com/update/${user._id}`,obj)
            .then((re)=>{
                Cookies.setItem('websussUser',JSON.stringify(re.data));
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            })
            .catch((err)=>{console.log(err)})
            return;
        } else {
            const res= await axios.put(`https:www.websuss.com/pass/${user._id}`,obj)
            .then((re)=>{
                if(re.data === "mismatch"){
                    setCorrectPass(true);
                    return;
                }
                Cookies.setItem('websussUser',JSON.stringify(re.data));
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            })
            .catch((err)=>{console.log(err)})
        }
        
        
    }
    return (
        <div className='reset-account'>

            {success && (<div className='updated-message flx-r'>
                <i className="fa-solid fa-circle-check"></i>
                <p>
                    ACCOUNT DETAILS CHANGED SUCCESSFULLY.
                </p>
            </div>)}
            <form onSubmit={handelSubmit}>
                <div className='reset-form'>
                    <div className='flx-r reset-name'>

                        <div>
                            <label >
                                First Name <span>*</span>
                            </label><br />
                            <input type="text" 
                            value={firstName}
                             onChange={(e) => { setFirstName(e.target.value) }} 
                             />
                        </div>
                        <div>
                            <label>
                                Last Name <span>*</span>
                            </label>
                            <br />
                            <input type="text"
                             value={lastName}
                            //   onChange={(e) => { setLastName(e.target.value) }}
                               />
                        </div>
                    </div>
                    <div className='reset-display-name'>
                        <label>
                            Display Name <span>*</span>
                        </label><br />
                        <input type="text"
                         value={displayName}
                          onChange={(e) => { setDisplayName(e.target.value) }}
                           />
                        <p>This Will Be How Your Name Will Be Displayed In The Account Section And In Reviews</p>
                    </div>
                    <div className='reset-email'>
                        <label>
                            Email <span>*</span>
                        </label><br />
                        <input type="email"
                         value={email}
                         readOnly
                        //   onChange={(e) => { setEmail(e.target.value) }}
                           />
                    </div>
                    <div className='reset-password'>
                        <legend>PASSWORD CHANGE</legend>
                        <div className='reset-current-pass'>
                            <label>Current Password (Leave Blank To Leave Unchanged)</label>
                            <br />
                            <div> <input type={passToString1 ? "text" : "password"}
                             onChange={(e) => { 
                                setpass(e.target.value);
                                setCorrectPass(false);
                                  }} />
                                <div key={"1"} className='i' onClick={passtostr1}><i className={!passToString1 ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i></div></div>
                            {correctPass && (<p className='new-pass-warn-p1'>Enter Correct Password</p>)}
                        </div>
                        <div className='reset-new-pass'>
                            <label>New Password (Leave Blank To Leave Unchanged)</label>
                            <br />
                            <div> <input type={passToString2 ? "text" : "password"}
                                onChange={
                                    (e) => {
                                        setNewPassValue(e.target.value);
                                        passCheck();
                                    }} />
                                <div key={"2"} className='i' onClick={passtostr2} ><i className={!passToString2 ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i></div></div>
                            {newPass && (
                                <div className='new-pass-warn'>
                                    <p className='new-pass-warn-p1'>
                                        Very Weak - Please Enter A Stronger Password.
                                    </p>

                                    <p className='new-pass-warn-p2'>
                                        Hint: The Password Should Be At Least Twelve Characters Long. To Make It Stronger, Use Upper And Lower Case Letters, Numbers, And Symbols Like ! " ? $ % ^ & ).
                                    </p>
                                </div>)}
                                {newPass2 && (
                                <div className='new-pass-warn'>
                                    <p className='new-pass-warn-p11 new-pass-warn-p1'>
                                     Weak - Please Enter A Stronger Password.
                                    </p>

                                    <p className='new-pass-warn-p2'>
                                        Hint: The Password Should Be At Least Twelve Characters Long. To Make It Stronger, Use Upper And Lower Case Letters, Numbers, And Symbols Like ! " ? $ % ^ & ).
                                    </p>
                                </div>)}
                                {newPass3 && (
                                <div className='new-pass-warn'>
                                    <p className='new-pass-warn-p111 new-pass-warn-p1'>
                                     Medium
                                    </p>

                                </div>)}
                                {newPass4 && (
                                <div className='new-pass-warn'>
                                    <p className='new-pass-warn-p1V new-pass-warn-p1'>
                                     Strong
                                    </p>

                                </div>)}
                        </div>
                        <div className='reset-confirm-pass'>
                            <label>Confirm New Password</label>
                            <br />
                            <div>
                                <input type={passToString3 ? "text" : "password"} onChange={(e) => {
                                     setConfirmNewPass(e.target.value);
                                    setConfirmPass(false);
                                 }} />
                                <div key={"3"} className='i' onClick={passtostr3}><i className={!passToString3 ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i></div>
                            </div>
                            {confirmPass && (<p className='new-pass-warn-p1'>Password and Confirm Password must be same</p>)}
                        </div>
                    </div>
                    <div className='reset-submit-btn'><button type='submit'>save changes</button>
                    </div>

                </div> </form>
        </div>
    )
}
