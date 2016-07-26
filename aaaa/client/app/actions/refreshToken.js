/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求用户刷新token数据
function fetchRefreshTokenResult() {
    return {
        type: actionType.FETCH_REFRESHTOKEN_RESULT
    }
}

//请求用户刷新token数据成功
function receiveRefreshTokenResult(data) {
    return {
        type: actionType.RECEIVE_REFRESHTOKEN_RESULT,
        data
    }
}

//请求用户刷新token数据失败
function receiveRefreshTokenResultFail(error) {
    return {
        type: actionType.RECEIVE_REFRESHTOKEN_RESULT_FAIL,
        error
    }
}

export function fetchRefreshToken() {
    fetchRefreshTokenResult();
    get(urlType.REFRESH_TOKEN)
        .then(result=> {
            console.log('获取用户刷新token数据成功');
            console.log(result);
            dispatch(receiveRefreshTokenResult(result.data))
        })
        .catch(error=> {
            console.log('获取用户刷新token数据失败');
            console.log(error);
            dispatch(receiveRefreshTokenResultFail(error))
        })
}