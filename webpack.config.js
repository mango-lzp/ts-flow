const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  entry:'./src/pages/index.tsx',     //入口文件
  output:{                   //出口配置
      filename: 'bundle.js', //出口文件名
      path: path.resolve(__dirname, 'dist')  //出口文件路径
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },    //module.rules loader
  // plugins:[
  //   new HtmlWebpackPlugin({
  //     template: 'index.html'
  //   })
  // ],    //插件
  devServer:{},   //开发服务器
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'react',
  //     root: 'React',
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'react-dom',
  //     root: 'ReactDOM'
  //   }
  // }
};