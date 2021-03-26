import React, { useEffect } from 'react';
import styled from 'styled-components';
import { assert } from '../../../../../common/utils';
import { Box } from '../../../../..';

const EllipsizingText = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
`;

const StyledFlexedBox = styled(Box)`
  width: ${(p) => `calc(100% - ${p.theme.spacing.unit(6)}px)`};
  display: flex;
  align-items: center;
`;

export const SelectedValue = () => {
  useEffect(() => {
    assert(
      false,
      'Input.Select: You probably want to redefine default SelectedValue message for your case.',
    );
  }, []);

  return (
    <StyledFlexedBox px={2}>
      <EllipsizingText>Put logic for how to present multiple selection here</EllipsizingText>
    </StyledFlexedBox>
  );
};
