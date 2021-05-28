import {flag, sum} from "./a1.js"

if(flag){
    console.log("使用c引入a1的变量和函数, 由于模块化封装, 不使用b1的变量")
}

import {pai , e} from "./a1.js"

console.log(sum(pai,e))