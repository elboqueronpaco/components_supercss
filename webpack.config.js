const HtmlWebpackPlugin = require ('html-webpack-plugin')
module.exports = {
    module:{
        rules:[
            //objeto para babel
            {
                test: /\.(js)$/,
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
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: './index.html'
        })
    ]
}