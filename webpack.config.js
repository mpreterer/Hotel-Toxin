const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = () => {

    const PATHS = {
        src: path.join(__dirname, './src'),
        dist: path.join(__dirname, './dist'),
    };
    
    const PAGES_DIR = `${PATHS.src}/pages/`;

    return {
        mode: 'development',
        entry: `${PATHS.src}/js/index.js`,
        output: {
            filename: `./${filename('js')}`,
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
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/search-room/searchRoom.pug`,
                filename: './website-pages/search-room/searchRoom.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/room-details/roomDetails.pug`,
                filename: './website-pages/room-details/roomDetails.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/login/login.pug`,
                filename: './website-pages/login/login.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/registration/Registration.pug`,
                filename: './website-pages/registration/Registration.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/search-room/searchRoom.pug`,
                filename: './website-pages/search-room/searchRoom.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/site-pages.pug`,
                filename: './ui-kit/site-pages.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/cards/Cards.pug`,
                filename: './ui-kit/cards/Cards.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/colors-type/colors-type.pug`,
                filename: './ui-kit/colors-type/colors-type.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/elements/Elements.pug`,
                filename: './ui-kit/elements/Elements.html'
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/header-footer/HeaderFooter.pug`,
                filename: './ui-kit/header-footer/HeaderFooter.html'
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: ('./pages/[name][hash].css')
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                      from: path.resolve(__dirname, './src/assets/image'),
                      to:   path.resolve(__dirname, './dist/assets/image')
                    }
                  ]
                })
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
                    test:/\.html$/,
                    use: ['html-loader']
                },
                {
                    test:/\.css$/,
                    use: ['css-loader'] 
                },
                {
                    test:/\.sass$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test:/\.scss$/,  
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test:/\.(png|svg|jpg)$/,
                    type: 'asset/resource'
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