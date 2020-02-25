const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/image', to: './image'},
        ]),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
        ],
    },
};
