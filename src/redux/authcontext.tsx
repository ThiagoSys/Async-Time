import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useReducer } from "react";
import { AppState, Platform } from "react-native";
import { check, openSettings, PERMISSIONS, PermissionStatus, request } from "react-native-permissions";
import { AuthReducer, AuthState } from "./authReducer";
import InterfaceCanje from "./interfaces";

type AuthContextProps = {
    locationState: PermissionStatus;

    canjes:InterfaceCanje|[];

    addCanje: (val:InterfaceCanje)=> void;
    dropCanje: ()=> void;
    dropItemCanje: (val:InterfaceCanje)=> void;

    askLocationPermissions: ()=>void;
    checkLocationPermissions: ()=>void;
}

const authInitialState:AuthState={
    canjes:[],
    locationState:'unavailable', 
}

export const AuthContext=createContext({} as AuthContextProps)

export const AuthProvider = ({children}: any) =>{
    const[state, dispatch] = useReducer(AuthReducer, authInitialState)
    useEffect(() => {
        checkToken();
        AppState.addEventListener('change', state =>{
            console.log('Status', state)
            if(state !=='active') return;
            checkLocationPermissions();
        })
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
    const askLocationPermissions = async ()=>{
        let permissionsStatus: PermissionStatus
        if(Platform.OS === 'ios'){
            permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            console.log('SSSddd')
            // return dispatch({type:'askLocationPermissions',payload:{addLocation:permissionsStatus}})
            // Alert.alert('IOS',`Welcome IOS ${permissionsStatus}`,[{
            //     text:'NO', onPress:()=>{console.log('BIEN IOS')}
            // }])
        }else{
            permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            console.log('ANDROIDDDD 333', permissionsStatus)
            if(permissionsStatus ==='blocked'){
                openSettings()
            }
            return dispatch({type:'askLocationPermissions',payload:{addLocation:permissionsStatus}})
        }
    }
    const checkLocationPermissions = async ()=>{
        let permissionsStatus: PermissionStatus
        if(Platform.OS === 'ios'){
            permissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            console.log('PERMISOS', permissionsStatus)
            return dispatch({type:'checkLocationPermissions',payload:{checkLocation:permissionsStatus}})
        }else{
            permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            return dispatch({type:'checkLocationPermissions',payload:{checkLocation:permissionsStatus}})
        }
    }

    return(
        <AuthContext.Provider value={{
            ...state,
            addCanje,
            dropCanje,
            dropItemCanje,
            askLocationPermissions,
            checkLocationPermissions,
        }}>
            {children}
        </AuthContext.Provider>
    )
}