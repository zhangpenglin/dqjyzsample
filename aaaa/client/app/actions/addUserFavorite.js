/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求添加用户收藏数据
function fetchaddUserFavoriteResult() {
    return {
        type: actionType.FETCH_SEARCH_RESULT
    }
}

//请求添加用户收藏数据成功
function receiveaddUserFavoriteResult(data) {
    return {
        type: actionType.RECEIVE_SEARCH_RESULT,
        data
    }
}

//请求添加用户收藏数据失败
function receiveaddUserFavoriteResultFail(error) {
    return {
        type: actionType.RECEIVE_SEARCH_RESULT_FAIL,
        error
    }
}

export function fetchaddUserFavorite() {
    fetchaddUserFavoriteResult();
    post(urlType.ADD_FAVORITE)
        .then(result=> {
            console.log('获取添加用户收藏数据成功');
            console.log(result);
            dispatch(receiveaddUserFavoriteResult(result.data))
        })
        .catch(error=> {
            console.log('获取添加用户收藏数据失败');
            console.log(error);
            dispatch(receiveaddUserFavoriteResultFail(error))
        })
}