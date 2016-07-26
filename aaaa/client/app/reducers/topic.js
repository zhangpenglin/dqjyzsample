/**
 * Created by gx on 2016/7/21.
 */
import * as actionType from '../actions/actionTypes';

const initialState = {
    types: []
}

export function topic(state = initialState, action) {
    switch (action.type) {
        case actionType.FETCH_TOPICLIST_RESULT:
            return state;
            break;
        case actionType.RECEIVE_TOPICLIST_RESULT:
            return {
                ...state,
                types: action.type
            }
            break;
        case actionType.RECEIVE_TOPICLIST_RESULT_FAIL:
            return state;
            break;
        default:
            return state;
    }
}
