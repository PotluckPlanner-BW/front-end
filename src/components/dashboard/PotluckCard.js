import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setCurrent, deletePotluck } from '../../actions/index';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


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
        <button onClick={() => props.setCurrent(props.item)}>Edit</button>
        <button onClick={() => props.deletePotluck(props.item.id)}>Delete</button>
      </div>

    </FormWrapper>
  );
};


export default connect( null, { setCurrent, deletePotluck } )(PotluckCard);

const FormWrapper = styled.div`
   border-radius: 25px;
   border: 1px solid gray;
   box-shadow: 3px 3px 5px gray;
   width: 80%;
   margin: 10px auto;
   padding: 10px;

   button{
      padding:  5px 10px;
      margin: 0 3px;
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