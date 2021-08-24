import React from 'react';
import styled from 'styled-components';
import { Box, FadedScroll, List as UIList, Separator } from '../../../../..';
import { Props as FadedScrollProps } from '../../../../../Atoms/FadedScroll/FadedScroll.types';
import { useSelectMachineFromContext } from '../context';

type ListFullScreenProps = {
  listPosition?: string;
  searchComponent?: React.ReactNode;
  actionsComponent?: React.ReactNode;
  maxHeight?: string;
  noFormField?: boolean;
  placement?: 'bottom' | 'top';
};

const StyledList = styled(UIList)<any>`
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow-y: auto;
`;

const FadedScrollWithoutPaddingBottom = styled(FadedScroll)<
  FadedScrollProps & {
    hasAction: boolean;
    hideSearch: boolean;
  }
>`
  height: calc(
    100% -
      ${({ hasAction, hideSearch, theme }) => {
        if (!hasAction && hideSearch) return 0;
        if (!hasAction || hideSearch) return theme.spacing.unit(10);
        return theme.spacing.unit(20);
      }}px
  );
  display: flex;
  overflow: hidden;
`;

const StyledDiv = styled.div<any>`
  width: 100%;
  height: 90vh;
`;

export const ListFullScreen: React.FC<ListFullScreenProps> = ({
  children,
  searchComponent = null,
  actionsComponent = null,
}) => {
  const areOptionsProvided = React.Children.count(children) > 0;
  const [state] = useSelectMachineFromContext();
  const { showSearch, disableSearchComponent: disableSearch } = state.context;

  return (
    <StyledDiv>
      {searchComponent}

      <FadedScrollWithoutPaddingBottom
        enableMobileFade
        fadeHeight={8}
        hasAction={!!actionsComponent}
        hideSearch={!showSearch || disableSearch}
      >
        <StyledList role="listbox">{children}</StyledList>
      </FadedScrollWithoutPaddingBottom>

      {actionsComponent !== null && (
        <>
          {areOptionsProvided && <Separator />}
          <Box pt={areOptionsProvided ? 1 : 0}>{actionsComponent}</Box>
        </>
      )}
    </StyledDiv>
  );
};
