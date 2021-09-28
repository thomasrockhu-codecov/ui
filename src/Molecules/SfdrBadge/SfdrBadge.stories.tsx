import React from 'react';
import { SfdrBadge } from './SfdrBadge';
import { Flexbox, Typography } from '../..';

export default {
  title: 'Molecules / SfdrBadge',
};

export const Default = () => {
  return (
    <Flexbox
      container
      width="100%"
      height="75vh"
      alignItems="center"
      justifyContent="center"
      gutter={15}
    >
      <Flexbox direction="column" alignItems="center" container>
        <Typography type="tertiary">Article 8</Typography>
        <SfdrBadge value={8} />
      </Flexbox>
      <Flexbox direction="column" alignItems="center" container>
        <Typography type="tertiary">Article 9</Typography>
        <SfdrBadge value={9} />
      </Flexbox>
      <Flexbox direction="column" alignItems="center" container>
        <Typography type="tertiary">Invalid Number</Typography>
        <SfdrBadge value={100} />
      </Flexbox>
      <Flexbox direction="column" alignItems="center" container>
        <Typography type="tertiary">No Value Prop</Typography>
        <SfdrBadge />
      </Flexbox>
    </Flexbox>
  );
};
