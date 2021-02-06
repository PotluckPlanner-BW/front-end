import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from '../../utils/AxiosWithAuth'
import styled from 'styled-components'

import * as yup from 'yup'

//images
//resoruces
import bgImageDesktop from '../../images/register-bg-hero-desktop.svg';
import breakpoint from '../../styles/breakpoints';
import bgImage from '../../images/register-bg-hero.svg';

const registerState = {
  username: "",
  password: ""
}

const errorState = {
   username: "",
   password: ""
 }


const formSchema = yup.object().shape( {
   username: yup.string()
      .required("Name is Required"),
   password: yup.string()
      .required('Password is Required') 
      .min(8, 'Requires 8 characters minimum')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
      'Minimum : 1 Letter, 1 Number, 1 Special Character'),
} ) 


const RegisterForm = (props) => {

  const { push } = useHistory();

  const [registerForm, setRegisterForm] = useState(registerState);
  const [errorForm, setErrorForm] = useState(errorState); 
  const [buttonState, setButtonState] = useState(true);

  const validate = (e) => {

      yup.reach( formSchema, e.target.name )
         .validate(e.target.value)
            .then( (validation) => {
               setErrorForm({
                  ...errorForm,
                  [e.target.name]: "" //set as empty string - clear when valid
               })
            })
            .catch( (err) => {
               setErrorForm({
                  ...errorForm,
                  [e.target.name]: err.errors[0]
               })
            })
   }

   // BUTTON-------------------------
   useEffect(() => {
      formSchema.isValid(registerForm)
      .then(valid => {
         setButtonState(!valid); 
      });
   }, [registerForm]);


  const changeHandler = (ev) => {
      ev.persist();
      validate(ev);
      setRegisterForm( {...registerForm, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
   
      axiosWithAuth().post("/register", registerForm)
      .then((res) => {            
         window.localStorage.setItem("token", res.data.payload);
         push("/foo-bar");
      })
      .catch((err) => console.log(err));
  };

  // YUP INLINE STYLES FOR ERROR MESSAGE
  let yupStyling = { 
     color: 'red', 
     fontSize: '.8rem',
     fontWeight: 'bold',
     margin: 0 }

  return (
    <FormWrapper>
       <ImageDiv>
         <img src={bgImage} alt=''/>
      </ImageDiv>
      <div className='form-wrapper'>
         <div>
         <h2>Register for an account.</h2>
         <form onSubmit={handleSubmit}>

         <label htmlFor="name">
            <input
               type="text"
               name="username"
               onChange={changeHandler}
               placeholder="Name"
               value={registerForm.username}
            />
            { ( errorForm.username.length > 0 ) 
                     ? <p style={yupStyling}>{errorForm.username}</p> 
                     : null }
         </label>
         <div className="baseline" />

         <label htmlFor="password">
            <input
               type="password"
               name="password"
               onChange={changeHandler}
               placeholder="Password"
               value={registerForm.password}
            />
            { (errorForm.password.length > 0) ? <p style={yupStyling}>{errorForm.password}</p> : null }
         </label>
         
            <div className="baseline" />

         <button className="md-button form-button" disabled={buttonState}>Register</button>
         <Link className="register-link" to="/login">Already have an account?</Link>
         </form>
         </div>
      </div>
      <div className='desktop-hero-image'></div>
    </FormWrapper>
  );
};

export default RegisterForm;


const ImageDiv = styled.div`
   position: relative;

   img {
      width: 200px;
   }

   @media only screen and ${breakpoint.device.desktop}{
      position: relative;

      img {
         display: none;
      }
   }
`;

const FormWrapper = styled.div`

@media only screen and ${breakpoint.device.mobile}{
   background-color: #F7FAFB;
   height: 82vh;
   padding-top: 50px;
   height: 85vh;

   form{
      margin: 0 auto;
      width: 300px;
   }
   h2 {
      color: #22BEAD;
   }
   input{
      border: 0;
      outline: none;
   }
   a{
      display: block;
      color: #1c5d76;  
      font-weight: bold; 
   }
   
   // BASELINE CLASS=========================================================
   
   .baseline,
   input {
      background-color: #fff;
      font-size: 16px;
      height: 45px;
      width: 300px;
      padding: 0 8px;
      color: #22BEAD;
   }
   .baseline {
      height: 3px;
      background-color: #dcdcdc;
   }

   /*********** Hover.css > Underline From Left > Modified *******************/
   .baseline {
      -webkit-transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      display: block;
      /*display: inline-block;*/
      overflow: hidden;
      position: relative;
      transform: perspective(1px) translateZ(0);
   /***************** vertical-align: middle;**************************/
   }
   .baseline:before {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      right: 100%;
      bottom: 0;
      background: #1c5d76;
      height: 4px;
      -webkit-transition-property: right;
      transition-property: right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
   }
   .baseline:hover:before,
   .baseline:focus:before,
   .baseline:active:before {
       right: 0;
   }

   /************ Crucial style rule ******************/
   input:focus + .baseline:before {
      right: 0;
   }

   // BUTTON=======================================
   button{
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      margin: 24px 0 ;  // FORM MARGIN
      border: none;
      border-radius: 2px;
      padding: 0 16px;
      min-width: 64px;
      height: 36px;
      vertical-align: middle;
      text-align: center;
      text-overflow: ellipsis;
      text-transform: uppercase;
      color: #fff;
      background-color: #F6B394;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
         0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      font-family: 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui,
         -apple-system;
      font-size: 14px;
      font-weight: 500;
      line-height: 36px;
      overflow: hidden;
      outline: none;
      cursor: pointer;
      transition: box-shadow 0.2s;
   }
   button:hover,
   button:focus {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
         0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   }

   button:active {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
         0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
   }

   button:disabled {
      color: rgba(0, 0, 0, 0.38);
      background-color: rgba(0, 0, 0, 0.12);
      box-shadow: none;
      cursor: initial;
   }

   button::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: currentColor;
      opacity: 0;
      transition: opacity 0.2s;
   }

   button:hover::before {
      opacity: 0.12;
   }

   button:focus::before {
      opacity: 0.2;
   }

   button:active::before {
      opacity: 0.32;
   }

   button:disabled::before {
      opacity: 0;
   }

   button::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 18px;
      border-radius: 50%;
      padding: 50%;
      width: 32px;
      height: 32px;
      background-color: currentColor;
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
      transition: opacity 1s, transform 0.5s;
   }

   button:active::after {
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0s;
   }

   button:disabled::after {
      opacity: 0;
   }

   .register-link{
      color: #22BEAD;
      text-decoration: none;
   }
}

@media only screen and ${breakpoint.device.desktop}{
   height: 95vh;
   display: flex;
   padding-top: 0px;

   

   .desktop-hero-image {
      display: block;
      width: 50%;
      margin: auto;
      background-color: #E8F3F3;
      background-image: url(${bgImageDesktop});
      height: 95vh; /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: repeat; /* Do not repeat the image */
      background-size: cover; /
      height: 90vh;
   }

   .form-wrapper {
      width: 50%;
      display: grid;
      place-items: center;
   }
}
`;