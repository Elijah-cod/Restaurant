const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js', // Your main entry point
    module: './src/about.js' // Your new module entry point
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
            {
                loader: 'url-loader',
            },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};