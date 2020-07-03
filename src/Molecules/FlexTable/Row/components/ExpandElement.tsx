import React from 'react';
import { ExpandProps } from '../Row.types';
import FlexTable from '../..';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS, COLUMN_ID_EXPAND } from '../../shared/constants';
import { ExpandCell } from '../../Cell/ExpandCell';

export const ExpandElement: React.FC<
  ExpandProps & { isContent: boolean; disabled?: boolean; setExpand: (expanded: boolean) => void }
> = ({ isContent, expanded = false, onExpandToggle, setExpand, disabled }) => {
  if (!isContent) {
    return (
      <FlexTable.Header
        columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
        {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
      />
    );
  }

  return (
    <ExpandCell
      columnId={COLUMN_ID_EXPAND}
      expanded={expanded}
      onClick={() => (onExpandToggle ? onExpandToggle(!expanded) : setExpand(!expanded))}
      disabled={disabled}
    />
  );
};
