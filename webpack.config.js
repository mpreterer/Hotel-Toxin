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
        entry: {
            index: [`${PATHS.src}/pages/index.js`],
            'search_room': [`${PATHS.src}/pages/website-pages/search-room/index.js`],
            'room_details': [`${PATHS.src}/pages/website-pages/room-details/index.js`],
            'login': [`${PATHS.src}/pages/website-pages/login/index.js`],
            'registration': [`${PATHS.src}/pages/website-pages/registration/index.js`],
        },
        output: {
            filename: 'js/[name].js',
            path: path.resolve(__dirname,'dist')
        },
        watchOptions: {
            ignored: /node_modules/,
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                  {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                  },
                ],
              }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/index.pug`,
                filename: './index.html',
                chunks: ['index']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/search-room/searchRoom.pug`,
                filename: './website-pages/search-room/searchRoom.html',
                chunks: ['search_room']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/room-details/roomDetails.pug`,
                filename: './website-pages/room-details/roomDetails.html',
                chunks: ['room_details']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/login/login.pug`,
                filename: './website-pages/login/login.html',
                chunks: ['login']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/registration/Registration.pug`,
                filename: './website-pages/registration/Registration.html',
                chunks: ['registration']
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: ('./pages/[name].[contenthash].css')
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                      from: path.resolve(__dirname, './src/assets/image'),
                      to:   path.resolve(__dirname, './dist/assets/image')
                    }
                  ]
                }),
            new MiniCssExtractPlugin({
                filename: './css/[name].[hash].css',
            })
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
                }
            ]
        },
        resolve: {
            extensions: ['.js','.json','.sass']
        },
    }
}