//无论是使用commonJS, ES6还是其它的模块化规范, webpack都能够识别打包
//commonJS模块化规范
const {sum, mul} = require("./js/mathUtil.js")

console.log(sum(20,30))
console.log(mul(20,30))

//ES6模块化规范
import { age,name,height } from "./js/info.js"
console.log(name + "'s age is " + age + " and his height is " + height);


//依赖css文件, 使webpack也打包css文件, 但如果没有安装和配置相应的loader还是会报错
require("./css/normal.css")

//使用vue进行开发
import Vue from 'vue'
// import App from "./vue/app.js"
import App from "./vue/App.vue"

//let app = new Vue({ 一般情况下项目不需要保存vue实例 因为自动绑定解析后可以运行即可 获取vue实例是为了在后台F12能操作, 例如app.messsage
new Vue({
    el:"#app",
    template: '<App/>',
    components:{
        App
    }
})