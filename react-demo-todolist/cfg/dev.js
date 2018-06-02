/**
 * Created by x1c on 2018/5/30.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {dfPath, dfConfig} = require('./default.js');

let config = object.assign(dfConfig, {
   plugins : [
       new webpackHotModuleReplacementPlugin(),
       new HtmlWebpackPlugin({
           filename : '../index.html',
           template : './src/index.html'
       }),
       //使用ProvidePlugin加载的模块在使用时将不再需要import和require进行引入
       new webpack.ProvidePlugin({
           $ : 'jquery',
           jQuery : 'jquery',
           React : 'react',
           ReactDOM : 'react-dom',
           PT : 'prop-types'
        })
   ],
    //告诉 webpack 解析模块时应该搜索的目录。
    resolve : {
       modules : [
           'node_modules',
           dfPath.src,
           dfPath.common,
           dfPath.src,
           dfPath.components,
           dfPath.layout,
           dfPath.view,
           dfPath.root
       ]
    },
    devtool : 'cheap-module-eval-source-map'
});

config.modules.rules.push(
    {
        test : /\.js$/,
        use : ['babel-loader'],
        include : [dfPath.src]
    },
    {
        test : /\.css$/,
        use : ['style-loader','css-loader']
    },
    {
        test : /\.scss$/,
        use : [
            'style-loader',
            {
                loader : 'css-loader',
                options : {
                    module : true,
                    localIdentName: '[local]--[hash:base64:6]'
                }
            },
            'sass-loader'
        ]
    }
);