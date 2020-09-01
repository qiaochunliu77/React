const path = require('path');
const nodeExternals = require('webpack-node-externals');// 打包的时候排除第三方库
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const serverConfig = {
    target:'node',// 在node项目中使用
    mode:'development',// 开发的时候打包
    entry:'./src/server/index.js',//入口 从哪里开始
    output:{
        filename:'bundle.js',
        // 后端 打包到build目录
        path:path.resolve(__dirname, 'build'),
    },
    // 排除node内置的模块
    externals:[nodeExternals()]
}
module.exports = merge(serverConfig,baseConfig);