/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求发送意见反馈数据
function fetchSuggestionResult() {
    return {
        type: actionType.FETCH_SUGGESTION_RESULT
    }
}

//请求发送意见反馈数据成功
function receiveSuggestionResult(data) {
    return {
        type: actionType.RECEIVE_SUGGESTION_RESULT,
        data
    }
}

//请求发送意见反馈数据失败
function receiveSuggestionResultFail(error) {
    return {
        type: actionType.RECEIVE_SUGGESTION_RESULT_FAIL,
        error
    }
}

export function fetchSuggestion() {
    fetchSuggestionResult();
    get(urlType.SUGGESTION)
        .then(result=> {
            console.log('获取发送意见反馈数据成功');
            console.log(result);
            dispatch(receiveSuggestionResult(result.data))
        })
        .catch(error=> {
            console.log('获取发送意见反馈数据失败');
            console.log(error);
            dispatch(receiveSuggestionResultFail(error))
        })
}