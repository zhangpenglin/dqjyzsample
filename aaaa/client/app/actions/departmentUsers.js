/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求获取部门下所有用户信息数据
function fetchDepartmentUsersResult() {
    return {
        type: actionType.FETCH_DEPARTMENTUSERS_RESULT
    }
}

//请求获取部门下所有用户信息数据成功
function receiveDepartmentUsersResult(data) {
    return {
        type: actionType.RECEIVE_DEPARTMENTUSERS_RESULT,
        data
    }
}

//请求获取部门下所有用户信息数据失败
function receiveDepartmentUsersResultFail(error) {
    return {
        type: actionType.RECEIVE_DEPARTMENTUSERS_RESULT_FAIL,
        error
    }
}

export function fetchDepartmentUsers() {
    fetchDepartmentUsersResult();
    get(urlType.DEPARTMENT_USERS)
        .then(result=> {
            console.log('获取获取部门下所有用户信息数据成功');
            console.log(result);
            dispatch(receiveDepartmentUsersResult(result.data))
        })
        .catch(error=> {
            console.log('获取获取部门下所有用户信息数据失败');
            console.log(error);
            dispatch(receiveDepartmentUsersResultFail(error))
        })
}