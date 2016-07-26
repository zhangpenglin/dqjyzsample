/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求获取课程信息数据
function fetchCourseDetailResult() {
    return {
        type: actionType.FETCH_COURSEDetail_RESULT
    }
}

//请求获取课程信息数据成功
function receiveCourseDetailResult(data) {
    return {
        type: actionType.RECEIVE_COURSELIST_RESULT,
        data
    }
}

//请求获取课程信息数据失败
function receiveCourseDetailResultFail(error) {
    return {
        type: actionType.RECEIVE_COURSEDetail_RESULT_FAIL,
        error
    }
}

export function fetchCourseDetail() {
    fetchCourseDetailResult();
    get(urlType.COURSE_DETAIL)
        .then(result=> {
            console.log('获取课程信息数据成功');
            console.log(result);
            dispatch(receiveCourseDetailResult(result.data))
        })
        .catch(error=> {
            console.log('获取课程信息数据失败');
            console.log(error);
            dispatch(receiveCourseDetailResultFail(error))
        })
}