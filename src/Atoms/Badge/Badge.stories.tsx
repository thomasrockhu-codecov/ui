import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import { Badge } from './Badge';
import docs from './Badge.mdx';
import { Box, Typography } from '../..';
import { numberWithLimit } from '../../common/utils';

export default {
  title: 'Atoms | Badge',
  decorators: [withKnobs],
  parameters: {
    component: Badge,
    ...docs.parameters,
  },
};

export const Badges = () => {
  return (
    <>
      <Typography type="title1">Badge component</Typography>
      <Box my={2}>
        <Typography type="title2">Default Badge</Typography>
        <Box my={2}>
          <Badge>4</Badge>
        </Box>
      </Box>

      <Box my={2}>
        <Typography type="title3">Default empty Badge</Typography>
        <Box my={2}>
          <Badge />
        </Box>
      </Box>

      <Box my={2}>
        <Typography type="title2">Custom background colors</Typography>
        <Box my={2}>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.positive}>5</Badge>
          </Box>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.disabledText}>6</Badge>
          </Box>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.negative}>7</Badge>
          </Box>
        </Box>
        <Box my={2}>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.positive} />
          </Box>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.negative} />
          </Box>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.disabledText} />
          </Box>
        </Box>
      </Box>

      <Box my={2}>
        <Typography type="title2">Custom text color</Typography>
        <Box>
          <Badge color={(t) => t.color.warning}>2</Badge>
        </Box>
      </Box>

      <Box my={2}>
        <Typography type="title2">Badge with large number</Typography>
        <Box mb={1}>
          <Badge>99</Badge>
        </Box>
        <Box mb={1}>
          <Badge>999</Badge>
        </Box>
      </Box>
    </>
  );
};

export const StyledBadges = () => {
  const StyledBadge = styled(Badge)`
    height: 40px;
    width: 40px;
    border-radius: 20px;
  `;
  return (
    <>
      <Typography type="title2">Styled Badge component</Typography>
      <Box my={2}>
        <StyledBadge />
      </Box>
    </>
  );
};

export const ComponentAsChild = () => {
  return (
    <>
      <Typography type="title2">Component as child</Typography>
      <Box my={2}>
        <Badge color={(t) => t.color.textLight}>
          <div>8</div>
        </Badge>
      </Box>
    </>
  );
};

export const FunctionAsChild = () => {
  return (
    <>
      <Typography type="title2">Function as child</Typography>
      <Box my={2}>
        <Badge color={(t) => t.color.textLight}>{() => <div>9</div>}</Badge>
      </Box>
    </>
  );
};

export const BadgeAndNumberWithLimit = () => {
  return (
    <>
      <Typography type="title2">Number With Limit</Typography>
      <Box my={2}>
        <Badge>{numberWithLimit(1234567, 99)}</Badge>
      </Box>
    </>
  );
};
