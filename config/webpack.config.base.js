const path = require('path');
const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');
const utils = require('./utils');

const webpackConfig = {
    entry: {
        app: [
            path.resolve(__dirname, `../${utils.project}/index.js`)
        ]
    },
    plugins: [
        
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = webpackConfig;
