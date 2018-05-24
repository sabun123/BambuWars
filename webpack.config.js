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
                use: {
                    loader: "url-loader"
                }
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: "file-loader"
                }
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                }
            }

        ]
    },
    plugins: [plugin]
}