import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from 'styled-components'
import { useForm } from '../../utils/useForm'

// REDUX
import { connect } from 'react-redux'
import { 
   temporaryAdd,
   temporaryEdit, 
   setCurrent, 
   clearCurrent } from '../../actions/index'


const initialFormState = {
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

const PotluckForm = (props) => {

  const { push } = useHistory();
  // useForm - custom hook
  const [values, setValues, handleChanges] = useForm(initialFormState);


   useEffect(() => {
      // DETERMINE WHETHER ITS AN ADD OR EDIT FORM
      if (props.state.current !== null) {
         setValues(props.state.current);
       } else {
         setValues(initialFormState);
       }
   }, [props.state,setValues]); // KEEP AN EYE ON THIS, CONCERNING "plantContext" from example



  const handleSubmit = (e) => {
      e.preventDefault();
      if (props.state.current === null) {
         // ***** "ADD" ACTIONS/REDUX CODE HERE ***** ALANNA
         props.temporaryAdd(values)
      } else {
         // ***** "EDIT" ACTIONS/REDUX CODE HERE ***** ALANNA
         props.temporaryEdit(values)
      }
      // RESET current in state
      props.clearCurrent();
      // RESET FORM
      setValues(initialFormState)
      
  };

  const clearAll = () => {
   props.clearCurrent();
   setValues(initialFormState)
  };


  return (
    <FormWrapper>
      <h2>{props.state.current ? 'Edit Potluck' : 'Create Potluck'}</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="location">
         <input
            type="text"
            name="location"
            onChange={handleChanges}
            placeholder="Location"
            value={values.location}
         />
        </label>
        <div className="baseline" />

        <label htmlFor="date">
         <input
            type="text"
            name="date"
            onChange={handleChanges}
            placeholder="Date"
            value={values.date}
         />
        </label>
         <div className="baseline" />

         <label htmlFor="time">
         <input
            type="text"
            name="time"
            onChange={handleChanges}
            placeholder="Time"
            value={values.time}
         />
        </label>
         <div className="baseline" />

         <label htmlFor="invited">
         <input
            type="text"
            name="invited"
            onChange={handleChanges}
            placeholder="Friends to Invite"
            value={values.invited}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="appetizer">
         <input
            type="text"
            name="appetizer"
            onChange={handleChanges}
            placeholder="Appetizer"
            value={values.appetizer}
         />
         </label>
         <div className="baseline" />
 
         <label htmlFor="salad">
         <input
            type="text"
            name="salad"
            onChange={handleChanges}
            placeholder="Salad"
            value={values.salad}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="main_dish">
         <input
            type="text"
            name="main_dish"
            onChange={handleChanges}
            placeholder="Main Dish"
            value={values.main_dish}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="dessert">
         <input
            type="text"
            name="dessert"
            onChange={handleChanges}
            placeholder="Dessert"
            value={values.dessert}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="drinks">
         <input
            type="text"
            name="drinks"
            onChange={handleChanges}
            placeholder="Drinks"
            value={values.drinks}
         />
         </label>
         <div className="baseline" />

         <label htmlFor="utensils">
         <input
            type="text"
            name="utensils"
            onChange={handleChanges}
            placeholder="Utensils"
            value={values.utensils}
         />
         </label>
         <div className="baseline" />

        <button 
            className="md-button form-button"   
            type='submit'>  
            {props.state.current ? 'Update Potluck' : 'Add Potluck'}
        </button>
        {props.state.current && (
         <div>
            <button onClick={props.clearCurrent}>
               Clear
            </button>
         </div>
        )}
      </form>
    </FormWrapper>
  );
};

const mapStateToProps = (state) => {
   return {state}
}

export default connect(mapStateToProps, {temporaryAdd, temporaryEdit, setCurrent, clearCurrent})(PotluckForm);


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
      margin: 12px 0 ;  // FORM MARGIN
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