const HtmlWebpackPlugin = require ('html-webpack-plugin'),
    MiniCssExtracyPlugin = require('mini-css-extract-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    {VueLoaderPlugin} = require ('vue-loader')
module.exports = {
    entry:{
        js: './src/index.js'
    } ,
    output: {
        filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    module:{
        rules:[
            //objeto para babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                 loader: 'babel-loader'
                 }
            },
            //Html
            {
                test: /\.html$/,
                use: [
                     {   
                    loader: 'html-loader',
                    options: { mininize: true }
                    }
                ]
            },
            // Hojas de estilos
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    MiniCssExtracyPlugin.loader,
                    'css-loader?minimize&sourceMap',
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: [ 'last 2 versions' ]
                            },
                            sourceMap: true,
                            plugins: () => [autoprefixer]
                        }
                    },
                    'sass-loader?outputStyle=compressed&sourceMap'
                ]
            },
            // Archivo de imagenes
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use:[
                    'file-loader?name=assets/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            },
            // Archivo 
            {
                test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
                use:[
                    'file-loader?name=assets/[name].[ext]'
                ]
            },
            //Para vue
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader'
                }
            },
            // Para ts
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([ 'dist/**/*.*']),
        new MiniCssExtracyPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css'
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
            chunks: ['js']
        })
    ]
}