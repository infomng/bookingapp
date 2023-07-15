// Create an authentication context that changes whenever the user state changes
import { createContext,useEffect,useReducer } from "react";

// create an initial connexion state 
const INITIAL_STATE ={
    user: JSON.parse(localStorage.getItem('user'))||null,
    loading: false,
    erro:null,
}

// initialize the context
export const  AuthContext = createContext(INITIAL_STATE);


// Create a reducer function
const AuthReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return{
                user:null,
                loading: true,
                error:null,
            }
        case 'LOGIN_SUCCESS':
            return{
                user:action.payload,
                loading: false,
                error:null,
            };
        case 'LOGIN_FAILURE':
            return{
                user:null,
                loading: false,
                error:action.payload,
            };
        case 'LOGOUT':
            return{
                user:null,
                loading: false,
                error:null,
            };
        default:
            return state
        }
}

// create a context provider function
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
      }, [state.user]);
      return(
        <AuthContext.Provider value = {{    
            user:state.user,
            loading:state.loading,
            error:state.error,
            dispatch
        }}>
        {children}
        </AuthContext.Provider>
      )
}