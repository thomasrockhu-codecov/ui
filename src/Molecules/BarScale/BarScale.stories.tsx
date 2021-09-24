import React from 'react';
import styled from 'styled-components';
import { Box, Flexbox } from '../..';
import docs from './BarScale.mdx';
import BarScale from '.';

export default {
  title: 'Molecules / BarScale',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const BarScaleNormal = () => <BarScale value={6} max={7} />;
export const DoubleBarScale = () => (
  <>
    <BarScale value={6} max={7} />
    <h2>Max of 6</h2>
    <BarScale value={2} max={6} />
  </>
);

export const BarScaleWithXAxis = () => (
  <BarScale
    value={6}
    axisLabel={
      <Flexbox container justifyContent="space-between">
        <Flexbox item>Low</Flexbox>
        <Flexbox item>Medium</Flexbox>
        <Flexbox item>High</Flexbox>
      </Flexbox>
    }
  />
);

const RiskMeterBox = styled(Box)`
  width: ${(p) => p.theme.spacing.unit(13.5)}px;
`;

export const BarScaleAsRiskMeter = () => (
  <RiskMeterBox>
    Risk
    <BarScale value={4} barHeight={4} gutter={0.5} />
  </RiskMeterBox>
);
