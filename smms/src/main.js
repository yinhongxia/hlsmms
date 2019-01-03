import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入公共样式
import './assets/styles/public.css'


import axios from 'axios'
Vue.prototype.axios = axios;
import qs from 'qs'
Vue.prototype.qs = qs;



/* //构造全局守卫
router.beforeEach((to, from, next) => {
  // alert("全局守卫");
  // next(); //放行：只有登录成功的才放行

  //************************ 让ajax携带cookie证书********************************
  // axios.defaults.withCredentials=true;

  //发起ajax到后端路由获取cookie，cookie存在就放行，否则去登录页面
//   axios.get("http://127.0.0.1:9990/users/getCookie").then(result=>{
//     console.log("验证的结果",result);
//     //如果登录成或者是访问的页面时登录页面就放行
//     if(result.data.isOk || to.path=="/login"){
//       next(); //登录成功放行
//     }
//     //否则就跳转到登录页面
//     else{
//       //console.log("to",to);
//       next("/login");
//     }
//   }).catch(err=>{
//     console.error("错误了!"+err.message);
//   });
});
 */

//  构造全局守卫
router.beforeEach((to, from, next)=>{
  // 让ajax携带cookie证书
  axios.defaults.withCredentials = true;
  // 发起ajax到后端路由获取cookie，cookie存在就方向，不存在就去登录页面
  axios.get('http://127.0.0.1:9990/users/getCookie')
  .then(result=>{
    //如果登录成供或者是访问的页面时登录页面就放行
    if(result.data.isOk || to.path=="/login"){
      next();
    }else{
      // 否则回登录页面
      next('/login');
    }
  })
  .catch(err=>{
    console.log(err.message);
  })
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
