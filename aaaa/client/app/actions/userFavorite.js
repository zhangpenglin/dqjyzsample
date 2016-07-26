/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求获取用户收藏的课程数据
function fetchUserFavoriteResult() {
    return {
        type: actionType.FETCH_USERFAVORITE_RESULT
    }
}

//请求获取用户收藏的课程数据成功
function receiveUserFavoriteResult(data) {
    return {
        type: actionType.RECEIVE_USERFAVORITE_RESULT,
        data
    }
}

//请求获取用户收藏的课程数据失败
function receiveUserFavoriteResultFail(error) {
    return {
        type: actionType.RECEIVE_USERFAVORITE_RESULT_FAIL,
        error
    }
}

export function fetchUserFavorite() {
    fetchUserFavoriteResult();
    get(urlType.USER_FAVORITE)
        .then(result=> {
            console.log('获取获取用户收藏的课程数据成功');
            console.log(result);
            dispatch(receiveUserFavoriteResult(result.data))
        })
        .catch(error=> {
            console.log('获取获取用户收藏的课程数据失败');
            console.log(error);
            dispatch(receiveUserFavoriteResultFail(error))
        })
}