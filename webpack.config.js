const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = () => {
   
    return {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    resolve: {
        extentions: ['js','json']
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './pages/website-pages/index.pug',
            filename: './index.html'
        })
    ]
  }
}