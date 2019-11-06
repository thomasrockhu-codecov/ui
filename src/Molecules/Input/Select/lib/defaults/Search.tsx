import * as React from 'react';
import styled from 'styled-components';
import { useSelectMachineFromContext } from '../context';
import { Box, Icon } from '../../../../..';
import { Text } from '../../../Text';
import { visuallyHiddenCss } from '../../../../../Atoms/VisuallyHidden';

const StyledInputText = styled(Text)<{ hidden?: boolean; ref?: React.Ref<HTMLInputElement> }>`
  ${p => (p.hidden ? `${visuallyHiddenCss}` : '')}
`;

export const Search = React.forwardRef((_, ref: React.Ref<HTMLInputElement>) => {
  const [state, send] = useSelectMachineFromContext();
  const searchQuery = state.context.searchQuery;
  const showSearch = state.context.showSearch;
  const itemFocusIdx = state.context.itemFocusIdx;
  const id = state.context.id;
  const hidden = !showSearch;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    send({ type: 'SEARCH_QUERY_UPDATE', payload: e.target.value });

  return (
    <Box px={3} my={hidden ? 0 : 2} mb={hidden ? 0 : 1}>
      <StyledInputText
        leftAddon={<Icon.Search size={4} />}
        label="Search"
        ref={ref}
        data-testid="input-select-search-field"
        size="s"
        hideLabel
        aria-activedescendant={`${id}-option-${itemFocusIdx}`}
        width="100%"
        hidden={hidden}
        value={searchQuery}
        onChange={handleChange}
      />
    </Box>
  );
});
