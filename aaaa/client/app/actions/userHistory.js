/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求获取用户的足迹历史数据
function fetchUserHistoryResult() {
    return {
        type: actionType.FETCH_USERHISTORY_RESULT
    }
}

//请求获取用户的足迹历史数据成功
function receiveUserHistoryResult(data) {
    return {
        type: actionType.RECEIVE_USERHISTORY_RESULT,
        data
    }
}

//请求获取用户的足迹历史数据失败
function receiveUserHistoryResultFail(error) {
    return {
        type: actionType.RECEIVE_USERHISTORY_RESULT_FAIL,
        error
    }
}

export function fetchUserHistory() {
    fetchUserHistoryResult();
    get(urlType.USER_HISTORY)
        .then(result=> {
            console.log('获取获取用户的足迹历史数据成功');
            console.log(result);
            dispatch(receiveUserHistoryResult(result.data))
        })
        .catch(error=> {
            console.log('获取获取用户的足迹历史数据失败');
            console.log(error);
            dispatch(receiveUserHistoryResultFail(error))
        })
}