const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./ts/index.ts",
    output: {
        filename: "bundle.[hash:8].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: process.env.NODE_ENV === "production" ? false : "source-map",
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            // use alias to avoid relative path like `./../../images/`
            Images: path.resolve(__dirname, "./src/assets/img/"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|jpeg|svg|ico)/,
                type: "asset/resource",
                generator: {
                    // output filename of images
                    filename: "assets/img/[name].[hash:8][ext]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    // output filename of fonts
                    filename: "assets/fonts/[name][ext][query]",
                },
            },
        ],
    },
};
