import axios from 'axios';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

// JUST FOR TESTING FUNCTIONALITY BEFORE DATABASE CONNECTION
// export const TEMPORARY_ADD = "TEMPORARY_ADD"
// export const TEMPORARY_EDIT = "TEMPORARY_EDIT"
// export const TEMPORARY_DELETE = "TEMPORARY_DELETE"

export const GET_POTLUCKS = "GET_POTLUCKS"
export const ADD_POTLUCK = "ADD_POTLUCK"
export const EDIT_POTLUCK = "EDIT_POTLUCK"
export const DELETE_POTLUCK = "DELETE_POTLUCK"

export const SET_CURRENT = "SET_CURRENT"
export const CLEAR_CURRENT = "CLEAR_CURRENT"


export const getPotlucks = () => {
   return dispatch => {
      axiosWithAuth().get(`/potlucks`)
      .then( (response) => {
         console.log("IN GET=================",response.data)
         dispatch({ type: GET_POTLUCKS, payload: response.data });
      })
      .catch(err => console.log("GET ERROR:", err));
   }
}

export const addPotluck = (potluckData) => {
   return dispatch => {
      axiosWithAuth().post(`/potlucks/add`, potluckData)
      .then( (response) => {
         //console.log(response.data.created)
         dispatch({ type: ADD_POTLUCK, payload: response.data.created });
      })
      .catch(err => console.log("ADD ERROR:", err));
   }
}

export const editPotluck = (potluckData) => {
   return dispatch => {
      axiosWithAuth().put(`/potlucks/${potluckData.id}`, potluckData)
      .then( (response) => {
         const formattedResponse = JSON.parse(response.config.data)
         dispatch({ type: EDIT_POTLUCK, payload: formattedResponse });
      })
      .catch(err => console.log("EDIT ERROR:", err));
   }
}

export const deletePotluck = (potluckId) => {
   return dispatch => {
      axiosWithAuth().delete(`/potlucks/delete/${potluckId}`)
      .then( (response) => {
         if( response.data.message === "Potluck is gone" ){
            dispatch({ type: DELETE_POTLUCK, payload: potluckId });
         }
      })
      .catch(err => console.log("DELETE ERROR:", err));
   }
}

export const setCurrent = (potluckToEdit) => {
   //console.log( "IN SETCURRENT", potluckToEdit)
   return dispatch => {
      dispatch({ type: SET_CURRENT, payload: potluckToEdit });
   }
}

export const clearCurrent = () => {
   //console.log("in clear current")
   return dispatch => {
      dispatch({ type: CLEAR_CURRENT });
   }
}

//-------------------------------------------------------------------------------------
// JUST FOR TESTING FUNCTIONALITY BEFORE DATABASE CONNECTION
// export const temporaryAdd = (item) => {
//    return dispatch => {
//         dispatch( { type: TEMPORARY_ADD, payload: item})
//    }
// }
// export const temporaryEdit = (item) => {
//    return dispatch => {
//         dispatch( { type: TEMPORARY_EDIT, payload: item})
//    }
// }
// export const temporaryDelete = (itemId) => {
//    return dispatch => {
//         dispatch( { type: TEMPORARY_DELETE, payload: itemId})
//    }
// }
//-----------------------------------------------------------------------------------------





