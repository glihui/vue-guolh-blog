import axios from 'axios';

const customAxios = axios.create();

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

customAxios.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
);


export default {
    request ({
        url,
        params,
        responseType = 'json',
        method = 'post'
    }) {
        let paramsObj = method === 'post' ? {
            data: params
        } : {
            params: params
        };
        let user = localStorage.getItem('user');
        console.log(';')
        console.log(user);
        let token = user && JSON.parse(user).meta.access_token;
        return customAxios({
            url: `/api/${url}`,
            method,
            ...paramsObj,
            responseType,
            headers: {
                'Authorization': `Bearer ${token}`
                // 'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(data => {
            return data;
        }).catch(error => {
            return Promise.reject(error);
        })
    }
}
