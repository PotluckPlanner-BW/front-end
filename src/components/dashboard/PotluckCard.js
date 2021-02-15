import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCurrent, temporaryDelete } from '../../actions/index';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import breakpoint from '../../breakpoint';


const PotluckCard = (props) => {

   console.log("potluck card", props);
   const history = useHistory();

   // if (!props.items.length || !item) {
   //    return <h2>Retrieving your potluck...</h2>;
   // };


   /*
   TO REPLACE TEMPORARY EDIT - ALANNA

   const updateHandler = () => {
      history.push(``)
   }
   */


   /*
   TO REPLACE TEMPORARY DELETE - ALANNA

   const deleteHandler = () => {
      axios.delete(``)
         .then( res => {
            props.deleteItem(res.[data])
            history.push('')//return user to specific page once successful
         })
         .catch( err => {
            console.log(err);
         })
   }
   
   */

  return (
    <FormWrapper>
      <h3>{props.item.location}</h3>
      <p>Date: {props.item.date}</p>
      <p>Time: {props.item.time}</p>
      <p>Invites: {props.item.invited}</p>
      <ItemDisplay>
         <div className="card-one">
            <p>Appetizer: {props.item.appetizer}</p>
            <p>Salad: {props.item.salad}</p>
            <p>Main Dish: {props.item.main_dish}</p>
         </div>
         <div className="card-two">
            <p>Dessert: {props.item.dessert}</p>
            <p>Drinks: {props.item.drinks}</p>
            <p>Utensils: {props.item.utensils}</p>
         </div>
      </ItemDisplay>
      <div>
        <button className='edit' onClick={() => props.setCurrent(props.item)}>Edit</button>
        <button className='delete' onClick={() => props.temporaryDelete(props.item.id)}>Delete</button>
      </div>

    </FormWrapper>
  );
};


export default connect(null,{setCurrent, temporaryDelete})(PotluckCard);

const FormWrapper = styled.div`
   border-radius: 25px;
   box-shadow: 3px 3px 5px gray;
   background-color: #FFF;
   width: 80%;
   margin: 10px auto;
   padding: 10px;
   margin-bottom: 50px;
   

   button {
      padding:  15px 30px;
      border-radius: 25px;
      border: none;
      margin: 20px 15px;
   }

   .edit {
      background-color: #FFF4E6;
   }
   .delete {
      background-color: crimson;
      color: #FFF;
   }
   @media only screen and ${breakpoint.device.tablet} {
      //background-color: yellow;
   }

   @media only screen and ${breakpoint.device.desktop} {
      //background-color: red;
   }
`;

const ItemDisplay = styled.div`
   display: flex;
   
   .card-one{
      width: 50%;
   }
   .card-two{
      width: 50%;
   }

`;