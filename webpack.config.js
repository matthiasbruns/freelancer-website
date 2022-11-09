const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Matthias Bruns',
            template: 'src/index.html' }),
        new MiniCssExtractPlugin({
            filename:"bundle.css"}),
        new CopyPlugin({
            patterns: [
                { from: "src/img", to: "img" }
            ]
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
};
