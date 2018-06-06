const path = require('path');

module.exports = {
    entry: {
        'main': './src/js/main.js', 
        'syntax': './src/js/syntax.js'
    },
    output: {
        path: path.resolve(__dirname, './static/js'),
        filename: '[name].js'
    }
}