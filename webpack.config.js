//entry-->output
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env)=>{
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry:'./src/app.js',
        output:{                                          //configuring webpack
            path:path.join(__dirname,'public'),
            filename:'bundle.js'
        },
        module:{                                          //setting up babel with webpack
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },{
                test:/\.s?css$/,                          //setting up scss with webpack
                use : CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options:{
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',           //replacing live-server with webpack-dev-server - this stores bundle.js in memory and doesn't create physical copy in the folder.
        devServer:{
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true                      //tells dev server that routing is handled by client code
        }
    }
}
