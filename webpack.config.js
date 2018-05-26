const path = require('path');
// script injector and html minifier
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Define where the HTML file is located (template)
// and where the final output will be (filename)
// This will inject the script tag for main.js for us into the built HTML file
const plugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: 'bundle.map.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png$/,
                use: ["url-loader"]
                
            },
            {
                test: /\.jpg$/,
                use: [ "file-loader"]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            }

        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [plugin]
}