import { GET_TECHNICIAN, GET_CLIENTS, ACTION_LOGIN_SUCCESS, FILTER_BY_SUBSIDIARY, ORDER_BY_NAME, TECHNICIAN_DETAILS, POST_TECHNICIAN  } from "./actions";

const initialState = {
    loginState: {
        id:"",
        name:'',
        email:'',
        role:'',
        isAdmin:''
    },        
}

function rootReducer (state = initialState, action) {
    switch(action.type) {   
        
        case ACTION_LOGIN_SUCCESS:
            {
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
            }
        
        default: 
            return state;
    }
};

export default rootReducer;