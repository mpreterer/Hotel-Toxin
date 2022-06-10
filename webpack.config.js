const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: ['./pages/index.js'],
        'search-room': ['./pages/website-pages/search-room/index.js'],
        'room_details': ['./pages/website-pages/room-details/index.js'],
        'login': ['./pages/website-pages/login/index.js'],
        'registration': ['./pages/website-pages/registration/index.js'],
        'site-pages': ['./pages/ui-kit/index.js'],
        'cards': ['./pages/ui-kit/cards/index.js'],
        'colors-type': ['./pages/ui-kit/colors-type/index.js'],
        'elements': ['./pages/ui-kit/elements/index.js'],
        'header-footer': ['./pages/ui-kit/header-footer/index.js'],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname,'dist')
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        historyApiFallback: true,
        compress: true,
        hot: true,
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new HTMLWebpackPlugin({
            template: './pages/index.pug',
            filename: './index.html',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            template: './pages/website-pages/search-room/searchRoom.pug',
            filename: './searchRoom.html',
            chunks: ['search-room']
        }),
        new HTMLWebpackPlugin({
            template: './pages/website-pages/room-details/roomDetails.pug',
            filename: './roomDetails.html',
            chunks: ['room_details']
        }),
        new HTMLWebpackPlugin({
            template: './pages/website-pages/login/login.pug',
            filename: './login.html',
            chunks: ['login']
        }),
        new HTMLWebpackPlugin({
            template: './pages/website-pages/registration/Registration.pug',
            filename: './Registration.html',
            chunks: ['registration']
        }),
        new HTMLWebpackPlugin({
            template: './pages/ui-kit/site-pages.pug',
            filename: './ui-kit/site-pages.html',
            chunks: ['site-pages']
        }),
        new HTMLWebpackPlugin({
            template: './pages/ui-kit/cards/cards.pug',
            filename: './ui-kit/cards.html',
            chunks: ['cards']
        }),
        new HTMLWebpackPlugin({
            template: './pages/ui-kit/colors-type/colors-type.pug',
            filename: './ui-kit/colors-type.html',
            chunks: ['colors-type']
        }),
        new HTMLWebpackPlugin({
            template: './pages/ui-kit/elements/elements.pug',
            filename: './ui-kit/elements.html',
            chunks: ['elements']
        }),
        new HTMLWebpackPlugin({
            template: './pages/ui-kit/header-footer/header-footer.pug',
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
                    from: path.resolve(__dirname, './src/assets'),
                    to:   path.resolve(__dirname, './dist/assets')
                }
                ]
            }),
        new MiniCssExtractPlugin({
            filename: './css/[name].[hash].css',
        })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: (resourcePath, context) => {
                    return path.relative(path.dirname(resourcePath), context) + '/';
                  },
                },
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.resolve(__dirname, 'src/assets/styles/_vars.scss'),
                },
              },
            ],
          },
          {
            test: /\.pug$/,
            use: {
              loader: 'pug-loader',
            },
          },
          {
            test: /\.(gif|png|jpe?g|svg|ico)$/,
            exclude: [/fonts/],
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/image/[name].[ext]',
                  publicPath: '../',
                },
              },
            ],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            exclude: [/image/],
            use: {
              loader: 'file-loader',
              options: {
                name: 'assets/fonts/[name].[ext]',
                publicPath: '../',
              },
            },
          },
        ],
      },
}