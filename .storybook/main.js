const path = require('path');

const srcPath = path.join(process.cwd(), 'src');
const storiesDir = process.env.STORYBOOK_DIRECTORY
  ? path.join(srcPath, process.env.STORYBOOK_DIRECTORY)
  : srcPath;

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../docs/**/*.stories.mdx', path.join(storiesDir, '**/*.stories.@(js|jsx|ts|tsx|mdx)')],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-intl',
    'storybook-dark-mode',
  ],

  webpackFinal: async (config) => {
    return {
      ...config,
      entry: [
        require.resolve('core-js/es/weak-set'),
        require.resolve('focus-within-polyfill'),
        ...config.entry,
      ],
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            loader: 'babel-loader',
            options: {
              presets: [['react-app', { flow: false, typescript: true }]],
            },
          },
          {
            test: /\.jsx?$/,
            loader: require.resolve('babel-loader'),
            include: [
              path.resolve(__dirname, '..', 'node_modules', 'use-ssr'),
              path.resolve(__dirname, '..', 'node_modules', 'color'),
            ],
          }
        ],
        resolve: {
          ...config.resolve,
          extensions: [
            ...config.resolve.extensions,
            '.ts', '.tsx', '.d.ts', '.md', '.mdx'
          ]
        }
      }
    }
  },
};
