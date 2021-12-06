import React from 'react';
import styled from 'styled-components';
import { Box, OldIcon } from '../../../../..';
import { Text } from '../../../Text';
import { visuallyHiddenCss } from '../../../../../Atoms/VisuallyHidden';

const StyledInputText = styled(Text)<{ hidden?: boolean; ref?: React.Ref<HTMLInputElement> }>`
  ${(p) => (p.hidden ? `${visuallyHiddenCss}` : '')}
  color: ${(p) => p.theme.color.text}
`;

export const Search = React.forwardRef<
  HTMLInputElement,
  {
    'aria-activedescendant': string;
    'data-testid': string;
    hidden: boolean;
    value: string;
    onChange: React.ChangeEventHandler;
    fullscreenOnMobile: boolean;
  }
>((props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <Box px={props.fullscreenOnMobile ? 0 : 3} my={props.hidden ? 0 : 2} mb={props.hidden ? 0 : 1}>
      <StyledInputText
        leftAddon={<OldIcon.Search size={4} />}
        label="Search"
        ref={ref}
        size={!props.fullscreenOnMobile ? 's' : undefined}
        hideLabel
        width="100%"
        {...props}
      />
    </Box>
  );
});
