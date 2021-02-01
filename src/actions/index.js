import axios from 'axios';
import { axiosWithAuth } from '../utils/AxiosWithAuth'


// JUST FOR TESTING FUNCTIONALITY BEFORE DATABASE CONNECTION
export const TEMPORARY_ADD = "TEMPORARY_ADD"
export const TEMPORARY_EDIT = "TEMPORARY_EDIT"
export const TEMPORARY_DELETE = "TEMPORARY_DELETE"

export const SET_CURRENT = "SET_CURRENT"
export const CLEAR_CURRENT = "CLEAR_CURRENT"

// JUST FOR TESTING FUNCTIONALITY BEFORE DATABASE CONNECTION
export const temporaryAdd = (item) => {
   return dispatch => {
        dispatch( { type: TEMPORARY_ADD, payload: item})
   }
}
// JUST FOR TESTING FUNCTIONALITY BEFORE DATABASE CONNECTION
export const temporaryEdit = (item) => {
   return dispatch => {
        dispatch( { type: TEMPORARY_EDIT, payload: item})
   }
}
// JUST FOR TESTING FUNCTIONALITY BEFORE DATABASE CONNECTION
export const temporaryDelete = (itemId) => {
   return dispatch => {
        dispatch( { type: TEMPORARY_DELETE, payload: itemId})
   }
}


export const setCurrent = (potluckToEdit) => {
   console.log( "IN SETCURRENT", potluckToEdit)
   return dispatch => {
      dispatch({ type: SET_CURRENT, payload: potluckToEdit });
   }
}

export const clearCurrent = () => {
   console.log("in clear current")
   return dispatch => {
      dispatch({ type: CLEAR_CURRENT });
   }
}





