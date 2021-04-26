import React from 'react';
import { Box, FeedbackBanner } from '../../..';

export const DoubleDatePickerDisclaimer: React.FC = ({ children }) => {
  return (
    <>
      <Box my={2}>
        <FeedbackBanner
          title="The double variant has a specific user case in mind"
          variant="warning"
        >
          The intended user case is when the user wants to select two dates relative close to each
          other, but the second date can overlap to another month. The dates selected should
          probably not be further apart than two months.
        </FeedbackBanner>
      </Box>
      <Box mb={2}>
        <FeedbackBanner title="Use at own risk" variant="warning">
          Arrow navigation is yet to be implemented
        </FeedbackBanner>
      </Box>
      {children}
    </>
  );
};
