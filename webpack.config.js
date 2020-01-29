const path = require('path');
module.exports = {
    entry: './src/a.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.less$/, use: 'less-loader'
        }]
    }
}