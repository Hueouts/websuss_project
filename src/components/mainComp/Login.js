import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies'
import axios from 'axios'
import Country from '../Country';
export default function Login({btn}) {
  const [register, setRegister] = useState(false);
  const [ user, setuser] = useState();
  const [login, setLogin] = useState(true);
  const [seePass, setSeePass] = useState(false);
  const [code,setCode] = useState(false);
  const [codeValue, setCodeValue] = useState();
  const [ commingCode, setCommingCode] = useState()
   const [xtx, setXtx] = useState(btn);
   const [firstName, setFirstName]=useState();
   const [lastName, setLastName]=useState();
   const [email, setEmail]=useState();
   const [phoneNum, setPhoneNum] = useState();
   const [pass, setPass] = useState();
   const [mess,setMess] = useState();
   const [confirmPass, setConfirmPass] = useState();
  const [forget, setForget] = useState(false);
   const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (register){
      if(phoneNum){
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if(!phoneRegex.test(phoneNum)){
        setMess('enter valid phone number e.g. +1212555...')
        return;
      }
      }
      if (pass !== confirmPass){
        setMess("password and  confirm pass must be same")
        return;
      }
      const obj ={
        firstName:firstName,
        displayName:firstName,
        lastName:lastName,
        email:email,
        pass:pass,
      }
      
      const res = await axios.post('https:www.websuss.com/send-mail',obj);
      if(res.data.message === "exsist"){
        setMess('credential alredy exsist');
        return;
      }else{
        setCommingCode(res.data.vercode);
        setMess(null);
        setRegister(false);
        setLogin(false);
        setCode(true)
      }
      // console.log(res.data.vercode)
    
    }
    if(code){
        const obj ={
          firstName:firstName,
          displayName:firstName,
          lastName:lastName,
          email:email,
          pass:pass,
          phone:phoneNum
        }
      if(commingCode===codeValue){
        const res = await axios.post("https:www.websuss.com/register",obj);
        obj._id = res.data._id;
        Cookies.setItem("websussUser",JSON.stringify(obj));
        setMess("account has been successfully created")
        navigate('/pricing');
        setTimeout(()=>{
          window.location.reload()
        },800)
        return
      }
      else{
        setMess("Enter valid code")
      }
      return;
    }
    else if(!register && !code){
      const obj ={
        email:email,
        pass:pass,
      }
      const res = await axios.post("https:www.websuss.com/login",obj)
      if(res.data === "notfound"){
        setMess('Email or password is incorrect')
        return;
      }else{
        Cookies.setItem("websussUser",JSON.stringify(res.data));
        setuser(res.data)
        await axios.post(`https:www.websuss.com/order/${res.data._id}`)
        .then((x) => {
            if (x.data.order) {
                Cookies.setItem('websussOrder', JSON.stringify(x.data.result))
                return;
            }
        }).catch((err) => {
            console.log(err);
        });
        await axios.post(`https:www.websuss.com/subs-plan/${res.data._id}`)
                .then((x) => {
                    if (x.data.message === "success") {
                        Cookies.setItem('websussPlan', JSON.stringify(x.data.result))
                        return;
                    }
                }).catch((err) => {
                    console.log(err)
                })
        navigate('/pricing');
        setTimeout(()=>{
          window.location.reload();
        },500)
      }
    }


  }
  const handlereset = async(e)=>{
    e.preventDefault();
    if(pass !== confirmPass){
      setMess('password and confirm password must be same');
      return;
    }
    const obj ={
      email:email,
      pass:pass,
    }
    const res = await axios.post('https:www.websuss.com/updatepass',obj)
    if(res.data==="notfound"){
      setMess('user not found')
    }
    else{
      setMess("password updated successful")
      setTimeout(() => {
      setForget(!forget)
      setMess('')
      }, 1000);
    }
  }
  function form() {
    setRegister(!register);
  }
  return (<>  { btn ? (  
    <div className='login-top'>
  <div className='login'>
    <div className='hjj'>
    <button className='fa-close' onClick={()=>{ setXtx(!xtx); window.location.reload(); }}>
          <i className="fa-solid fa-xmark"></i>
          </button>
      <div className='login-form-container'>
        
        <div className='login-form flx-c'>
        {!forget && (  <div className='login-form-selector'>
            <button className={!register ? `login-select-btn` : null} onClick={form}>Login</button> 
            <button className={register ? `login-select-btn` : null} onClick={form}>Register</button>
            </div>)}
            {forget && (
            <>
            <div className='login-form-selector'><button className='login-select-btn'>Forget</button></div>
            <form onSubmit={handlereset} onChange={()=>{setMess('')}}>
            {mess && (<p className={mess !== "password updated successful" ? 'p-war' : "p-mes"}>{mess}</p>)}
            <div className='inpt'>
               <span>{!register ? <i className={"fa-solid fa-user-plus"}></i> : "@"}</span> 
               <input required type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder={!register ? "Username / Email" : 'Email'} /> 
              </div>
 
              <div className='inpt'>
              <span>
                <i className="fa-solid fa-key"></i></span>
                <input required onChange={(e)=>{setPass(e.target.value)}} type={seePass ? "text" : 'password'} placeholder='New Password' />
                <span onClick={() => { setSeePass(!seePass) }} className='eye'>
                  <i className={seePass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
                  </span>
                </div>
                <div className='inpt'> <span><i className="fa-solid fa-key"></i></span>
            <input type={seePass ? "text" : 'password'} onChange={(e)=>{setConfirmPass(e.target.value)}} placeholder='Confirm New Password' required />
            <span onClick={() => { setSeePass(!seePass) }} className='eye'>
              <i className={seePass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
              </span>
              </div>
              <button className='fgf' onClick={()=>{setForget(!forget)}}>login</button>
              <input className='login-btn' type='submit' value={"Reset"} />
            </form>
            </>
            )}
         {!forget && ( <form onSubmit={handlesubmit} onChange={()=>{setMess('')}} autoComplete='on'>
            {mess && (<p className={mess !== "account has been successfully created"  ? 'p-war' : "p-mes"}>{mess}</p>)}
               {code && (
                <div className='inpt'>
                  <input required type="text" placeholder='Enter Verification Code' onChange={(e)=>{setCodeValue(e.target.value)}} />
                </div>
               )}
            {register && (
              <div className='login-name flx-r'>
                <div className='inpt-name inpt'>
                  <span><i className="fa-solid fa-user"></i></span>
                   <input required type='text' onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name' />
                   </div>
                <div className='inpt-name inpt'> 
                <span><i className="fa-solid fa-user"></i></span> 
                <input required type='text'onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last Name' />
                </div>
              </div>)}
              
          {login && (  <div className='inpt'>
               <span>{!register ? <i className={"fa-solid fa-user-plus"}></i> : "@"}</span> 
               <input required type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder={!register ? "Username / Email" : 'Email'} /> 
               </div>)}
               {register && (
              <div className='inpt-name inpt'>
                <span><i className="fa-solid fa-phone"></i></span>
              <input required type="text" onChange={(e)=>{setPhoneNum(e.target.value)}} placeholder='Enter Phone Number e.g. +1212555...' />
               </div>  
               )}
          { login && ( 
             <div className='inpt'>
              <span>
                <i className="fa-solid fa-key"></i></span>
                <input required onChange={(e)=>{setPass(e.target.value)}} type={seePass ? "text" : 'password'} placeholder='Password' />
                <span onClick={() => { setSeePass(!seePass) }} className='eye'>
                  <i className={seePass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
                  </span>
                </div>)}
            {!register && (<div className='reminder'> 
            <span className='remind'><label for="check">
              <input name='check' id='check' className='inpt-check' type="checkbox" /> Remind me </label></span> 
                 <span onClick={()=>{setForget(!forget)}} className='forgot'>Forgot Password ?</span></div>
            )}        
                {register && (<div className='inpt'> <span><i className="fa-solid fa-key"></i></span>
            <input type={seePass ? "text" : 'password'} onChange={(e)=>{setConfirmPass(e.target.value)}} placeholder='Confirm Password' required />
            <span onClick={() => { setSeePass(!seePass) }} className='eye'>
              <i className={seePass ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i>
              </span>
              </div>)}
           {code ? <input className='login-btn' type='submit' value={"Verify"} />
            : <input className='login-btn' type='submit' value={!register ? "Login" : "Register"} />}
          </form>)}

        </div>
      </div>
    </div>
    </div>
    </div>) : <></>}
    </>

  )
}
