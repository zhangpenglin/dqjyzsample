/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求推荐列表数据
function fetchRecommendResult() {
    return {
        type: actionType.FETCH_RECOMMEND_RESULT
    }
}

//请求推荐列表数据成功
function receiveRecommendResult(data) {
    return {
        type: actionType.RECEIVE_RECOMMEND_RESULT,
        data
    }
}

//请求推荐列表数据失败
function fetchRecommendFail(error) {
    return {
        type: actionType.RECEIVE_RECOMMEND_RESULT_FAIL,
        error
    }
}

export function fetchRecommendList() {
    fetchRecommendResult();
    return dispatch=> {
        get(urlType.RECOMMEND)
            .then(result=> {
                console.log('获取推荐列表数据成功');
                console.log(result);
                dispatch(receiveRecommendResult(result.data))
            })
            .catch(error=> {
                console.log('获取推荐列表数据失败');
                console.log(error);
                dispatch(fetchRecommendFail(error))
            })
    }
}