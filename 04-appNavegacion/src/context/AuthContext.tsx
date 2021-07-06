import React,  { createContext } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { useReducer } from 'react';
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: '',
    favoriteIcon: ''
}

// Se usara para definir como luce el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void; 
    logout: () => void;
    changeFavIcon: (iconName: string) => void;
    changeUsername: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({type: 'singIn'})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', paylodad: iconName})
    }

    const changeUsername = (userName: string) => {
        dispatch({type: 'changeUsername', paylodad: userName})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logout,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )      
}