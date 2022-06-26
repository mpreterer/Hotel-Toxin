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
            index: [`${PAGES_DIR}/index.js`],
            'search-room': [`${PAGES_DIR}/website-pages/search-room/searchRoom.js`],
            'room_details': [`${PAGES_DIR}/website-pages/room-details/RoomDetails.js`],
            'login': [`${PAGES_DIR}/website-pages/login/index.js`],
            'registration': [`${PAGES_DIR}/website-pages/registration/Registration.js`],
            'site-pages': [`${PAGES_DIR}/ui-kit/index.js`],
            'cards': [`${PAGES_DIR}/ui-kit/cards/index.js`],
            'colors-type': [`${PAGES_DIR}/ui-kit/colors-type/index.js`],
            'elements': [`${PAGES_DIR}/ui-kit/elements/index.js`],
            'header-footer': [`${PAGES_DIR}/ui-kit/header-footer/index.js`],
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
                filename: './searchRoom.html',
                chunks: ['search-room']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/room-details/roomDetails.pug`,
                filename: './roomDetails.html',
                chunks: ['room_details']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/login/login.pug`,
                filename: './login.html',
                chunks: ['login']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/website-pages/registration/Registration.pug`,
                filename: './Registration.html',
                chunks: ['registration']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/site-pages.pug`,
                filename: './ui-kit/site-pages.html',
                chunks: ['site-pages']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/cards/cards.pug`,
                filename: './ui-kit/cards.html',
                chunks: ['cards']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/colors-type/colors-type.pug`,
                filename: './ui-kit/colors-type.html',
                chunks: ['colors-type']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/elements/elements.pug`,
                filename: './ui-kit/elements.html',
                chunks: ['elements']
            }),
            new HTMLWebpackPlugin({
                template: `${PAGES_DIR}/ui-kit/header-footer/header-footer.pug`,
                filename: './ui-kit/header-footer.html',
                chunks: ['header-footer']
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
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [path.resolve(__dirname, 'src/assets/styles/_vars.scss')]
                            }
                        }
                    ]
                },
                {
                    test:/\.(png|svg|jpg|jpeg|gif)$/i,
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