import data from '../data'
import { 
   // TEMPORARY_ADD,
   // TEMPORARY_EDIT,
   // TEMPORARY_DELETE,
   GET_POTLUCKS,
   ADD_POTLUCK,
   EDIT_POTLUCK,
   DELETE_POTLUCK,
   SET_CURRENT,
   CLEAR_CURRENT 
 } from '../actions/index'

//const initialState = data;

const initialState = {
   potlucks : [
      {
         id: null,
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
      },
   ],
   current: null
}

export const potluckReducer = (state = initialState, action) => {

   switch (action.type) {

      
      case GET_POTLUCKS:
         return {...state, potlucks: [...action.payload]} // THIS MAY NEED TO BE CORRECTED

      case ADD_POTLUCK:
         return {...state, potlucks: [...state.potlucks, action.payload]}
      
      case EDIT_POTLUCK:
         return {
            ...state, 
            potlucks: state.potlucks.map( potluck => 
               potluck.id === action.payload.id ? action.payload : potluck )
         }
      case DELETE_POTLUCK:
         return {
            ...state,
            potlucks: state.potlucks.filter( potluck => 
               potluck.id !== action.payload),
         }

      case SET_CURRENT:
         return { ...state, current: action.payload }
      
      case CLEAR_CURRENT:
         return { ...state, current: null }

      // case TEMPORARY_ADD:
      //    return {...state, potlucks: [...state.potlucks, action.payload]}
      
      // case TEMPORARY_EDIT:
      //    return {
      //       ...state, 
      //       potlucks: state.potlucks.map( potluck => 
      //          potluck.id === action.payload.id ? action.payload : potluck )
      //    }
      // case TEMPORARY_DELETE:
      //    return {
      //       ...state,
      //       potlucks: state.potlucks.filter( potluck => 
      //          potluck.id !== action.payload),
      //    }

      default:
         return state;
   }

 };
 