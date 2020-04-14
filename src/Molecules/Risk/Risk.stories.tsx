import React from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import docs from './Risk.mdx';
import Risk from '.';

export default {
  title: 'Molecules | Risk',
  parameters: {
    ...docs.parameters,
  },
  decorators: [withKnobs],
};

const getRiskProps = ({ risk = 0 } = {}) => ({
  risk: number('Risk', risk),
});

export const RiskWith3 = () => <Risk {...getRiskProps({ risk: 3 })} />;
