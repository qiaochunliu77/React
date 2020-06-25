import axios from 'axios';
// 在请求或响应被 then 或 catch 处理前拦截它们。
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
    if(response.status !== 200){
        alert("ERROR");
    }else{
        return response.data
    }
  }, function (error) {
    // 对请求错误做些什么
    alert("ERROR");
    return Promise.reject(error);
  });

  axios.defaults.baseURL = 'https://localhost:3000';
 