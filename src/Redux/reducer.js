import { GET_TECHNICIAN, GET_CLIENTS, GET_SUBSIDIARY, SUBSIDIARY_DETAILS, ACTION_LOGIN_SUCCESS, TECHNICIAN_DETAILS, UPDATE_TECHNICIAN_SUCCESS} from "./actions";

const initialState = {
    loginState: {
        id:"",
        name:'',
        email:'',
        role:'',
        isAdmin:''
    },
    currentSubsidiary:{},
    currentTechnician:{},
    infoSubsidiaries:[],
    technicianDetailsBySubsidiary:[],   
    techniciansInfo:[],     
}

function rootReducer (state = initialState, action) {
    switch(action.type) {   
        
        case ACTION_LOGIN_SUCCESS:
                const response = action.payload
                return {
                    ...state,
                    loginState: {
                        id: response.id,
                        name: response.name,
                        email: response.email,
                        role: response.role,
                        isAdmin: response.isAdmin,
                    }
                } 
        case GET_SUBSIDIARY: 
            return {
                ...state,
                infoSubsidiaries: action.payload
            }

        case GET_TECHNICIAN: 
            return {
                ...state,
                techniciansInfo: action.payload
            }   

        case SUBSIDIARY_DETAILS:
            return {
                ...state,
                currentSubsidiary: action.payload
            }  
        
        case TECHNICIAN_DETAILS:
            return {
                ...state,
                technicianDetailsBySubsidiary: action.payload,
                currentTechnician: action.payload
            };

        case UPDATE_TECHNICIAN_SUCCESS:
            return {
                ...state,
                currentSubsidiary: action.payload.subsidiary,
                technicianDetailsBySubsidiary: action.payload.technician,
            }    

        default: 
            return state;
    }
};

export default rootReducer;