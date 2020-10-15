module.exports = api => {
  const presets = [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: api.env('esm') ? false : 'auto',
        targets: {
          node: 'current',
          browsers: ['last 2 versions'],
        },
      },
    ],
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    'ramda',
    [
      'babel-plugin-transform-remove-imports',
      {
        test: 'types$',
      },
    ],
  ];

  const ignore = ['**/*.types.ts'];
  if (process.env.NODE_ENV !== 'test') ignore.unshift('src/**/*.test.ts', 'src/**/*.snap');

  return {
    comments: false,
    presets,
    env: {
      production: {
        plugins: [...plugins, ['react-remove-properties', { properties: ['data-testid'] }]],
      },
      esm: {
        plugins: [...plugins, ['react-remove-properties', { properties: ['data-testid'] }]],
      },
      development: {
        plugins,
      },
      test: {
        plugins: [...plugins, 'require-context-hook', '@babel/plugin-transform-runtime'],
      },
    },
    ignore,
  };
};
