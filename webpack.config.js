const { clear } = require("console");
const path= require("path");
const { Z_PARTIAL_FLUSH } = require("zlib");

module.exports = {
entry: "./src/index.js",
output:{
path: path.resolve(__dirname,"dist"),
filename: "bundle.js"
},
devServer:{
    contentBase: path.join(__dirname,"dist"),
    port: 9000,
    watchContentBase: true
},
module:{
    rules: [
        {
            test: /\.scss$/,
            
             use: ["style-loader", "css-loader","sass-loader"]  
        },
        {
             test: /\.js$/,
             exclude: /node_modules/,
             use: {
                loader: 'babel-loader',
                options: {presets: ['@babel/preset-env']}
            }
        }
    ]
}
}