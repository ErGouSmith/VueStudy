const path = require("path")    //导入path模块

module.exports = {
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname, "dist"), //此处只能使用绝对路径, 因此需要动态的获取路径
        filename:"bundle.js"
    }
}