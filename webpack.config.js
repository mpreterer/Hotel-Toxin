const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = requier('clean-webpack-plugin');

module.exports = {
    entry: {
        context: path.resolve(__dirname,'src'),
        mode: 'development',
        main: ['./index.js']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['js','json']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.sass/,
                use: ['sass-loader']
            },
            {
                test: /\.jpg|webp|svg$/,
                use: ['file-loader']
            }
        ]
    }
}