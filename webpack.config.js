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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [plugin]
}