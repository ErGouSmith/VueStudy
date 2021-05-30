const path = require("path")    //导入path模块

module.exports = {
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname, "dist"), //此处只能使用绝对路径, 因此需要动态的获取路径
        filename:"bundle.js"
    },
    module: {
        rules: [
            {
                //使用正则表达式, 说明下列的loader针对什么文件进行处理
                test: /\.css$/i,
                //cssloader只负责将css文件进行加载, 但不负责解析以及使其生效
                //style-loader负责将样式添加到DOM中
                //使用多个loader时, webpack按照从右向左的顺序进行解析和使用, 因此顺序不能错误
                use: ["style-loader","css-loader"],
            },
        ],
    }
}