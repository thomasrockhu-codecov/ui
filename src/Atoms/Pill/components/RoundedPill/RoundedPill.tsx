import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

import { Props, CircleProps } from './RoundedPill.types';
import { Theme } from '../../../../theme/theme.types';
import { isFunction } from '../../../../common/utils';
import { Flexbox, Icon, Button } from '../../../..';

// TODO: move this into a shared utils file
const getColor = (props: ThemedStyledProps<CircleProps, Theme>) => {
  const { $color, theme } = props;

  if (isFunction($color)) {
    return $color(theme);
  }

  return 'transparent';
};

const StyledCross = styled(Icon.Cross8)`
  opacity: 0;
  margin-bottom: 1px;
  transition: opacity 0.2s ease-in;
`;

const StyledDivRounded = styled.div<{ $hasOnClose: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.pillBackground};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.21);
  border-radius: 100px;
  padding: 2px ${(p) => p.theme.spacing.unit(3)}px;

  &:hover ${StyledCross} {
    opacity: 1;
  }
`;

const Circle = styled.div<CircleProps>`
  border-radius: 100%;
  height: 8px;
  width: 8px;
  background-color: ${(p) => getColor(p)};
`;

export const RoundedPill: React.FC<Props> = ({ className, label, color, onClose }) => {
  return (
    <StyledDivRounded className={className} $hasOnClose={isFunction(onClose)}>
      <Button variant="neutral" onClick={onClose}>
        <Flexbox container alignItems="center" gutter={1}>
          <Flexbox item>
            <Circle $color={color} />
          </Flexbox>
          <Flexbox item>{label}</Flexbox>
          <Flexbox item>{isFunction(onClose) ? <StyledCross /> : <></>}</Flexbox>
        </Flexbox>
      </Button>
    </StyledDivRounded>
  );
};
