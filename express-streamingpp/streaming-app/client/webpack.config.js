const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8081
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          } ,{
             test: /\.css$/,
               loader: 'style-loader'
             }
             , {
               test: /\.css$/,
               loader: 'css-loader',
               query: {
                 modules: true,
                 localIdentName: '[name]__[local]___[hash:base64:5]'
               },
         },{
            test: /\.(png|jpg)$/,
            loader: 'url-loader'
          }
      ]
   },
   resolve: {
    extensions: ['.js', '.jsx', '.es6','.css'],
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      }),

   ]
}