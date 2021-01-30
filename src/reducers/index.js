import data from '../data'

const initialState = data;

// const initialState = {
//    potlucks : [
//       {
//          location: "",
//          date: "",
//          time: "",
//          invited: "",
//          appetizer: "",
//          salad: "",
//          main_dish: "",
//          dessert: "",
//          drinks:"",
//          utensils: "" 
//       },
//    ]
// }

export const potluckReducer = (state = initialState, action) => {

   switch (action.type) {

      default:
         return state;
   }

 };
 