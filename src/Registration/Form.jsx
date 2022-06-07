import React, { useState,useEffect } from 'react';
import './Form.css';
import {BiToggleRight} from 'react-icons/bi';
import {AnimatePresence,motion} from 'framer-motion/dist/framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {register,loogin} from './api/api.js';


const Form = (props) => {

const val={
  firstname:"",
  email:"",
  password:"",
  confirmpassword:"",
}
 const[login,setlogin]=useState(true);
 const[values,setvalues]=useState(val);
 const log=()=>{
   setlogin(!login);
   props.value();

 }
 
 const pickval=(e)=>{
        setvalues({...values,[e.target.name]:e.target.value});
        console.log(values);
 }
 const reg=async()=>{
  
  const{ firstname,email,password,confirmpassword}=values;
       if(firstname&&email&&password&&confirmpassword){
            
           await register(values)
             .then(res=>{
            // const profile=res.data
            console.log(res.data)
            if(res.data.dat){
                toast.success("User Registered",{
               position:"top-center"
             })
             setlogin(!login)
             }
             else if(res.data.message==="Email already in use"){
               
               toast.warning("Email already in use",{
                 position:"top-center"
               })
               
              
             }
              else if(res.data.message==="Passwords should be same"){
               
               toast.warning("Passwords should be same",{
                 position:"top-center"
               })
              }
       });
       
       }
       else {
         toast.warning("Please Complete all fields",{
           position:"top-center"
         })
       }
   
   }
   const logins=async()=>{
  
 const{email,password}=values;
      // console.log(email);
         if(email&&!password){
           toast.warning("Please Enter the Password",{
             position:"top-center"
           });
           
         }
         if(!email&&password){
           toast.warning("Please Enter the email",{
             position:"top-center"
           });
         }
          //  setaccount("login");
           await loogin(values)
           .then(res=>{
               
            const profile=res.data.dat;
            localStorage.setItem("profile",JSON.stringify({profile}));
            window.localStorage.setItem("loggedin",true);
             console.log(res.data);
             if(res.data.dat){
             toast.success("Login Successful",{
               position:"top-center"
              
             })
            //  window.location.reload(true)
             props.homevalues();
             }
             else if(res.data.message==="incorrect password"){
               toast.warning("Enter the correct password",{
                 position:"top-center"
               })
             }
             else if(res.data.message==="user not registered"){
               toast.warning("user does not exist",{
                 position:"top-center"
               })
             }
              
              
           });
   
   }


  return (
    <>
   
   {
        login?
    <div className="container">
    <div className=" row justify-content-center">
        <br />
        <div className="col-5 margin ">
          <AnimatePresence>
    <motion.div className="card ml-4"
    key="login"
    initial={{width:0}}
    animate={{width:"100%",transition:{duration:0.5}}}
    exit={{x:window.innerWidth,transition:{duration:0.3}}}
    >
        <div className="card-body">
            <h1 className="heading">Welcome Back!</h1>
            <div className="row">
                <div className="col-9">
                <span className="text-white sign ml-2">Don't have an account? Click here →</span>
                </div>
                <div className="col-3">
                  <label htmlFor="" className="switch"  onClick={log}>
                      <input type="checkbox" className="" />
                      <span className="slider round "></span>
                 </label>
                </div>
            </div>
            <input type="text" className="user mt-3" name="email" placeholder="email" onChange={pickval} /><br />
            <input type="password" className=" user mt-4" name="password" placeholder="password" onChange={pickval}/>
            <h1 className="text-center "><button className="btn login btn-lg  mt-3 mr-4" onClick={logins}>LOGIN</button></h1>
        </div>
        <br /><br />
        </motion.div>
       </AnimatePresence>
    </div>
    </div>
    </div>
    :
     <div className="container" >
    <div className=" row justify-content-center">
        <br />
        <div className="col-5 margin1 ">
<AnimatePresence>
    <motion.div className="card ml-4"
    key="signup"
    initial={{width:0}}
    animate={{width:"100%",transition:{duration:0.5}}}
    exit={{x:window.innerWidth,transition:{duration:0.5}}}

    
     >
        <div className="card-body">
            <h1 className="heading">Sign up</h1>
            <div className="row">
                <div className="col-9">
                <span className="text-white sign ml-2">Already have an account? Click here →</span>
                </div>
                <div className="col-3">
                  <label htmlFor="" className="switch"  onClick={log}>
                      <input type="checkbox" className="" />
                      <span className="slider round "></span>
                 </label>
                </div>
            </div>
            <input type="text" className=" user mt-3" name="firstname" onChange={pickval} placeholder="first name" data-aos="fade-right" />
            <input type="text" className=" user mt-4" name="email" onChange={pickval} placeholder="email"/>
            <input type="password" className=" user mt-3 " name="password" onChange={pickval} placeholder="password" />
            <input type="password" className=" user mt-4" name="confirmpassword" onChange={pickval} placeholder="confirm password"/>
            <h1 className="text-center "><button className="btn login btn-lg  mt-3 mr-2" onClick={reg}>SIGN UP</button></h1>
        </div>
        <br />
        </motion.div>
    </AnimatePresence>
    </div>
    </div>
   
    </div>
        
    
   
}
     <ToastContainer/>
     </>
  )
}

export default Form