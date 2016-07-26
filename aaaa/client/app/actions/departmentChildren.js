/**
 * Created by Administrator on 2016/7/23.
 */
import {get, post, del} from '../utils/request';
import * as actionType from './actionTypes';
import * as urlType from '../utils/api';

//开始请求获取部门信息与子级部门信息数据
function fetchDepartmnetChildrenResult() {
    return {
        type: actionType.FETCH_DEPARTMENTCHILDREN_RESULT
    }
}

//请求获取部门信息与子级部门信息数据成功
function receiveDepartmnetChildrenResult(data) {
    return {
        type: actionType.RECEIVE_DEPARTMENTCHILDREN_RESULT,
        data
    }
}

//请求获取部门信息与子级部门信息数据失败
function receiveDepartmnetChildrenResultFail(error) {
    return {
        type: actionType.RECEIVE_DEPARTMENTCHILDREN_RESULT_FAIL,
        error
    }
}

export function fetchDepartmnetChildren() {
    fetchDepartmnetChildrenResult();
    get(urlType.DEPARTMENT_CHILDREN)
        .then(result=> {
            console.log('获取获取部门信息与子级部门信息数据成功');
            console.log(result);
            dispatch(receiveDepartmnetChildrenResult(result.data))
        })
        .catch(error=> {
            console.log('获取获取部门信息与子级部门信息数据失败');
            console.log(error);
            dispatch(receiveDepartmnetChildrenResultFail(error))
        })
}