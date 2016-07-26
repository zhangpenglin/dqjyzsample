/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求增加用户的学习时长数据
function fetchAddUserTimeResult() {
    return {
        type: actionType.FETCH_SEARCH_RESULT
    }
}

//请求增加用户的学习时长数据成功
function receiveAddUserTimeResult(data) {
    return {
        type: actionType.RECEIVE_SEARCH_RESULT,
        data
    }
}

//请求增加用户的学习时长数据失败
function receiveAddUserTimeResultFail(error) {
    return {
        type: actionType.RECEIVE_SEARCH_RESULT_FAIL,
        error
    }
}

export function fetchAddUserTime() {
    fetchAddUserTimeResult();
    post(urlType.ADD_TIME)
        .then(result=> {
            console.log('获取增加用户的学习时长数据成功');
            console.log(result);
            dispatch(receiveAddUserTimeResult(result.data))
        })
        .catch(error=> {
            console.log('获取增加用户的学习时长数据失败');
            console.log(error);
            dispatch(receiveAddUserTimeResultFail(error))
        })
}