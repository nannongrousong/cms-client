import request from 'COMMON_UTILS/request';

export const CMS_Login = (params) => request('/Sys_Login/CMS_Login', params, 'POST');

export const Load_User_Info = (params) => request('/Sys_Login/Load_User_Info', params);