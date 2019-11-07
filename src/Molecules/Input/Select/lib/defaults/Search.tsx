import * as React from 'react';
import styled from 'styled-components';
import { Box, Icon } from '../../../../..';
import { Text } from '../../../Text';
import { visuallyHiddenCss } from '../../../../../Atoms/VisuallyHidden';

const StyledInputText = styled(Text)<{ hidden?: boolean; ref?: React.Ref<HTMLInputElement> }>`
  ${p => (p.hidden ? `${visuallyHiddenCss}` : '')}
`;

export const Search = React.forwardRef<
  HTMLInputElement,
  {
    'aria-activedescendant': string;
    'data-testid': string;
    hidden: boolean;
    value: string;
    onChange: React.ChangeEventHandler;
  }
>((props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <Box px={3} my={props.hidden ? 0 : 2} mb={props.hidden ? 0 : 1}>
      <StyledInputText
        leftAddon={<Icon.Search size={4} />}
        label="Search"
        ref={ref}
        size="s"
        hideLabel
        width="100%"
        {...props}
      />
    </Box>
  );
});
