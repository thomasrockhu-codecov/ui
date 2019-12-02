import React from 'react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import { Link, Typography } from '../..';

export default {
  title: 'Molecules | Link',
  parameters: {
    component: Link,
  },
};

export const defaultUsage = () => (
  <BrowserRouter>
    <Typography type="secondary" weight="bold">
      <Link to="startpage" onClick={action('clicked')}>
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

defaultUsage.story = {
  name: 'Default usage',
};

export const withTypographyPrimaryAsType = () => (
  <BrowserRouter>
    <Typography type="primary" weight="bold">
      <Link to="startpage" onClick={action('clicked')}>
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

withTypographyPrimaryAsType.story = {
  name: 'With typography primary as type',
};

export const externalLinkWithItsDefaultValues = () => (
  <BrowserRouter>
    <Typography type="secondary" weight="bold">
      <Link to="http://www.google.com" onClick={action('clicked')} external>
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

externalLinkWithItsDefaultValues.story = {
  name: 'External link with its default values',
};

export const cmsLinkWithItsDefaultValues = () => (
  <BrowserRouter>
    <Typography type="secondary" weight="bold">
      <Link to="http://www.google.com" onClick={action('clicked')} cms>
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

cmsLinkWithItsDefaultValues.story = {
  name: 'Cms link with its default values',
};

export const externalLinkWithRelAndTargetOverriden = () => (
  <BrowserRouter>
    <Typography type="secondary" weight="bold">
      <Link
        to="http://www.google.com"
        rel="nofollow"
        target="_self"
        onClick={action('clicked')}
        external
      >
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

externalLinkWithRelAndTargetOverriden.story = {
  name: 'External link with rel and target overriden',
};

export const withDisabledPropResultsInADisabledButtonLookingLikeALink = () => (
  <BrowserRouter>
    <Typography type="secondary" weight="bold">
      <Link onClick={action('clicked')} disabled>
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

withDisabledPropResultsInADisabledButtonLookingLikeALink.story = {
  name: 'With disabled prop results in a disabled button looking like a link',
};

export const withoutToPropResultsInAButtonLookingLikeALink = () => (
  <BrowserRouter>
    <Typography type="secondary" weight="bold">
      <Link onClick={action('clicked')}>Link</Link>
    </Typography>
  </BrowserRouter>
);

withoutToPropResultsInAButtonLookingLikeALink.story = {
  name: 'Without to prop results in a button looking like a link',
};

export const withBlackColor = () => (
  <BrowserRouter>
    <Typography type="primary">
      <Link color="black" to="http://www.google.com" external onClick={action('clicked')}>
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

withBlackColor.story = {
  name: 'With black color',
};

export const withInheritedColor = () => (
  <BrowserRouter>
    <Typography type="primary" color={t => t.color.generationSavingsTimelineColor2}>
      <Link color="inherit" to="http://www.google.com" external onClick={action('clicked')}>
        Link
      </Link>
    </Typography>
  </BrowserRouter>
);

withInheritedColor.story = {
  name: 'With inherited color',
};
