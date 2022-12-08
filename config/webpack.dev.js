/* eslint @typescript-eslint/no-var-requires: "off" */
const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const devServer = {
    historyApiFallback: true,
    static: paths.build,
    client: {
        overlay: {
            warnings: false
        }
    },
    open: false,
    compress: true,
    hot: true,
    port: 3000,
    host: '0.0.0.0'
}

const reactRefreshPlugin = new ReactRefreshWebpackPlugin()

const plugins = [reactRefreshPlugin].filter(Boolean)

const experimentalBabelReactQuickRefresh = {
    test: /\.[js]sx?$/,
    exclude: /node_modules/,
    use: [
    // ... other loaders
        {
            loader: require.resolve('babel-loader'),
            options: {
                // ... other options
                plugins: [
                    // ... other plugins
                    require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    ]
}

const rules = [ experimentalBabelReactQuickRefresh ]

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: devServer,
    module: { rules: rules },
    plugins: plugins
})
