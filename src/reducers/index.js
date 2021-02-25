import data from '../data'
import { 
   TEMPORARY_ADD,
   TEMPORARY_EDIT,
   TEMPORARY_DELETE,
   SET_CURRENT,
   CLEAR_CURRENT 
 } from '../actions/index'

const initialState = data;

// const initialState = {
//    potlucks : [
//       {
//          id: null,
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
//    ],
//    current: null
// }

export const potluckReducer = (state = initialState, action) => {

   switch (action.type) {

      case TEMPORARY_ADD:
         return {...state, potlucks: [...state.potlucks, action.payload]}
      
      case TEMPORARY_EDIT:
         return {
            ...state, 
            potlucks: state.potlucks.map( potluck => 
               potluck.id === action.payload.id ? action.payload : potluck )
         }
      case TEMPORARY_DELETE:
         return {
            ...state,
            potlucks: state.potlucks.filter( potluck => 
               potluck.id !== action.payload),
         }
      
      case SET_CURRENT:
         return { ...state, current: action.payload }
      
      case CLEAR_CURRENT:
         return { ...state, current: null }

      default:
         return state;
   }

 };
 