/**
 * Created by Administrator on 2016/7/23.
 */
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';
import {get, post, del} from '../utils/request';

//开始请求专题列表数据
function fetchTopicListResult() {
    return {
        type: actionType.FETCH_TOPICLIST_RESULT
    }
}

//请求专题列表数据成功
function receiveTopicListResult(data) {
    return {
        type: actionType.RECEIVE_TOPICLIST_RESULT,
        data
    }
}

//请求专题列表数据失败
function receiveTopicListResultFail(error) {
    return {
        type: actionType.RECEIVE_TOPICLIST_RESULT_FAIL,
        error
    }
}

export function fetchTopicList() {
    fetchTopicListResult();
    get(urlType.TOPIC_LIST)
        .then(result=> {
            console.log('获取专题列表数据成功');
            console.log(result);
            dispatch(receiveTopicListResult(result.data))
        })
        .catch(error=> {
            console.log('获取专题列表数据失败');
            console.log(error);
            dispatch(receiveTopicListResultFail(error))
        })
}
