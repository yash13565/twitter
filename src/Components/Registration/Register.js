import React, { useState,useEffect } from "react";
import style from "./Register.module.css";
import CustomButton from "../../Atom/CustomButton";
import { isValidEmail, isValidMobile, isValidString } from "../../helper";

import Input from "../../Atom/Input";
import { Link } from "react-router-dom";
import Dob from "../Dob/Dob";
function Register() {
  const [form, Setform] = useState(false);
  const [toggle, setToggle] = useState(false);
  const[name,setName]=useState('')
  const[phone,setPhone]=useState('')
  const[email,setEmail]=useState('')
  const [data ,setData]= useState([])
  const[npe,setNpe]=useState(true)
  useEffect(()=>{
    if(localStorage.getItem("userDetails")){
      let data= JSON.parse(localStorage.getItem("userDetails"))
      setData(data)
      console.log(data)
    }
    },[])
  function Form() {
    Setform(true);
  }
  function ToggleEU() {
    setToggle(!toggle);
  }
  function handleName(inputName)
  {
    setName(inputName)
  }
  function handleMobile(inputMobile)
  {
    setPhone(inputMobile)
  }
  function handleEmail(inputEmail)
  {
    setEmail(inputEmail)
  }
  function submitFunction()
  {
   const Data={
     Name: name,
      Phone:phone,
      Email:email
    }
    if(!isValidString(name))
    {
      alert("add proper Name")
      setNpe(false)
    }
    if(toggle===true)
    {
      if(!isValidMobile(phone))
      {
        alert("add proper PhoneNumber ")
        setNpe(false)
      }
    }
    else
    {
        if(!isValidEmail(email))
      {
        alert("Give correct email")
        setNpe(false)
      }
  }
  alert("succesfullly registred")
  if(npe===true){
 localStorage.setItem("user" , JSON.stringify(Data))

 }
 
 
  }
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.mainContainer}>
          {form ? (
            <>
              <div className={style.form}>
                <div>
                  <h1>Create your account</h1>
                </div>
                <div>
                  <Input className={style.input1} placeholder="Name" handleOnchange={handleName} />
                  <br />
                  <div className={style.toogleData}>
                    {toggle ? (
                      <>
                        <Input className={style.input2} placeholder="Phone"  handleOnchange={handleMobile} />
                      </>
                    ) : (
                      <>
                        <Input className={style.input2} placeholder="email" handleOnchange={handleEmail}/>
                      </>
                    )}
                    <span className={style.toggle} onClick={ToggleEU}>
                      {toggle ? (
                        <h6> Use Email instead </h6>
                      ) : (
                        <h6>Use Phone instead</h6>
                      )}
                    </span>
                    <div><h4 style={{color:'white'}}>Date of birth</h4>
                    <p style={{color:'grey',width:'27rem'}}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p></div>
                  </div>
                  <div>
                    
            <Dob />
                  </div>
                </div>
                <div>
                  <CustomButton
                    buttonText="Sign up"
                    customCss={style.formbtn}
                    btnNext={submitFunction}
                  ></CustomButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className={style.paraicon}>
                <i class="fa fa-brands fa-twitter"></i>
              </p>
              <h1>Join Twitter today</h1>
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-google"></i>}
                  buttonText="Sign in with google"
                  customCss={style.CustomButton1}
                ></CustomButton>
              </div>
              <br />
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-apple"></i>}
                  buttonText="Sign in with Apple"
                  customCss={style.CustomButton2}
                />
              </div>
              <div className={style.or}>
                <p className={style.line}>____</p>
                OR
                <p className={style.line}>____</p>
              </div>
              <div className={style.signupbtn}>
                <CustomButton
                  btnNext={Form}
                  buttonText="sign up with phone number or email"
                  customCss={style.CustomButton2}
                />
                <p>
                  By signing up, you agree to the Terms of Service <br />
                  and Privacy Policy, including Cookie Use.
                </p>
              </div>
              <div className={style.txt2}>
                Have an Account Already..? <Link style={{color:'white'}} to="/"> Log in</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;