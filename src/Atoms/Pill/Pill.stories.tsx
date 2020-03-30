import React from 'react';
import styled from 'styled-components';

import { Pill } from './Pill';
import Icon from '../Icon';
import Typography from '../Typography';
import Button from '../../Molecules/Button';

const StyledButton = styled(Button)`
  padding: 0 ${p => p.theme.spacing.unit(1)}px;
`;

export default {
  title: 'Atoms | Pill',

  parameters: {
    component: Pill,
  },
};

export const basicPill = () => (
  <Pill>
    <StyledButton type="button" variant="neutral">
      <Typography type="secondary">1234</Typography>
    </StyledButton>
    <StyledButton type="button" variant="neutral">
      <Icon.CrossThin size={2} />
    </StyledButton>
  </Pill>
);

basicPill.story = {
  name: 'Basic Pill',
};

export const pillWithBar = () => (
  <Pill barColor={t => t.color.pill8}>
    <StyledButton type="button" variant="neutral">
      <Typography type="secondary">1234</Typography>
    </StyledButton>
    <StyledButton type="button" variant="neutral">
      <Icon.CrossThin size={2} />
    </StyledButton>
  </Pill>
);

pillWithBar.story = {
  name: 'Pill with colored bar',
};
