import NetWork from './network.js';

// 登录
const loginOrRegister = (url,params) => {
    return NetWork.request({
        url,
        method: 'post',
        params
    });
}

// 刷新Token
const refreshToken = () => {
    return NetWork.request({
        url:'authorizations/current',
        method: 'put'
    }).catch(error => {
    })
}

// 删除Token
const deleteToken = () => {
    return NetWork.request({
        url: 'authorizations/current',
        method: 'delete'
    }).catch(error => {
    })
}

// 编辑用户信息
const editUser = (params) => {
    return NetWork.request({
        url: 'user?incude=user',
        method: 'patch',
        params
    }).catch(error => {
    })
}

// 获取话题分类
const getCategoriesData = () => {
    return NetWork.request({
        url:'categories',
        method: 'get'
    }).catch(error => {
    });
}

// 获取分类下的话题
const getCategoriesTopic = (id) => {
    return NetWork.request({
        url: `categories/${id}`,
        method: 'get',
    }).catch(error => {
    });
}

// 获取话题详情
const getTopicDetail = (id) => {
    return NetWork.request({
        url: `topics/${id}?include=user,category`,
        method: 'get',
    }).catch(error => {
    });
}

export default {
    getCategoriesData,
    getCategoriesTopic,
    getTopicDetail,
    loginOrRegister,
    refreshToken,
    deleteToken,
    editUser
};