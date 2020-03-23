import React from 'react';
import styled from 'styled-components';

import { InfoBar } from '../..';

export default {
  title: 'Molecules | InfoBar',
  parameters: {
    component: InfoBar,
  },
};

export const StyledBg = styled.div`
  background: #f5f5f5;
`;

export const defaultUsage = () => (
  <StyledBg>
    <InfoBar>
      InfoBar should be used on top of the pages to show Marketing or Customer Support communication
      messages. Content of the InfoBar is just rendered <code>children</code>
    </InfoBar>
  </StyledBg>
);

defaultUsage.story = {
  name: 'Default usage',
};
/* eslint-disable no-alert */
export const onCloseProp = () => (
  <StyledBg>
    <InfoBar>Without onClose prop InfoBar cannot be dismissed</InfoBar>
    <br />
    <br />
    <br />
    <InfoBar onClose={() => alert('close')}>
      With onClose prop InfoBar can be dismissed, but ParentComponent is in charge to react and
      actually hide the InfoBar.
    </InfoBar>
  </StyledBg>
);
/* eslint-enable no-alert */

onCloseProp.story = {
  name: 'onClose prop demo',
};

const variants = [
  {
    content: (
      <>
        We’re currently working on the new main menu. Links marked with arrow icon will redirect you
        to the previous website experience. <a href="#nonce">Read more</a>
      </>
    ),
  },
  {
    value: 'general',
    content: (
      <>
        We’re currently working on the new main menu. Links marked with arrow icon will redirect you
        to the previous website experience. <a href="#nonce">Read more</a>
      </>
    ),
  },
  {
    value: 'warning',
    content: (
      <>
        We’re currently working on the new main menu. Links marked with arrow icon will redirect you
        to the previous website experience. <a href="#nonce">Read more</a>
      </>
    ),
  },
  {
    value: 'error',
    content: (
      <>
        The US market is currently down, we are fixing it right now. It will soon be back and
        running. <a href="#nonce">Read more</a>
      </>
    ),
  },
  {
    value: 'success',
    content: (
      <>
        We have fixed the US market issue. It is now back to service. <a href="#nonce">Read more</a>
      </>
    ),
  },
];

export const differentVariants = () => (
  <StyledBg>
    {variants.map(v => (
      <>
        {v.value && <code>variant={v.value}</code>}
        <br />
        <InfoBar variant={v.value}>{v.content}</InfoBar>
        <br />
        <br />
      </>
    ))}
  </StyledBg>
);

differentVariants.story = {
  name: 'Different variants',
};
