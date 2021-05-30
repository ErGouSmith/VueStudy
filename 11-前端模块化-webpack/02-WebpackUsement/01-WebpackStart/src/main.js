//无论是使用commonJS, ES6还是其它的模块化规范, webpack都能够识别打包
//commonJS模块化规范
const {sum, mul} = require("./mathUtil.js")

console.log(sum(20,30))
console.log(mul(20,30))

//ES6模块化规范
import { age,name,height } from "./info.js"
console.log(name + "'s age is " + age + " and his height is " + height);
