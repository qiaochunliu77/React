var path = require('path');
var basePath = __dirname;
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: [".js", '.ts', 'tsx']
    },
    // 让代码兼容性更好
    entry: ["@bable/polyfill", "./app.tsx"],
    // 输出
    output: {
        path: path.join(basePath, 'dist'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    // 服务器 打包（编译）之后 启动
    devServer: {
        contentBase: './dist',
        inline: true, //enable watch and live reload
        host: "localhost",
        port: 8080,
        stats: "errors-only"
    },
    module: {
        rules: [
            {
                test: /\.(ts | tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelCore: "@babel/core"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename:'index.html',
            template: 'index.html',
            hash:true
        })
    ]
}