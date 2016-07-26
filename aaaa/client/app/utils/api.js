// const apiHost = "http://10.125.254.182";
const apiHost = "http://211.138.9.84";  
// const apiHost="http://10.125.145.16:3000";

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


/** 获取分类列表 **/
export const COURSE_TYPES = `${apiHost}/course/types`;
/** 获取某分类的课程列表 **/
export const COURSE_LIST = `${apiHost}/course/type/:typeId/page/:page/size/:size`;
/** 获取课程信息 **/
export const COURSE_DETAIL = `${apiHost}/course/detail/:courseId`;


/** 获取部门下所有用户信息 **/
export const DEPARTMENT_USERS = `${apiHost}/department/users/:departmentId/page/:page/size/:size/sort/:sort`;
/** 获取部门信息与子级部门信息 **/
export const DEPARTMENT_CHILDREN = `${apiHost}/department/departments/:departmentId/page/:page/size/:size/sort/:sort`;


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
export const TOPIC_DETAIL = `${apiHost}/topic/detail/:topicId`;


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
