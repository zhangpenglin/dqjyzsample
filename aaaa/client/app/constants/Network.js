/**
 * Created by Administrator on 2016/7/22.
 */
const apiHost = 'http://10/125.254.182';


/** 发送短信验证码 **/
export const SMS_CODE = `${apiHost}/auth/code/:userName`;
/** 用户刷新token **/
export const REFRESH_TOKEN = `${apiHost}/auth/refresh`;
/** 用户登录(密码方式) **/
export const LOGIN_BY_PASSWORD = `${apiHost}/auth/loginByPassword`;
/** 用户登录(短信方式) **/
export const LOGIN_BY_SMS_CODE = `${apiHost}/auth/loginBySms`;
/** 用户退出登录 **/
export const LOGOUT = `${apiHost}/auth/logout`;





/** 获取部门下所有用户信息 **/
export const DEPARTMENT_USERS = `${apiHost}/department/users/:departmentId/page/:page/size/:size/sort/:sort`;
/** 获取部门信息与子级部门信息 **/
export const DEPARTMENT_CHILDER = `${apiHost}/department/departments/:departmentId/page/:page/size/:size/sort/:sort`;


/** 错误处理 **/
export const ERROR = `${apiHost}/`;


/** 获取首页信息 **/
export const PORTAL = `${apiHost}/portal`;


/** 获取推荐列表 **/
export const RECOMMEND = `${apiHost}/recommend/page/:page/size/:size`;


/** 搜索 **/
export const SEARCH = `${apiHost}/search/keyword/:keyword/page/:page/size/:size`;


/** 发送意见反馈 **/
export const SUGGESTION = `${apiHost}/suggestion`;  


/** 获取专题列表 **/
export const TOPIC_LIST = `${apiHost}/topic/page/:page/size/:size`;
/** 获取专题详情 **/
export const TOPIC_DETAIL = `${apiHost}`;


/** 删除用户收藏 **/
export const DELETE_FAVORITE = `${apiHost}/user/favorite`;
/** 增加用户的学习时长 **/
export const ADD_TIME = `${apiHost}/user/time`;
/** 添加用户收藏 **/
export const ADD_FAVORITE = `${apiHost}/user/favorite`;
/** 获取用户信息 **/
export const USER_DETAIL = `${apiHost}/user/detail/:userName`;
/** 获取用户收藏的课程 **/
export const USER_FAVORITE = `${apiHost}/user/favorite/:userName/page/:page/size/:size`;
/** 获取用户的足迹历史 **/
export const USER_HISTORY = `${apiHost}/user/history/:userName/page/:page/size/:size`;