import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config: Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join('index.html') }),
   
    new ForkTsCheckerWebpackPlugin({
      async: false,
      
    }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias : {
        react:path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode:'development'
};

export default config;