var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/App.tsx",

    output: {
        filename: "bundle.min.js",
        path: __dirname + "/dist",
        publicPath: 'dist'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: debug ? "source-map" : null,

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'tslint-loader'.
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "tslint-loader",
                options: {
                    configFile: "tslint.json",
                    emitErrors: true,
                    failOnHint: true,
                    typeCheck: true,
                    tsConfigFile: "tsconfig.json"
                }
            }
        ]
    },

    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    devServer: {
        contentBase: __dirname
    },
}