/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//用户开始请求登录(短信方式)
function fetchLoginBySmsCodeResult() {
    return {
        type: actionType.FETCH_LOGINBYSMSCODE_RESULT
    }
}

//用户请求登录(短信方式)成功
function receiveLoginBySmsCodeResult(data) {
    return {
        type: actionType.RECEIVE_LOGINBYSMSCODE_RESULT,
        data
    }
}

//用户请求登录(短信方式)失败
function receiveLoginBySmsCodeResultFail(error) {
    return {
        type: actionType.RECEIVE_LOGINBYSMSCODE_RESULT_FAIL,
        error
    }
}

export function fetchLoginBySmsCode() {
    fetchLoginBySmsCodeResult();
    post(urlType.LOGIN_BY_SMS_CODE)
        .then(result=> {
            console.log('短信登录成功');
            console.log(result);
            dispatch(receiveLoginBySmsCodeResult(result.data))
        })
        .catch(error=> {
            console.log('短信登录失败');
            console.log(error);
            dispatch(receiveLoginBySmsCodeResultFail(error))
        })
}