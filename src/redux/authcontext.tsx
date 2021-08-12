import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useReducer } from "react";
import { AuthReducer, AuthState } from "./authReducer";
import InterfaceCanje from "./interfaces";

type AuthContextProps = {
    canjes:InterfaceCanje|[];

    addCanje: (val:InterfaceCanje)=> void;
    dropCanje: ()=> void;
    dropItemCanje: (val:InterfaceCanje)=> void;
}

const authInitialState:AuthState={
    canjes:[],
}

export const AuthContext=createContext({} as AuthContextProps)

export const AuthProvider = ({children}: any) =>{
    const[state, dispatch] = useReducer(AuthReducer, authInitialState)
    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('usuario');
        if (!token){
            return console.log('SIN REGISTROS CANJEADOS ')
        }else{
            console.log('fff',JSON.parse(token))
            return dispatch({type:'addCanje',payload:{addTypeCanje:JSON.parse(token)}})
        }
    }

    const addCanje = async ({name,last,id}:InterfaceCanje)=>{
        const newCanje0=[{
            id:id,
            name:name,
            last:last,
        }]
        const newCanje={
            id:id,
            name:name,
            last:last,
        }
        const jsonNewCanje= JSON.stringify(newCanje0)

        let data1 = new Array()
        const token = await AsyncStorage.getItem('usuario');
        if (!token){
            console.log('TOKEN')
            dispatch({type:'addCanje',payload:{addTypeCanje:JSON.parse(jsonNewCanje)}})
            return await AsyncStorage.setItem('usuario',jsonNewCanje);
        }else{
            data1 = JSON.parse(token)
            data1.push(newCanje)
            const newAddCanjeAsync = JSON.stringify(data1)
            dispatch({type:'addCanje',payload:{addTypeCanje:JSON.parse(newAddCanjeAsync)}})
            return await AsyncStorage.setItem('usuario',newAddCanjeAsync);
        }
    }
    const dropCanje = async () => {
        dispatch({type:'dropCanje'})
        return await AsyncStorage.removeItem('usuario')
    }
    const dropItemCanje =async ({id}:InterfaceCanje) => {
        let data1 = new Array()
        const token = await AsyncStorage.getItem('usuario');
        if(token){
            data1 = JSON.parse(token)
            data1.splice(id,1)
            const newAddCanjeAsync = JSON.stringify(data1)
            dispatch({type:'addCanje',payload:{addTypeCanje:JSON.parse(newAddCanjeAsync)}})
            return await AsyncStorage.setItem('usuario',newAddCanjeAsync);
        }
    }

    return(
        <AuthContext.Provider value={{
            ...state,
            addCanje,
            dropCanje,
            dropItemCanje,
        }}>
            {children}
        </AuthContext.Provider>
    )
}