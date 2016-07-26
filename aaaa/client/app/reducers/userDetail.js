/**
 * Created by Administrator on 2016/7/23.
 */
import * as actionType from '../actions/actionTypes';

const initialState = {
    types: []
}

export function userDetail(state = initialState, action) {
    switch (action.type) {
        case actionType.FETCH_USERDETAIL_RESULT:
            return state;
            break;
        case actionType.RECEIVE_USERDETAIL_RESULT:
            return {
                ...state,
                types: action.type
            }
            break;
        case actionType.RECEIVE_USERDETAIL_RESULT_FAIL:
            return state;
        default:
            return state;
    }
}