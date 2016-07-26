import {COURSE_TYPES} from'../utils/api'
import {get, post, del} from '../utils/request'
import * as actionTypes from './actionTypes'
export function fetchCourseTypes() {
    requestCourseTypes()
    return dispatch=> {
        get(COURSE_TYPES)
            .then(res=> {
                console.log('success')
                console.log(res)
                    dispatch(fetchCourseTypesSuccess(res.data))
                }
            )
            .catch(error=>{
                console.log('error')

                console.log(error)

                dispatch(fetchCourseTypesFail(error))
            })
    }
}
//开始请求课程分类
function requestCourseTypes(){
    return {
        type:actionTypes.REQUEST_TYPES
    }
}
//请求课程分类成功
function fetchCourseTypesSuccess(types) {
    return {
        type: actionTypes.FETCH_TYPES_SUCCESS,
        types
    }
}
//请求课程分类失败
function fetchCourseTypesFail(error){
    return {
        type:actionTypes.FETCH_TYPES_FAIL,
        error
    }
}