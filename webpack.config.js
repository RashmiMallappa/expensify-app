//entry-->output
const path = require('path')

module.exports = {
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
            use :[                                    //use - array of loaders
                'style-loader',                       // takes css in JS representation and add into DOM
                'css-loader',                         //allow webpack to load css into JS representation
                'sass-loader'                         //behind the scene sass-loader uses node-sass to conver the file scss into css
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',           //replacing live-server with webpack-dev-server - this stores bundle.js in memory and doesn't create physical copy in the folder.
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true                      //tells dev server that routing is handled by client code
    }
}