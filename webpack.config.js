const path = require("path");
const PugPlugin = require("pug-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: {
        index: "./src/index.pug",
    },
    output: {
        path: path.join(__dirname, "./dist/"),
        publicPath: isDev ? "/" : "./",
        clean: true,
    },
    resolve: {
        alias: {
            // use alias to avoid relative paths like `./../../images/`
            "@": path.resolve("./src"),
            "@Images": path.resolve(__dirname, "./src/img/"),
            "@Fonts": path.resolve(__dirname, "./src/fonts/"),
            "@Sass": path.resolve(__dirname, "./src/sass/"),
        },
    },
    plugins: [
        new PugPlugin({
            js: {
                // output filename of extracted JS file from source script
                filename: "assets/js/[name].[contenthash:8].js",
            },
            css: {
                // output filename of extracted CSS file from source style
                filename: "assets/css/[name].[contenthash:8].css",
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                    // import Pug in JavaScript/TypeScript as template function
                    {
                        issuer: /\.(js|ts)$/, // match scripts where Pug is used
                        loader: PugPlugin.loader,
                        options: {
                            method: "compile", // compile Pug into template function
                        },
                    },
                    // render Pug from Webpack entry into static HTML
                    {
                        loader: PugPlugin.loader, // default method is 'render'
                    },
                ],
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ["css-loader", "sass-loader"],
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
                    filename: "assets/fonts/[name].[ext][query]",
                },
            },
        ],
    },
};
