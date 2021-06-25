import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

import { Configuration as WebpackConfiguration, DefinePlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const webpackConfig = (): Configuration => ({
    entry: "./src/index.tsx",
    ...(process.env.production || !process.env.development
        ? {}
        : { devtool: "eval-source-map" }),

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new DefinePlugin({
            "process.env": process.env.production || !process.env.development,
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}",
            },
        }),
    ],
});

export default webpackConfig;