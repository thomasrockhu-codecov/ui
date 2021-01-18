import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from './Badge';
import docs from './Badge.mdx';
import { Box, Button, Typography, Flexbox } from '../..';
import { numberWithLimit } from '../../common/utils';
import { Props as BadgeProps } from './Badge.types';

const StyledFlexbox = styled(Flexbox)`
  width: 200px;
`;

export default {
  title: 'Atoms / Badge',
  parameters: {
    component: Badge,
    docs: {
      page: docs,
    },
  },
};

export const CommonBadges = () => {
  return (
    <>
      <Typography type="title1">Badge component</Typography>
      <Box my={2}>
        <Typography type="title2">Default Badge</Typography>
        <Box my={2}>
          <Badge>1</Badge>
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
            <Badge backgroundColor={(t) => t.color.positive}>2</Badge>
          </Box>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.negative}>3</Badge>
          </Box>
          <Box mb={1}>
            <Badge backgroundColor={(t) => t.color.disabledText}>4</Badge>
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
          <Badge color={(t) => t.color.warning}>5</Badge>
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

export const BadgeWithNumberLimit = () => {
  return (
    <>
      <Typography type="title2">Number With Limit</Typography>
      <Box my={2}>
        <Badge>{numberWithLimit(1234567, 99)}</Badge>
      </Box>
    </>
  );
};

export const JSXAsChild = () => {
  return (
    <>
      <Typography type="title2">Component as child</Typography>
      <Box my={2}>
        <Badge color={(t) => t.color.textLight}>
          <span>
            <Typography type="title3" color={(t) => t.color.textLight}>
              8
            </Typography>
            <Typography type="tertiary" color={(t) => t.color.textLight}>
              %
            </Typography>
          </span>
        </Badge>
      </Box>
      <Typography as="p" type="caption">
        * Observe, up to developer to set child component font (family, size, etc.)
      </Typography>
    </>
  );
};

export const FunctionAsChild = () => {
  return (
    <>
      <Typography type="title2">Function as child</Typography>
      <Box my={2}>
        <Badge color={(t) => t.color.textLight}>
          {() => (
            <Typography type="tertiary" color={(t) => t.color.textLight}>
              9%
            </Typography>
          )}
        </Badge>
      </Box>
      <Typography as="p" type="caption">
        * Observe, up to developer to set child function font (family, size, etc.)
      </Typography>
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

export const CommonBadgeUseCases = () => {
  const TextWithNumberBadge = () => (
    <Typography type="tertiary">
      Orders <Badge>7</Badge>
    </Typography>
  );
  const TextWithSmallBadge: React.FC<BadgeProps> = ({ children, ...badgeProps }) => {
    return (
      <Typography type="tertiary">
        <Badge {...badgeProps} /> {children}
      </Typography>
    );
  };

  return (
    <>
      <Typography type="title2">Text with numbered badge</Typography>
      <Box my={2}>
        <TextWithNumberBadge />
      </Box>

      <Typography type="title2">Text with small badge</Typography>
      <Box my={2}>
        <TextWithSmallBadge>Buy order</TextWithSmallBadge>
      </Box>
      <Box my={2}>
        <TextWithSmallBadge backgroundColor={(t) => t.color.negative}>
          Sell order
        </TextWithSmallBadge>
      </Box>
      <Box my={2}>
        <TextWithSmallBadge backgroundColor={(t) => t.color.disabledText}>
          Exchange order
        </TextWithSmallBadge>
      </Box>
    </>
  );
};

export const A11yBadgeUseCases = () => {
  const TextWithNumberBadge = () => (
    <Typography>
      Orders <Badge>7</Badge>
    </Typography>
  );

  const TextWithNumberBadgeAndA11y = () => (
    <Typography>
      Orders <Badge aria-label="7 new orders">7</Badge>
    </Typography>
  );

  return (
    <>
      <Typography type="title2">Badge with aria-label</Typography>
      <Box my={2}>
        <TextWithNumberBadgeAndA11y />
      </Box>

      <Typography type="title2">Badge without aria-label</Typography>
      <Box my={2}>
        <TextWithNumberBadge />
      </Box>
    </>
  );
};

export const BadgeWithAnimation = () => {
  const [notificationsExampleOne, setNotificationsExampleOne] = useState(4);
  const [notificationsExampleTwo, setNotificationsExampleTwo] = useState(4);
  const [isNewNotifications, setIsNewNotifications] = useState(false);

  return (
    <>
      <Box pb={5}>
        <Typography type="title2">Badge with animation</Typography>
        <Box py={3}>
          <StyledFlexbox container justifyContent="space-between">
            <Button
              variant="secondary"
              onClick={() => setNotificationsExampleOne(notificationsExampleOne - 1)}
            >
              -
            </Button>
            <Badge key={notificationsExampleOne} animateOnChange>
              {notificationsExampleOne}
            </Badge>
            <Button
              variant="secondary"
              onClick={() => setNotificationsExampleOne(notificationsExampleOne + 1)}
            >
              +
            </Button>
          </StyledFlexbox>
        </Box>
      </Box>
      <Box pb={5}>
        <Typography type="title2">
          Badge with animation, but without inital animation example
        </Typography>
        <Box py={3}>
          <StyledFlexbox container justifyContent="space-between">
            <Button
              variant="secondary"
              onClick={() => {
                setNotificationsExampleTwo(notificationsExampleTwo - 1);
                setIsNewNotifications(true);
              }}
            >
              -
            </Button>
            <Badge key={notificationsExampleTwo} animateOnChange={isNewNotifications}>
              {notificationsExampleTwo}
            </Badge>
            <Button
              variant="secondary"
              onClick={() => {
                setNotificationsExampleTwo(notificationsExampleTwo + 1);
                setIsNewNotifications(true);
              }}
            >
              +
            </Button>
          </StyledFlexbox>
        </Box>
      </Box>
    </>
  );
};
