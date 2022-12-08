/* eslint @typescript-eslint/no-var-requires: "off" */
const paths = require('./paths')

const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer') // help tailwindcss to work
const Dotenv = require('dotenv-webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/**
 * Webpack entrypoint to start building the bundle
 * @type {string[]}
 */
const entry = [paths.src + '/index.tsx']

/**
 * Webpack output for the assets and bundles
 * @type {{path: string, filename: string, publicPath: string}}
 */
const output = {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
    hashFunction: 'sha256'
}

/**
 * Plugins
 */

const cleanBuildFolder = new CleanWebpackPlugin()
const extractCssToSeparateFiles = new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css'
})
const copyAssets = new CopyWebpackPlugin({
    patterns: [
        {
            from: paths.src + '/assets',
            to: 'assets',
            globOptions: {
                ignore: ['*.DS_Store']
            }
        }
    ]
})
const generateHtmlFromTemplate = new HtmlWebpackPlugin({
    title: 'Project Title',
    favicon: paths.src + '/assets/icons/favicon.ico',
    template: paths.public + '/index.html', // template file
    filename: 'index.html' // output file
})
const dotEnv = new Dotenv({ path: process.env.NODE_ENV !== 'production' ? './config/.env' : './config/.env.production' })
const typescriptTypeChecker = new ForkTsCheckerWebpackPlugin()

const plugins = [
    cleanBuildFolder,
    extractCssToSeparateFiles,
    copyAssets,
    generateHtmlFromTemplate,
    dotEnv,
    typescriptTypeChecker
]

/**
 * Loaders
 */

const eslintLoader = {
    enforce: 'pre',
    test: /\.(tsx|ts)$/,
    exclude: /node_modules/,
    use: [{ loader: 'eslint-loader', options: { configFile: paths.root + '/.eslintrc.json' } }]
}
const transpileTypescript = { test: /\.(tsx|ts)$/, exclude: /node_modules/, use: ['babel-loader'] }
const loadStyles = {
    test: /\.(css|scss|sass)$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
        {
            loader: 'postcss-loader', // postcss loader needed for tailwindcss
            options: {
                postcssOptions: { ident: 'postcss', plugins: [tailwindcss, autoprefixer] }
            }
        }
    ]
}
const loadSVGs = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
}
const copyImagesToBuildFolder = { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' }
const inlineFontsAndSVGs = { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' }

const rules = [
    transpileTypescript,
    loadStyles,
    loadSVGs,
    copyImagesToBuildFolder,
    inlineFontsAndSVGs,
    eslintLoader
]

module.exports = {
    entry: entry,
    output: output,
    plugins: plugins,
    module: { rules: rules },
    resolve: { extensions: ['.ts', '.js', '.jsx', '.tsx'] }
}
