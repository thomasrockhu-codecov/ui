import React from 'react';
import { ExpandAreaProps } from '../Row.types';
import { Box } from '../../../..';
import { ExpandItems } from '.';

export const ExpandArea: React.FC<ExpandAreaProps> = ({ expandChildren, expandItems }) => (
  <Box px={5} pb={2} md={{ px: 5, pt: 5, pb: 0 }} role="cell">
    {/* TODO should we rather have padding specified in ExpandItems? */}
    {expandItems && <ExpandItems items={expandItems} />}
    {expandChildren && (
      <Box pt={2} md={{ px: 5, pt: 0, pb: 5 }}>
        {expandChildren}
      </Box>
    )}
  </Box>
);
