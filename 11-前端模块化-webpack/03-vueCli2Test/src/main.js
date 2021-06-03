import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 原来的代码 render: h => h(App)
  // 相当于 
  render:function(h){
    return h(App)
  }

  //render函数 是基于vue-template-render包, 能够将所有的template通过createElement解析

  //createElement普通用法:
  // render: function (createElement){
  //   //1.createElement("标签",{标签的属性},['标签的内容']) 相当于直接替换对应app, 与组件模板替换的效果相同
  //   return createElement("h2",{class: 'box'},['Hello World!', createElement('button',['按钮'])])
  // }
})
