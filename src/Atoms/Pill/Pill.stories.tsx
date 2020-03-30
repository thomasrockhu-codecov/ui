import React from 'react';
import styled from 'styled-components';
import { Props } from './Pill.types';

import { Pill } from './Pill';
import { Display } from '../../common/Display';

const StyledContent = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  title: 'Atoms | Pill',

  parameters: {
    component: Pill,
  },
};

export const basicCard = () => <Pill />;

export const pillWithBar = () => <Pill value="123" barColor={t => t.color.pill1} />;

pillWithBar.story = {
  name: 'Pard with colored top bar',
};
