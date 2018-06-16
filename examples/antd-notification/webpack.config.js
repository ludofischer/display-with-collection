const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        test: /\.js/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
