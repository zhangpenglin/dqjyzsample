/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import {PORTAL} from "../utils/api";

//开始请求首页数据
function fetchPortalResult() {
    return {
        type: actionType.FETCH_PORTAL_RESULT
    }
}

//请求首页数据成功
function receiveFetchResult(data) {
    return {
        type: actionType.RECEIVE_PORTAL_RESULT,
        data
    }
}

//请求首页数据失败
function receiveFetchResultFail(error) {
    return {
        type: actionType.RECEIVE_PORTAL_RESULT_FAIL,
        error
    }
}

export function fetchPortal() {
    fetchPortalResult()
    return dispatch=> {
        get(PORTAL)
            .then(result=> {
                    console.log('首页获取数据成功');
                    console.log(result);
                    dispatch(receiveFetchResult(result.data))
                }
            )
            .catch(error=>{
                console.log('首页获取数据失败');
                console.log(error);
                dispatch(receiveFetchResultFail(error))
            })
    }
}