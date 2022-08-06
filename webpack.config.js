const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            index: [`${PATHS.src}/index.js`],
        },
        output: {
            filename: 'js/[name].js',
            path: path.resolve(__dirname,'dist'),
            assetModuleFilename: 'assets/image/[name][ext]'
        },
        watchOptions: {
            ignored: /node_modules/,
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
              }),
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                  {
                    from: path.resolve(__dirname, './assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                  },
                ],
              }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/home/home.pug`,
                filename: './home.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/search-room/search-room.pug`,
                filename: './search-room.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/room-details/room-details.pug`,
                filename: './room-details.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/login/login.pug`,
                filename: './login.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/registration/registration.pug`,
                filename: './registration.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/cards/cards.pug`,
                filename: './cards.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/colors-type/colors-type.pug`,
                filename: './colors-type.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/elements/elements.pug`,
                filename: './elements.html',
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/header-footer/header-footer.pug`,
                filename: './header-footer.html',
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: ('./pages/[name].[contenthash].css')
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
                    test:/\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource'
                },
                {
                    test:/\.pug$/,
                    use: ['pug-loader'],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    exclude: [/image/],
                    use: {
                      loader: 'file-loader',
                      options: {
                        name: 'assets/fonts/[name][ext]',
                      },
                    },
                },
            ]
        },
        resolve: {
            extensions: ['.js','.json','.sass'],
            alias: {
                '@variables': path.resolve(__dirname, './src/styles/variables.scss'),
            },
        },
    }
}