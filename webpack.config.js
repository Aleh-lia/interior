const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

[
  {
    test: /\.vue$/,
    loader: "vue-loader",
  },
];

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // это будет применяться к файлам `.js`
      // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // это будет применяться к файлам `.css`
      // А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              // включаем CSS модули
              modules: true,
              // настраиваем генерируемое имя класса
              localIdentName: "[local]_[hash:base64:8]",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              indentedSyntax: true,
              // sass-loader >= 8
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // вы можете также указать файл, например `variables.scss`
              // используйте свойство `prependData` здесь, если версия sass-loader = 8
              // используйте свойство `data` здесь, если версия sass-loader < 8
              additionalData: `$color: red;`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin(),
  ],
};

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});
module.exports = {
  // This is the "main" file which should include all other modules
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
  plugins: [htmlPlugin],
};
