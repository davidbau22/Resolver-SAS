// import axios from 'axios';
////////--Data Model//////////////
import {userAdmin, userTechnician} from '../Data/data';

export const GET_TECHNICIAN = 'GET_TECHNICIAN';
export const GET_CLIENTS = 'GET_CLIENTS';
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
    //     let api = backendUrl + 'auth/login'
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
        console.log(userAdmin, "login success");
        dispatch(actionLoginSuccess(userAdmin))
    }
}

////////--Login END--//////////////
            
// export function getDiets(){
//     return async function (dispatch) {
//         let urlJson = await axios.get('http://localhost:3001/types');
//         return dispatch({
//             type:'GET_DIETS',
//             payload: urlJson.data
//         })
//     }
// };

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
