const path = require('path');

const srcPath = path.join(process.cwd(), 'src');
const storiesDir = process.env.STORYBOOK_DIRECTORY
  ? path.join(srcPath, process.env.STORYBOOK_DIRECTORY)
  : srcPath;

module.exports = {
  stories: ['../docs/**/*.stories.mdx', path.join(storiesDir, '**/*.stories.@(js|jsx|ts|tsx|mdx)')],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    'storybook-addon-intl',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.entry.unshift(require.resolve('core-js/es/weak-set'));
    config.entry.unshift(require.resolve('focus-within-polyfill'));
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
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
