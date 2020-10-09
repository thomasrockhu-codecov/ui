const globalConfig = require('../babel.config.js');

module.exports = (api) => {
  const projectConfig = globalConfig(api);

  /**
   * This is a workaround to only enable "loose" mode in Storybook since it does not compile without it after upgrading to version 6.
   * See reference: https://github.com/storybookjs/storybook/issues/10939
   */
  projectConfig.plugins = projectConfig.plugins.map((plugin) => {
    if (['@babel/plugin-proposal-class-properties'].includes(plugin)) {
      return [plugin, { loose: true }];
    }
    if (['@babel/plugin-proposal-private-methods'].includes(plugin)) {
      return [plugin, { loose: true }];
    }
    if (['@babel/plugin-proposal-private-property-in-object'].includes(plugin)) {
      return [plugin, { loose: true }];
    }

    return plugin;
  });

  return projectConfig;
};
