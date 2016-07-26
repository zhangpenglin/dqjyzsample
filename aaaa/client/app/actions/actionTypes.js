/** 发送短信验证码 **/
export const FETCH_SMSCODE_RESULT = "FETCH_SMSCODE_RESULT";
export const RECEIVE_SMSCODE_RESULT = "RECEIVE_SMSCODE_RESULT";
export const RECEIVE_SMSCODE_RESULT_FAIL = "RECEIVE_SMSCODE_RESULT_FAIL";


/** 用户刷新token **/
export const FETCH_REFRESHTOKEN_RESULT = "FETCH_REFRESHTOKEN_RESULT";
export const RECEIVE_REFRESHTOKEN_RESULT = "RECEIVE_REFRESHTOKEN_RESULT";
export const RECEIVE_REFRESHTOKEN_RESULT_FAIL = "RECEIVE_REFRESHTOKEN_RESULT_FAIL";


/** 用户登录(密码方式) **/
export const FETCH_LOGINBYPASSWORD_RESULT = "FETCH_LOGINBYPASSWORD_RESULT";
export const RECEIVE_LOGINBYPASSWORD_RESULT = "RECEIVE_LOGINBYPASSWORD_RESULT";
export const RECEIVE_LOGINBYPASSWORD_RESULT_FAIL = "RECEIVE_LOGINBYPASSWORD_RESULT_FAIL";


/** 用户登录(短信方式) **/
export const FETCH_LOGINBYSMSCODE_RESULT = "FETCH_LOGINBYSMSCODE_RESULT";
export const RECEIVE_LOGINBYSMSCODE_RESULT = "RECEIVE_LOGINBYSMSCODE_RESULT";
export const RECEIVE_LOGINBYSMSCODE_RESULT_FAIL = "RECEIVE_LOGINBYSMSCODE_RESULT_FAIL";


/** 用户退出登录 **/
export const FETCH_LOGOUT_RESULT = "FETCH_LOGOUT_RESULT";
export const RECEIVE_LOGOUT_RESULT = "RECEIVE_LOGOUT_RESULT";
export const RECEIVE_LOGOUT_RESULT_FAIL = "RECEIVE_LOGOUT_RESULT_FAIL";


/** 获取分类列表 **/
export const REQUEST_TYPES = "REQUEST_TYPES";
export const FETCH_TYPES_SUCCESS = "FETCH_TYPES_SUCCESS";
export const FETCH_TYPES_FAIL = "FETCH_TYPES_FAIL";


/** 获取某分类的课程列表 **/
export const FETCH_COURSELIST_RESULT = "FETCH_COURSELIST_RESULT";
export const RECEIVE_COURSELIST_RESULT = "RECEIVE_COURSELIST_RESULT";
export const RECEIVE_COURSELIST_RESULT_FAIL = "RECEIVE_COURSELIST_RESULT_FAIL";


/** 获取课程信息 **/
export const FETCH_COURSEDetail_RESULT = "FETCH_COURSEDetail_RESULT";
export const RECEIVE_COURSEDetail = "RECEIVE_COURSEDetail_RESULT";
export const RECEIVE_COURSEDetail_RESULT_FAIL = "RECEIVE_COURSEDetail_RESULT_FAIL";


/** 获取部门下所有用户信息 **/
export const FETCH_DEPARTMENTUSERS_RESULT = "FETCH_DEPARTMENTUSERS_RESULT";
export const RECEIVE_DEPARTMENTUSERS_RESULT = "RECEIVE_DEPARTMENTUSERS_RESULT";
export const RECEIVE_DEPARTMENTUSERS_RESULT_FAIL = "RECEIVE_DEPARTMENTUSERS_RESULT_FAIL";


/** 获取部门信息与子级部门信息 **/
export const FETCH_DEPARTMENTCHILDREN_RESULT = "FETCH_DEPARTMENTCHILDREN_RESULT";
export const RECEIVE_DEPARTMENTCHILDREN_RESULT = "RECEIVE_DEPARTMENTCHILDREN_RESULT";
export const RECEIVE_DEPARTMENTCHILDREN_RESULT_FAIL = "RECEIVE_DEPARTMENTCHILDREN_RESULT_FAIL";


/** 获取首页信息 **/
export const FETCH_PORTAL_RESULT = "FETCH_PORTAL_RESULT";
export const RECEIVE_PORTAL_RESULT = "RECEIVE_PORTAL_RESULT";
export const RECEIVE_PORTAL_RESULT_FAIL = "RECEIVE_PORTAL_RESULT_FAIL";


