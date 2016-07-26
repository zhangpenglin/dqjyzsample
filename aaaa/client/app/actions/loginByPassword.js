/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求用户登录(密码方式)
function fetchLoginByPasswordResult() {
    return {
        type: actionType.FETCH_LOGINBYPASSWORD_RESULT
    }
}

//请求用户登录(密码方式)成功
function receiveLoginByPasswordResult(data) {
    return {
        type: actionType.RECEIVE_LOGINBYPASSWORD_RESULT,
        data
    }
}

//请求用户登录(密码方式)失败
function receiveLoginByPasswordResultFail(error) {
    return {
        type: actionType.RECEIVE_LOGINBYPASSWORD_RESULT_FAIL,
        error
    }
}

export function fetchLoginByPassword() {
    fetchLoginByPasswordResult();
    post(urlType.LOGIN_BY_PASSWORD)
        .then(result=> {
            console.log('密码方式登录成功');
            console.log(result);
            dispatch(receiveLoginByPasswordResult(result.data))
        })
        .catch(error=> {
            console.log('密码方式登录失败');
            console.log(error);
            dispatch(receiveLoginByPasswordResultFail(error))
        })
}