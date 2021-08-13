import InterfaceCanje from "./interfaces";
import { PermissionStatus } from "react-native-permissions";


export interface AuthState {
    locationState: PermissionStatus;
    canjes: InterfaceCanje|[];
}

type AuthAction = 
|{type:'addCanje', payload: {addTypeCanje:InterfaceCanje}}
|{type:'dropCanje'}
|{type:'dropItemCanje',payload: {dropItemTypeCanje:InterfaceCanje}}
|{type:'askLocationPermissions',payload:{addLocation:PermissionStatus}}
|{type:'checkLocationPermissions',payload:{checkLocation:PermissionStatus}}

export const AuthReducer = (state: AuthState, action: AuthAction):AuthState=>{
    switch(action.type){
        case 'addCanje': 
        return{
            ...state,
            canjes:action.payload.addTypeCanje,
        }

        case 'dropCanje': 
        return{
            ...state,
            canjes:[],
        }

        case 'dropItemCanje': 
        return{
            ...state,
            canjes:action.payload.dropItemTypeCanje,
        }
        case 'askLocationPermissions':
            return{
                ...state,
                locationState:action.payload.addLocation,
            }
        case 'checkLocationPermissions':
            return{
                ...state,
                locationState:action.payload.checkLocation,
            }
    
        default: return state
    }
}