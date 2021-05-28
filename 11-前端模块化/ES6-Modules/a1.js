let name = "小明";
let age = 18;
let flag = true;

function sum(num1,num2){
    return num1+num2;
}

if(flag){
    console.log(sum(20,30));
}

//导出方式1 先定义 后导出
export {
    flag , sum
}

//导出方式2 定义加导出
export let pai = 3.1415926;
export let e = 1.73;
export function mul(num1, num2){
    return num1+num2;
}