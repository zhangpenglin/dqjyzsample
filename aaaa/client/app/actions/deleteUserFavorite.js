/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求删除用户收藏数据
function fetchDeleteUserFavoriteResult() {
    return {
        type: actionType.FETCH_DELETEFAVORITE_RESULT
    }
}

//请求删除用户收藏数据成功
function receiveDeleteUserFavoriteResult(data) {
    return {
        type: actionType.RECEIVE_DELETEFAVORITE_RESULT,
        data
    }
}

//请求删除用户收藏数据失败
function receiveDeleteUserFavoriteResultFail(error) {
    return {
        type: actionType.RECEIVE_DELETEFAVORITE_RESULT_FAIL,
        error
    }
}

export function fetchDeleteUserFavorite() {
    fetchDeleteUserFavoriteResult();
    del(urlType.DELETE_FAVORITE)
        .then(result=> {
            console.log('获取删除用户收藏数据成功');
            console.log(result);
            dispatch(receiveDeleteUserFavoriteResult(result.data))
        })
        .catch(error=> {
            console.log('获取删除用户收藏数据失败');
            console.log(error);
            dispatch(receiveDeleteUserFavoriteResultFail(error))
        })
}