/** 获取推荐列表 **/
export const FETCH_RECOMMEND_RESULT = "FETCH_RECOMMEND_RESULT";
export const RECEIVE_RECOMMEND_RESULT = "RECEIVE_RECOMMEND_RESULT";
export const RECEIVE_RECOMMEND_RESULT_FAIL = "RECEIVE_RECOMMEND_RESULT_FAIL";


/** 搜索 **/
export const FETCH_SEARCH_RESULT = "FETCH_SEARCH_RESULT";
export const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";
export const RECEIVE_SEARCH_RESULT_FAIL = "RECEIVE_SEARCH_RESULT_FAIL";


/** 发送意见反馈 **/
export const FETCH_SUGGESTION_RESULT = "FETCH_SUGGESTION_RESULT";
export const RECEIVE_SUGGESTION_RESULT = "RECEIVE_SUGGESTION_RESULT";
export const RECEIVE_SUGGESTION_RESULT_FAIL = "RECEIVE_TSUGGESTION_RESULT_FAIL";


/** 获取专题列表 **/
export const FETCH_TOPICLIST_RESULT = "FETCH_TOPICLIST_RESULT";
export const RECEIVE_TOPICLIST_RESULT = "RECEIVE_TOPICLIST_RESULT";
export const RECEIVE_TOPICLIST_RESULT_FAIL = "RECEIVE_TOPICLIST_RESULT_FAIL";


/** 获取专题详情 **/
export const FETCH_TOPICDETAIL_RESULT = "FETCH_TOPICDETAIL_RESULT";
export const RECEIVE_TOPICDETAIL_RESULT = "RECEIVE_TOPICDETAIL_RESULT";
export const RECEIVE_TOPICDETAIL_RESULT_FAIL = "RECEIVE_TOPICDETAIL_RESULT_FAIL";


/** 删除用户收藏 **/
export const FETCH_DELETEFAVORITE_RESULT = "FETCH_DELETEFAVORITE_RESULT";
export const RECEIVE_DELETEFAVORITE_RESULT = "RECEIVE_DELETEFAVORITE_RESULT";
export const RECEIVE_DELETEFAVORITE_RESULT_FAIL = "RECEIVE_DELETEFAVORITE_RESULT_FAIL";


/** 增加用户的学习时长 **/
export const FETCH_ADDUSERTIME_RESULT = "FETCH_ADDUSERTIME_RESULT";
export const RECEIVE_ADDUSERTIME_RESULT = "RECEIVE_ADDUSERTIME_RESULT";
export const RECEIVE_ADDUSERTIME_RESULT_FAIL = "RECEIVE_ADDUSERTIME_RESULT_FAIL";


/** 添加用户收藏 **/
export const FETCH_ADDUSERFAVORITE_RESULT = "FETCH_ADDUSERFAVORITE_RESULT";
export const RECEIVE_ADDUSERFAVORITE_RESULT = "RECEIVE_ADDUSERFAVORITE_RESULT";
export const RECEIVE_ADDUSERFAVORITE_RESULT_FAIL = "RECEIVE_ADDUSERFAVORITE_RESULT_FAIL";


/** 获取用户信息 **/
export const FETCH_USERDETAIL_RESULT = "FETCH_USERDETAIL_RESULT";
export const RECEIVE_USERDETAIL_RESULT = "RECEIVE_USERDETAIL_RESULT";
export const RECEIVE_USERDETAIL_RESULT_FAIL = "RECEIVE_USERDETAIL_RESULT_FAIL";


/** 获取用户收藏的课程 **/
export const FETCH_USERFAVORITE_RESULT = "FETCH_USERFAVORITE_RESULT";
export const RECEIVE_USERFAVORITE_RESULT = "RECEIVE_USERFAVORITE_RESULT";
export const RECEIVE_USERFAVORITE_RESULT_FAIL = "RECEIVE_USERFAVORITE_RESULT_FAIL";


/** 获取用户的足迹历史 **/
export const FETCH_USERHISTORY_RESULT = "FETCH_USERHISTORY_RESULT";
export const RECEIVE_USERHISTORY_RESULT = "RECEIVE_USERHISTORY_RESULT";
export const RECEIVE_USERHISTORY_RESULT_FAIL = "RECEIVE_USERHISTORY_RESULT_FAIL";