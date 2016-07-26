/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求发送短信验证码
function fetchSmsCodeResult() {
    return {
        type: actionType.FETCH_SMSCODE_RESULT
    }
}

//请求发送短信验证码成功
function receiveSmsCodeResult(data) {
    return {
        type: actionType.RECEIVE_SMSCODE_RESULT,
        data
    }
}

//请求发送短信验证码失败
function receiveSmsCodeResultFail(error) {
    return {
        type: actionType.RECEIVE_SMSCODE_RESULT_FAIL,
        error
    }
}

export function fetchSmsCode() {
    fetchSmsCodeResult();
    get(urlType.SMS_CODE)
        .then(result=> {
            console.log('获取短信验证码成功');
            console.log(result);
            dispatch(receiveSmsCodeResult(result.data))
        })
        .catch(error=> {
            console.log('获取短信验证码失败');
            console.log(error);
            dispatch(receiveSmsCodeResultFail(error))
        })
}