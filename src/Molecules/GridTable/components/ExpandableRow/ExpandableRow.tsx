import React, { useState } from 'react';
import Icon from '../../../../Atoms/Icon';
import Typography from '../../../../Atoms/Typography';
import Button from '../../../Button';
import { StyledTr, StyledTd } from '../TableComponents';
import { ExpandableRowComponent } from './ExpandableRow.types';

export const ExpandableRow: ExpandableRowComponent = ({ children, expandItems }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <StyledTr>
        {children}
        <StyledTd>
          {expandItems && (
            <Button variant="neutral" onClick={() => setExpanded(!expanded)}>
              <Icon.ThinChevron direction="down" size={3} />
            </Button>
          )}
        </StyledTd>
      </StyledTr>
      {expanded && expandItems ? (
        <tr>
          <td>
            {Array.isArray(expandItems) ? (
              <ul>
                {expandItems.map((item) => (
                  <li>
                    <Typography>{item}</Typography>
                  </li>
                ))}
              </ul>
            ) : (
              expandItems
            )}
          </td>
        </tr>
      ) : null}
    </>
  );
};
