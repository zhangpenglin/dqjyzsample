"use strict";

import {combineReducers} from 'redux';

import {smsCode} from "./smsCode";
import {refreshToken} from "./refreshToken";
import {loginByPassword} from "./loginByPassword";
import {loginBySmsCode} from "./loginBySmsCode";
import {logout} from "./logout";
import {courseTypes} from "./course";
import {courseList} from "./courseList";
import {courseDetail} from "./courseDetail";
import {departmentUsers} from "./departmentUsers";
import {departmentChildren} from "./departmentChildren";
import {tabHome} from './tabHome';
import {recommendList} from './recommendList';
import {search} from './search';
import {topic} from './topic';
import {topicDetail} from './topicDetail';
import {deleteUserFavorite} from './deleteUserFavorite'
import {addUserTime} from './addUserTime'
import {addUserFavorite} from './addUserFavorite'
import {userDetail} from './userDetail'
import {userFavorite} from './userFavorite'
import {userHistory} from './userHistory'
import {suggestion} from './suggestion'

const rootReducer = combineReducers({
    smsCode,
    refreshToken,
    loginByPassword,
    loginBySmsCode,
    logout,
    courseTypes,
    courseList,
    courseDetail,
    departmentUsers,
    departmentChildren,
    tabHome,
    recommendList,
    search,
    topic,
    topicDetail,
    deleteUserFavorite,
    addUserTime,
    addUserFavorite,
    userDetail,
    userFavorite,
    userHistory,
    suggestion
});

export default rootReducer