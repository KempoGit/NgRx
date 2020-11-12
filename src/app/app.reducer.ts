import { Action } from "@ngrx/store";
import * as fromTexto from './texto.action';

export interface appState {
    texto : string
}

export const initialState = {
    texto : 'Estado inicial'
}

export function miReducer(state: appState = initialState , action: fromTexto.TextoActions) {
    console.log(action);
    switch (action.type) {

        case fromTexto.SPANISH:
            return {
                ...state,
                texto : action.payload
            }

        case fromTexto.ENGLISH:
            return {
                ...state,
                texto : action.payload
            }
    
        default:
            return state;

    }
}