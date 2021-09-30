const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {

    const PATHS = {
        src: path.join(__dirname, './src'),
        dist: path.join(__dirname, './dist'),
    };
    
    const PAGES_DIR = `${PATHS.src}/pages/`;

    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname,'dist')
        },
        // watchOptions: {
        //     ignored: /node_modules/,
        // },
        plugins: [
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/index.pug`,
                filename: './index.html'
            }),
            new CleanWebpackPlugin(),
            // new MiniCssExtractPlugin({
            //     filename: './css/[name].[hash].css',
            // })
        ],
        stats: {
            children: true
        },
        module: {
            rules: [
                {
                    test:/\.css$/,
                    use: ['css-loader'] 
                },
                {
                    test:/\.s[ac]ss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                        'scss-loader'
                    ]
                },
                {
                    test:/\.png|svg|jpg$/,
                    use: ['file-loader'] 
                },
                {
                    test:/\.pug$/,
                    use: ['pug-loader'],
                    // include: path.join(__dirname,`${PAGES_DIR}/index.pug`)
                }
            ]
        },
        resolve: {
            extensions: ['.js','.json','.sass']
        },
    }
}