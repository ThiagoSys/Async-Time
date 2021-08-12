import InterfaceCanje from "./interfaces";

export interface AuthState {
    canjes: InterfaceCanje|[];
}

type AuthAction = 
|{type:'addCanje', payload: {addTypeCanje:InterfaceCanje}}
|{type:'dropCanje'}
|{type:'dropItemCanje',payload: {dropItemTypeCanje:InterfaceCanje}}

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

        default: return state
    }
}