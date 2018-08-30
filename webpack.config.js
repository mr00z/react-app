const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        entry: "./index.js",
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        context: path.resolve(__dirname, 'src'),
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader!sass-loader",
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/',
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(['public'])
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        stats: 'errors-only',
        open: true,
        port: 8080,
        compress: true
     }
}