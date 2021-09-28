import React from 'react';
import styled from 'styled-components';
import { Typography } from '../..';
import { Props, colorProps } from './SfdrBadge.types';

const acceptableValues: Array<number | undefined> = [8, 9]; // add article numbers here

const getSfdrColor = (args: colorProps) => {
  const { theme, value } = args;
  let color = 'transparent';
  switch (value) {
    case 8:
      color = theme.color.sfdrArticle8;
      break;
    case 9:
      color = theme.color.sfdrArticle9;
      break;
    default:
      break;
  }
  return color;
};

const StyledSfdrColor = styled.div<colorProps>`
  background-color: ${getSfdrColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.theme.spacing.unit(5)}px;
  height: ${(p) => p.theme.spacing.unit(5)}px;
  padding: 0 !important; // We never want extra padding as it will break the styles.
`;

export const SfdrBadge: React.FC<Props> = ({ value }) => {
  const isValid = acceptableValues.includes(value);
  return (
    <StyledSfdrColor value={value}>
      <Typography
        type="tertiary"
        weight="bold"
        color={(t) => (isValid ? t.color.textLight : t.color.text)}
      >
        {isValid ? value : '-'}
      </Typography>
    </StyledSfdrColor>
  );
};
