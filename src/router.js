import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'

import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/search',component:search},
    {path:'/shopcar',component:shopcar},
    {path:'/home/newsList',component:newsList},
    {path:'/home/newsinfo/:id',component:newsInfo}

  ],
  //覆盖默认的原来的高亮显示样式类
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router