import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'

//router默认是hash模式
// 1.安装Router插件
Vue.use(Router)

// 2.配置路由和组件之间的映射关系
const routes = [
  //一个映射关系 => 一个对象
  {
    path:'',  //与path:'/'效果相同
    redirect: '/home' //默认 会自动重定向到/home路径下
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/about',
    component: About
  }
]

// 3.将规则配置到router对象内
const router = new VueRouter({
  routes,
  mode: 'history' //将router的模式改为HTML5的history, 默认是hash
})

// 4.将router对象导出, 之后挂载到Vue实例中
export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
