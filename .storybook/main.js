const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
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
      ],
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      loader: require.resolve('babel-loader'),
      include: [path.resolve(__dirname, '..', 'node_modules', 'use-ssr')],
    });

    // config.module.rules.push({
    //   test: /\.mdx$/,
    //   use: [
    //     {
    //       loader: 'babel-loader',
    //       // may or may not need this line depending on your app's setup
    //       options: {
    //         plugins: ['@babel/plugin-transform-react-jsx'],
    //       },
    //     },
    //     {
    //       loader: '@mdx-js/loader',
    //       options: {
    //         compilers: [createCompiler({})],
    //       },
    //     },
    //   ],
    // });

    config.resolve.extensions.push('.ts', '.tsx', '.d.ts', '.md', '.mdx');
    return config;
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
}