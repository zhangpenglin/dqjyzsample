/**
 * Created by Administrator on 2016/7/23.
 */
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';
import {get, post, del} from '../utils/request';

//开始请求专题详情数据
function fetchTopicDetailResult() {
    return {
        type: actionType.FETCH_TOPICDETAIL_RESULT
    }
}

//请求专题详情数据成功
function receiveTopicDetailResult(data) {
    return {
        type: actionType.RECEIVE_TOPICDETAIL_RESULT,
        data
    }
}

//请求专题详情数据失败
function receiveTopicDetailResultFail(error) {
    return {
        type: actionType.RECEIVE_TOPICDETAIL_RESULT_FAIL,
        error
    }
}

export function fetchTopicDetail() {
    fetchTopicDetailResult();
    get(urlType.TOPIC_DETAIL)
        .then(result=> {
            console.log('获取专题详情数据成功');
            console.log(result);
            dispatch(receiveTopicDetailResult(result.data))
        })
        .catch(error=> {
            console.log('获取专题详情数据失败');
            console.log(error);
            dispatch(receiveTopicDetailResultFail(error))
        })
}