/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求获取某分类的课程列表数据
function fetchCourseListResult() {
    return {
        type: actionType.FETCH_COURSELIST_RESULT
    }
}

//请求获取某分类的课程列表数据成功
function receiveCourseListResult(data) {
    return {
        type: actionType.RECEIVE_COURSELIST_RESULT,
        data
    }
}

//请求获取某分类的课程列表数据失败
function receiveCourseListResultFail(error) {
    return {
        type: actionType.RECEIVE_COURSELIST_RESULT_FAIL,
        error
    }
}

export function fetchCourseList() {
    fetchCourseListResult();
    get(urlType.COURSE_LIST)
        .then(result=> {
            console.log('获取某分类的课程列表数据成功');
            console.log(result);
            dispatch(receiveCourseListResult(result.data))
        })
        .catch(error=> {
            console.log('获取某分类的课程列表数据失败');
            console.log(error);
            dispatch(receiveCourseListResultFail(error))
        })
}