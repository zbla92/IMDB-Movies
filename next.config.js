// next.config.js
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

function hackRemoveMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config'
  );
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          // eslint-disable-next-line no-param-reassign
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withCSS(
  withSass({
    webpack(config, options) {
      hackRemoveMinimizeOptionFromCssLoaders(config);
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: `/_next/static/chunks/fonts/`,
              outputPath: `${
                options.isServer ? '../' : ''
              }static/chunks/fonts/`,
              name: '[name]-[hash].[ext]'
            }
          }
        ]
      });
      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: `/_next/static/images/`,
              outputPath: `${options.isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]'
            }
          }
        ]
      });
      return config;
    },
    env: {
      APP_ENV: process.env.APP_ENV,
      TEST_ENV: 'test'
    }
  })
);
