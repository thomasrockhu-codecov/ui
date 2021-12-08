import React from 'react';
import Badge from '../..';
import { Box, Typography } from '../../../..';

export default {
  title: 'Molecules / Badge / LabelBadge',
};

export const labelBadge = () => (
  <>
    <Typography>Primary</Typography>
    <Box>
      <Box my={1}>
        <Badge.LabelBadge>Primary</Badge.LabelBadge>
      </Box>
      <Box my={1}>
        <Badge.LabelBadge weight="bold">Primary Bold</Badge.LabelBadge>
      </Box>
    </Box>
    <Typography>Secondary</Typography>
    <Box>
      <Box my={1}>
        <Badge.LabelBadge type="secondary">Secondary</Badge.LabelBadge>
      </Box>
      <Box my={1}>
        <Badge.LabelBadge type="secondary" weight="bold">
          Secondary Bold
        </Badge.LabelBadge>
      </Box>
    </Box>
    <Typography>Custom colors</Typography>
    <Box>
      <Box my={1}>
        <Badge.LabelBadge color={(t) => t.color.text} badgeColor={(t) => t.color.menuAccent4}>
          Custom badge color
        </Badge.LabelBadge>
      </Box>
      <Box my={1}>
        <Badge.LabelBadge
          color={(t) => t.color.bulbForeground}
          badgeColor={(t) => t.color.bulbBackground}
        >
          Custom text color
        </Badge.LabelBadge>
      </Box>
    </Box>
  </>
);
labelBadge.story = {
  name: 'Label Badge',
};
