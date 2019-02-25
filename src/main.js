// 入口文件
import Vue from 'vue'


// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

import moment from 'moment'
// 定义一个全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-SS HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root='http://www.liulongbin.top:3005';
// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需求导入Mint-ui中的组件
import { Header,Swipe,SwipeItem,Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入自己的router.js路由模块
import router from './router.js'

import app from './App.vue'

var vm =new Vue({
    el:'#app',
    render:c => c(app),
    router
})