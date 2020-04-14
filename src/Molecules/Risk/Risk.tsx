import React from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import R from 'ramda';
import { isNumber } from '../../common/utils';
import { Flexbox, Typography } from '../..';
import { Props } from './Risk.types';

const StyledDiv = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.unit(4)}px;
  background: ${p =>
    p.isActive
      ? p.theme.color.riskLevelActiveBackground
      : p.theme.color.riskLevelInactiveBackground};
`;

export const Risk: React.FC<Props> = ({ risk = 0 }) => {
  const clampedRisk = isNumber(risk) ? Math.max(1, Math.min(risk, 7)) : 0;

  return (
    <Flexbox container gutter={1}>
      {R.range(1, 8).map(box => (
        <Flexbox item flex="1">
          <StyledDiv isActive={box === clampedRisk}>
            <Typography type="tertiary" color={t => t.color.textLight}>
              {box === clampedRisk && clampedRisk}
            </Typography>
          </StyledDiv>
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default injectIntl(Risk);
