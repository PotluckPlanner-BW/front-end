import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from '../../utils/AxiosWithAuth'
import styled from 'styled-components'

import * as yup from 'yup'

const potluckState = {
   location: "",
   date: "",
   time: "",
   invited: "",
   appetizer: "",
   salad: "",
   main_dish: "",
   dessert: "",
   drinks:"",
   utensils: "" 
}

const errorState = {
   location: "",
   date: "",
   time: ""
 }

const formSchema = yup.object().shape( {
   location: yup.string()
      .required("Location is Required"),
   date: yup.string()
      .required("Date is Required"),   
   time: yup.string()
      .required("Time is Required"),        
  
} ) 

const PotluckForm = (props) => {

  const { push } = useHistory();

  const [potluckForm, setPotluckForm] = useState(potluckState);
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
      formSchema.isValid(potluckForm)
      .then(valid => {
         setButtonState(!valid); // don't hardcode - base on value returned
      });
   }, [potluckForm]);


  const changeHandler = (ev) => {
      ev.persist();
      validate(ev);
      setPotluckForm( {...potluckForm, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
      axiosWithAuth().post("/foo-bar", potluckForm)
      .then((res) => {            
         window.localStorage.setItem("token", res.data.payload);
         push("/foo-bar");
      })
      .catch((err) => console.log(err));
  };

  // YUP INLINE STYLES
  let yupStyling = { 
     color: 'red', 
     fontSize: '.8rem',
     fontWeight: 'bold',
     margin: 0 }

  return (
    <FormWrapper>
      <h2>Create Potluck</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="location">
         <input
            type="text"
            name="location"
            onChange={changeHandler}
            placeholder="Location"
            value={potluckForm.location}
         />
         { ( errorForm.location.length > 0 ) 
                  ? <p style={yupStyling}>{errorForm.location}</p> 
                  : null }
        </label>
        <div className="baseline" />

        <label htmlFor="date">
         <input
            type="text"
            name="date"
            onChange={changeHandler}
            placeholder="Date"
            value={potluckForm.date}
         />
         { (errorForm.date.length > 0) ? <p style={yupStyling}>{errorForm.date}</p> : null }
        </label>
         <div className="baseline" />

         <label htmlFor="time">
         <input
            type="text"
            name="time"
            onChange={changeHandler}
            placeholder="Time"
            value={potluckForm.time}
         />
         { (errorForm.time.length > 0) ? <p style={yupStyling}>{errorForm.time}</p> : null }
        </label>
         <div className="baseline" />

         <label htmlFor="invited">
         <input
            type="text"
            name="invited"
            onChange={changeHandler}
            placeholder="Friends to Invite"
            value={potluckForm.invited}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="appetizer">
         <input
            type="text"
            name="appetizer"
            onChange={changeHandler}
            placeholder="Appetizer"
            value={potluckForm.appetizer}
         />
         </label>
         <div className="baseline" />
 
         <label htmlFor="salad">
         <input
            type="text"
            name="salad"
            onChange={changeHandler}
            placeholder="Salad"
            value={potluckForm.salad}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="main_dish">
         <input
            type="text"
            name="main_dish"
            onChange={changeHandler}
            placeholder="Main Dish"
            value={potluckForm.main_dish}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="dessert">
         <input
            type="text"
            name="dessert"
            onChange={changeHandler}
            placeholder="Dessert"
            value={potluckForm.dessert}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="drinks">
         <input
            type="text"
            name="drinks"
            onChange={changeHandler}
            placeholder="Drinks"
            value={potluckForm.drinks}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="utensils">
         <input
            type="text"
            name="utensils"
            onChange={changeHandler}
            placeholder="Utensils"
            value={potluckForm.utensils}
         />
         </label>
         <div className="baseline" />

        <button className="md-button form-button" disabled={buttonState}>Add Potluck</button>
      </form>
    </FormWrapper>
  );
};

export default PotluckForm;


const FormWrapper = styled.div`
   width: 50%;

   form{
      margin: 0 auto;
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
      height: 30px;
      width: 300px;
      font-weight: 900;
      padding: 0 8px;
      color: #1c5d76;
      margin: 0 auto;
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
      background-color: #1c5d76;
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

`;