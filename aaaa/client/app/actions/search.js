/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求搜索数据
function fetchSearchResult() {
    return {
        type: actionType.FETCH_SEARCH_RESULT
    }
}

//请求搜索数据成功
function receiveSearchResult(data) {
    return {
        type: actionType.RECEIVE_SEARCH_RESULT,
        data
    }
}

//请求搜索数据失败
function receiveSearchResultFail(error) {
    return {
        type: actionType.RECEIVE_SEARCH_RESULT_FAIL,
        error
    }
}

export function fetchSearch() {
    fetchSearchResult();
    get(urlType.SEARCH)
        .then(result=> {
            console.log('获取搜索数据成功');
            console.log(result);
            dispatch(receiveSearchResult(result.data))
        })
        .catch(error=> {
            console.log('获取搜索数据失败');
            console.log(error);
            dispatch(receiveSearchResultFail(error))
        })
}