import axios from 'axios';
import { Modal, notification } from 'antd';

const token = 'token';

const login = () => {
  const url = `${process.env.REACT_APP_ROUTER_BASE}/login`;
  window.location.assign(url.replace(/\/\//g, '/'));
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  },
  timeout: 30000,
  withCredentials: true,
});

/**
 * http request 请求拦截
 */
instance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * http request 响应拦截
 */
instance.interceptors.response.use(
  (response) => (response.status === 200 ? Promise.resolve(response) : Promise.reject(response)),
  (error) => {
    const { response } = error;

    if (response) {
      switch (response.status) {
        case 401:
          Modal.confirm({
            content: '未登录，请登陆！',
            onOk: () => {
              login();
            },
          });
          break;
        case 403:
          Modal.confirm({
            content: '登录已过期，请重新登陆！',
            onOk: () => {
              login();
            },
          });
          break;
        case 404:
          notification.error({ duration: 1, description: '资源不存在！' });
          break;
        default:
          notification.error({ duration: 1, description: response.data.message || '请求发生错误！' });
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
