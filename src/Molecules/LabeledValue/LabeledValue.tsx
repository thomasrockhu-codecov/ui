import React from 'react';
import styled from 'styled-components';
import { LabeledValueComponent } from './LabeledValue.types';
import Typography from '../../Atoms/Typography';

const StyledLabeledValue = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.div`
  margin-bottom: ${p => p.theme.spacing.unit(1)}px;
`;

export const LabeledValue: LabeledValueComponent = props => {
  const { labelType = 'secondary' } = props;
  return (
    <StyledLabeledValue>
      <StyledLabel>
        <Typography type={labelType} color={t => t.color.label}>
          {props.label}
        </Typography>
      </StyledLabel>
      {props.children}
    </StyledLabeledValue>
  );
};
