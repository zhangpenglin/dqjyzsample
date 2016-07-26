/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求获取用户信息数据
function fetchUserDetailResult() {
    return {
        type: actionType.FETCH_USERDETAIL_RESULT
    }
}

//请求获取用户信息数据成功
function receiveUserDetailResult(data) {
    return {
        type: actionType.RECEIVE_USERDETAIL_RESULT,
        data
    }
}

//请求获取用户信息数据失败
function receiveUserDetailResultFail(error) {
    return {
        type: actionType.RECEIVE_USERDETAIL_RESULT_FAIL,
        error
    }
}

export function fetchUserDetail() {
    fetchUserDetailResult();
    get(urlType.USER_DETAIL)
        .then(result=> {
            console.log('获取搜索数据成功');
            console.log(result);
            dispatch(receiveUserDetailResult(result.data))
        })
        .catch(error=> {
            console.log('获取搜索数据失败');
            console.log(error);
            dispatch(receiveUserDetailResultFail(error))
        })
}