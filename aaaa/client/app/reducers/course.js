import {REQUEST_TYPES,FETCH_TYPES_SUCCESS,FETCH_TYPES_FAIL} from '../actions/actionTypes'

const initialState={
    types:[]
}

export function courseTypes(state=initialState,action){
    switch (action.type){
        case REQUEST_TYPES:
            return state;
            break;
        case FETCH_TYPES_SUCCESS:
            return {
                ...state,
                types:action.types
            };
            break;

        case FETCH_TYPES_FAIL:
            return state;
            break;
        
        default:
            return state
    }
}
