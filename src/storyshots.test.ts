// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  storyNameRegex: /^(?!(Documentation|Experimental)).*$/,
});
