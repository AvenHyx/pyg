import wepy from 'wepy';
const BASE_URL_REMOTE = 'https://itjustfun.cn/api/public/v1/';
const BASE_URL_LOCALE = 'http://localhost:8888/api/public/v1/'; // ==> 登录，支付

// fetch的用法
// fetch("xxx", {})
// fetch("xxx")
// fetch({})

export default function fetch(url, options = {}) {
  if (typeof url === 'string') {
    options.url = url;
  }

  if (typeof url === 'object') {
    options = url;
  }

  if (options.type === 'locale') {
    // 走本地接口
    options.url = BASE_URL_LOCALE + options.url;
  } else {
    options.url = BASE_URL_REMOTE + options.url;
  }
  // if (typeof options.header === 'object') {
  //   // 说明自己传参了
  //   options.header.Authorization = wepy.getStorgeSync('token');
  // }
  return wepy.request({
    url: options.url,
    data: options.data || {},
    method: options.method || 'GET',
    header:
      options.header ||
      {
        // Authorization: wepy.getStorageSync('token')
      }
  });
}
