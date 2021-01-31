import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setCurrent, temporaryDelete } from '../../actions/index'


const PotluckCard = (props) => {

   console.log("potluck card", props)
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
        <button onClick={() => props.temporaryDelete(props.item.id)}>Delete</button>
      </div>

    </FormWrapper>
  );
};


export default connect(null,{setCurrent, temporaryDelete})(PotluckCard);

const FormWrapper = styled.div`
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