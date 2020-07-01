import styled from 'styled-components';
import TruncateWithTooltip from '../../TruncateWithTooltip';

// Fixes alignment in cells and headers
// Had to be set in shared because of circular dependencies in text wrapper files
export const StyledTruncateTooltip = styled(TruncateWithTooltip)`
  width: inherit;
`;
