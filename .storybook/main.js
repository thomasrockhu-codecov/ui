const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    'storybook-addon-intl',
  ],
  webpackFinal: async (config) => {
    config.entry.unshift(require.resolve('core-js/es/weak-set'));
    config.entry.unshift(require.resolve('focus-within-polyfill'));
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
        { loader: 'react-docgen-typescript-loader' },
      ],
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      loader: require.resolve('babel-loader'),
      include: [path.resolve(__dirname, '..', 'node_modules', 'use-ssr')],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.d.ts', '.md', '.mdx');
    return config;
  },
};
