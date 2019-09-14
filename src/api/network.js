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
        return customAxios({
            url: `/api/${url}`,
            method,
            ...paramsObj,
            responseType,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(data => {
            return data;
        }).catch(error => {
            return Promise.reject(error);
        })
    }
}
