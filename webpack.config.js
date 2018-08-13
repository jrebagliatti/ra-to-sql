const path = require('path');

module.exports = {
  entry: './src/ra-to-sql.js',
  output: {
    filename: 'ra-to-sql.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'raToSql',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  node: {
    fs: 'empty'
  },
  mode: 'development'
};