const path = require("path")    //导入path模块
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")

module.exports = {
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname, "dist"), //此处只能使用绝对路径, 因此需要动态的获取路径
        filename:"bundle.js",
        publicPath: 'dist/' //为任何url相关连接的文件设置目录, 不设置的话打包时会导致这些文件路径错误;
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
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            //limit单位为byte, 当图片小于limit时, 会将图片编译成base64的格式
                            limit:8192,  //一般是保持默认的8kb
                            //当大于limit时, 会自动使用file-loader进行加载, file-loader不用配置

                            //默认情况下 打包后的文件会自动分配一个32位的hash值作为文件名, 但又长又不利于管理
                            name: 'img/[name].[hash:8].[ext]'
                            //通过上述代码, 能够以 图片本来的名称 + 8位hash值 再跟上扩展名 来命名该图片
                        }
                    }
                ]
            },
            {
                //配置vue-loader时, 需要vueLoaderPlugin
                test: /\.vue$/,
                use: ["vue-loader"],
            },
        ],
    },
    //指定vue选择runtime-compiler环境
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}