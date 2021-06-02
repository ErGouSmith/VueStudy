//开发时环境配置
const webpackMerge = require("webpack-merge")
const baseConfig = require("./base.config")


module.exports = webpackMerge(baseConfig,{
    // webpack的小型本地服务器
    devServer:{ //默认8080端口
        contentBase:'./dist',   //
        inline: true    //是否实时刷新页面
    }
})