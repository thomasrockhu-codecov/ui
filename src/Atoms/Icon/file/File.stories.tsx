import React from 'react';
import styled from 'styled-components';
import Icon from '.';
import { Flexbox, LabeledValue, Typography } from '../../..';

const StyledLabeledValue = styled(LabeledValue)`
  align-items: center;
  margin: 12px 0;
  width: 90px;
`;

export default {
  title: 'Atoms / Icon / Category / File',
};

const SizeIcons = (size: string) => (
  <Flexbox container gutter={8} wrap="wrap">
    {Object?.entries(Icon)
      ?.filter((name) => name[0].includes(size))
      .map(([iconName, IconComponent]: [string, React.ComponentType<any>], index) => (
        <StyledLabeledValue label={<Typography type="tertiary">{iconName}</Typography>}>
          <IconComponent title={index} />
        </StyledLabeledValue>
      ))}
  </Flexbox>
);

export const size8 = () => <>{SizeIcons('8')}</>;

size8.story = {
  name: '8px',
};

export const size16 = () => <>{SizeIcons('16')}</>;

size16.story = {
  name: '16px',
};

export const size24 = () => <>{SizeIcons('24')}</>;

size24.story = {
  name: '24px',
};

export const size32 = () => <>{SizeIcons('32')}</>;

size32.story = {
  name: '32px',
};
