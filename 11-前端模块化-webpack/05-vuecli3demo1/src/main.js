import Vue from 'vue'
import App from './App.vue'

// 在npm run serve时是否显示提示信息
Vue.config.productionTip = false

// .$mount("#app") 相当于el:"#app", el最后在vue内部就是会进行mount挂载
new Vue({
  render: h => h(App),
}).$mount('#app')
