import axios from 'axios';
////////--Data Model//////////////
import {userAdmin, userTechnician, subsidiaryList, subsidiary_A, subsidiary_B} from '../Data/data';

export const GET_TECHNICIAN = 'GET_TECHNICIAN';
export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_SUBSIDIARY = 'GET_SUBSIDIARY';
export const SUBSIDIARY_DETAILS = 'SUBSIDIARY_DETAILS';
export const ACTION_LOGIN_SUCCESS = 'ACTION_LOGIN_SUCCESS';
export const FILTER_BY_SUBSIDIARY = 'FILTER_BY_SUBSIDIARY';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const TECHNICIAN_DETAILS = 'TECHNICIAN_DETAILS';
export const POST_TECHNICIAN = 'POST_TECHNICIAN';

////////--Login START--//////////////
const actionLoginSuccess = (Customers) => {
    return {
        type: 'ACTION_LOGIN_SUCCESS',
        payload: Customers
    }
}

export const signIn = (Customers) => {
    // return dispatch => {
    //     let api = http://localhost:3001/ + 'auth/login'
    //     axios.post(api, Customers)
    //         .then(response => {
    //             console.log(response, "login success?")
    //             dispatch(actionLoginSuccess(response.data))
    //         })
    //         .catch(error => {
    //             console.log(error.message, "login error")
    //             const msg = error.message
    //             alert(msg);
    //         })
    // }
    return dispatch => { 
        const userType = Customers.email.includes('admin') ? userAdmin : userTechnician;
        dispatch(actionLoginSuccess(userType))
    }
}

////////--Login END--//////////////

////////--Subsidiary START--//////////////

export function getSubsidiary (){
    return async function (dispatch) {
         let urlJson = await axios.get(`http://localhost:3001/subsidiary`);
         return dispatch({
             type:'GET_SUBSIDIARY',
             payload: urlJson.data
         })
    }
    /* return function (dispatch) {
        return dispatch ({ 
            type:'GET_SUBSIDIARY',
            payload: subsidiaryList
        })
    } */
};
            
export function getSubsidiaryById(id){
    try {
     return async function (dispatch) {
         let urlJson = await axios.get(`http://localhost:3001/sucursal/${id}`);
         return dispatch({
             type:'SUBSIDIARY_DETAILS',
             payload: urlJson.data
         })
    }
    }catch(e){
       console.log('There is an error with the details path');
        alert('There is an error with the details path');  
    }
    /* return function (dispatch) {
        const subsidiaryType = id === 1 ? subsidiary_A : subsidiary_B;
        return dispatch ({ 
            type:'SUBSIDIARY_DETAILS',
            payload: subsidiaryType
        })
    } */
};

////////--Subsidiary END--//////////////

////////--Workers START--//////////////

export function setCurrentWorkers(workers) {
    return {
      type: 'GET_TECHNICIAN',
      payload: workers,
    };
  };

////////--Workers END--///////////////

// export function filterByDiets(payload){
//     return {
//         type: "FILTER_BY_DIETS",
//         payload
//     }
// };

// export function filterCreated(payload){
//     return {
//         type: "FILTER_CREATED",
//         payload
//     }
// }

// export function orderByName(payload){
//     return {
//         type: "ORDER_BY_NAME",
//         payload
//     }
// };


// export function postRecipe(payload){
//     return async function(){
//         let urlJson = await axios.post('http://localhost:3001/recipe', payload)
//         return urlJson
//     }
// };

// export function recipeDetails(id){
//     try{
//         return async function (dispatch) {
//         let urlJson = await axios.get(`http://localhost:3001/recipes/${id}`)
//         return dispatch({
//             type:'RECIPE_DETAILS',
//             payload: urlJson.data
//         })
//     }
//     }catch(e){
//         console.log('There is an error with the details path');
//         alert('There is an error with the details path');
//     }
// };
