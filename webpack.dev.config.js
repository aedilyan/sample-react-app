const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: [
      "./src/App.js"
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/js",
    filename: "[name].js"
  },
  mode: "development",
  target: "web",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    // new HtmlWebPackPlugin({
    //   template: "./public/index.html",
    //   filename: "./index.html",
    //   excludeChunks: ["server"]
    // }),
    new CopyWebpackPlugin([{ from: "public" }]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Common: path.resolve(__dirname, 'src/components/common/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
      Hooks: path.resolve(__dirname, 'src/hooks/'),
      Src: path.resolve(__dirname, 'src')
    }
  }
};
