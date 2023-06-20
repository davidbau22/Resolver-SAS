import axios from 'axios';
////////--Data Model//////////////
import {    userAdmin, userTechnician } from '../Data/data';

export const GET_TECHNICIAN = 'GET_TECHNICIAN';
export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_SUBSIDIARY = 'GET_SUBSIDIARY';
export const SUBSIDIARY_DETAILS = 'SUBSIDIARY_DETAILS';
export const ACTION_LOGIN_SUCCESS = 'ACTION_LOGIN_SUCCESS';
export const TECHNICIAN_DETAILS = 'TECHNICIAN_DETAILS';
export const POST_TECHNICIAN = 'POST_TECHNICIAN';
export const UPDATE_TECHNICIAN_SUCCESS = 'UPDATE_TECHNICIAN_SUCCESS';

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
};

////////--Subsidiary END--//////////////

////////--Technicians START--//////////////

export function setCurrentWorkers(workers) {
    return {
      type: 'GET_TECHNICIAN',
      payload: workers,
    };
  };

export function postTechnician(payload){
    return async function(){
        let urlJson = await axios.post('http://localhost:3001/createTechnician', payload)
        return urlJson
    }
};
export function postCreateJob(payload){
    return async function(){
        let urlJson = await axios.post(`http://localhost:3001/createjob/${payload.id}`, payload)
        return urlJson
    }
};

export function technicianDetails(id){
    try{
        return async function (dispatch) {
        let urlJson = await axios.get(`http://localhost:3001/technician/${id}`)
        return dispatch({
            type:'TECHNICIAN_DETAILS',
            payload: urlJson.data
        })
    }
    }catch(e){
        console.log('There is an error with the details path');
        alert(e.error.message);
    }
};

export function updateTechnician(id, subsidiary, updatedFields) {
    return async function(dispatch) {
      try {
      const updateTechnicianPromise = axios.patch(`http://localhost:3001/updateTechnician/${id}`, updatedFields);
      const getTechnicianPromise = axios.get(`http://localhost:3001/technician/${id}`);
      const getSubsidiaryPromise = axios.get(`http://localhost:3001/sucursal/${subsidiary}`);

      const [updateTechnicianResponse, getTechnicianResponse, getSubsidiaryResponse] = await Promise.all([
        updateTechnicianPromise,
        getTechnicianPromise,
        getSubsidiaryPromise
      ]);

      console.log(updateTechnicianResponse.data);

      const updatedTechnician = getTechnicianResponse.data;
      const subsidiaryDetails = getSubsidiaryResponse.data;

  
        dispatch({
          type: 'UPDATE_TECHNICIAN_SUCCESS',
          payload: {
            technician: updatedTechnician,
            subsidiary: subsidiaryDetails
          }
        });
      } catch (error) {
        console.error(error);
        alert('Error: ' + error.message);
      }
    };
  }


////////--Workers END--///////////////


