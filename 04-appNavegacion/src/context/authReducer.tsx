import { AuthState } from "./AuthContext";

type AuthAction = { type: 'singIn'} | 
                  { type: 'logout'} | 
                  { type: 'changeFavIcon', paylodad: string} |
                  { type: 'changeUsername', paylodad: string};


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'singIn':            
           return {
               ...state,
               isLoggedIn: true,
               username: 'no-username-yet'
           }

        case 'logout':            
           return {
               ...state,
               isLoggedIn: false,
               username: undefined,
               favoriteIcon: undefined
           }

        case 'changeFavIcon':            
           return {
               ...state,
              favoriteIcon: action.paylodad
           }

        case 'changeUsername':            
           return {
               ...state,
              username: action.paylodad
           }
    
        default:
            return state;
    }

}
