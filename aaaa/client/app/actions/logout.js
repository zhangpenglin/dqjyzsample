/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始退出登录
function fetchLogoutResult() {
    return {
        type: actionType.FETCH_LOGOUT_RESULT
    }
}

//请求退出登录成功
function receiveLogoutResult(data) {
    return {
        type: actionType.RECEIVE_LOGOUT_RESULT,
        data
    }
}

//请求退出登录失败
function receiveLogoutResultFail(error) {
    return {
        type: actionType.RECEIVE_LOGOUT_RESULT_FAIL,
        error
    }
}

export function fetchLogout() {
    fetchLogoutResult();
    get(urlType.LOGOUT)
        .then(result=> {
            console.log('退出登录成功');
            console.log(result);
            dispatch(receiveLogoutResult(result.data))
        })
        .catch(error=> {
            console.log('退出登录失败');
            console.log(error);
            dispatch(receiveLogoutResultFail(error))
        })
}