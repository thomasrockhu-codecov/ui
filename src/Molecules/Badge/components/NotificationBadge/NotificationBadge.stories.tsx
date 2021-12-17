import React, { useState } from 'react';
import styled from 'styled-components';
import { Display } from '../../../../common/Display';
import { Typography, Box, Button, Flexbox } from '../../../..';
import Badge from '../..';
import { numberWithLimit } from '../../../../common/utils';

export default {
  title: 'Molecules / Badge / NotificationBadge',
  parameters: {
    component: Badge.NotificationBadge,
  },
};

export const Showcase = () => (
  <Display
    items={[
      {
        title: 'Default Notification Badge',
        component: <Badge.NotificationBadge>1</Badge.NotificationBadge>,
      },
      {
        title: 'Badge with different sizes',
        component: (
          <>
            <Box mb={1}>
              <Badge.NotificationBadge badgeSize="s">1</Badge.NotificationBadge>
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge badgeSize="m">2</Badge.NotificationBadge>
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge badgeSize="l">3</Badge.NotificationBadge>
            </Box>
          </>
        ),
      },
      {
        title: 'Custom background colors with children',
        component: (
          <>
            <Box mb={1}>
              <Badge.NotificationBadge badgeColor={(t) => t.color.positive}>
                2
              </Badge.NotificationBadge>
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge badgeColor={(t) => t.color.negative}>
                3
              </Badge.NotificationBadge>
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge badgeColor={(t) => t.color.disabledText}>
                4
              </Badge.NotificationBadge>
            </Box>
          </>
        ),
      },
      {
        title: 'Extra small Badge size',
        component: (
          <>
            <Box mb={1}>
              <Badge.NotificationBadge badgeSize="xs" />
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge badgeColor={(t) => t.color.positive} badgeSize="xs" />
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge badgeColor={(t) => t.color.negative} badgeSize="xs" />
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge badgeColor={(t) => t.color.disabledText} badgeSize="xs" />
            </Box>
          </>
        ),
      },
      {
        title: 'Custom text color',
        component: (
          <Badge.NotificationBadge color={(t) => t.color.warning}>5</Badge.NotificationBadge>
        ),
      },
      {
        title: 'Badge with large number',
        component: (
          <>
            <Box mb={1}>
              <Badge.NotificationBadge badgeSize="s">99</Badge.NotificationBadge>
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge>99</Badge.NotificationBadge>
            </Box>
            <Box mb={1}>
              <Badge.NotificationBadge>123</Badge.NotificationBadge>
            </Box>
          </>
        ),
      },
    ]}
  />
);
Showcase.story = {
  name: 'Showcase',
};

export const CommonUseCases = () => {
  return (
    <Display
      items={[
        {
          title: 'Number with limit',
          component: (
            <Badge.NotificationBadge>{numberWithLimit(1234567, 99)}</Badge.NotificationBadge>
          ),
        },
        {
          title: 'Text with Badge',
          component: (
            <Box my={2}>
              <Typography>
                Orders <Badge.NotificationBadge>7</Badge.NotificationBadge>
              </Typography>
            </Box>
          ),
        },
        {
          title: 'Text with extra small Badge',
          component: (
            <Box my={2}>
              <Box my={2}>
                <Badge.NotificationBadge badgeSize="xs" />
                <Typography type="tertiary"> Buy order</Typography>
              </Box>
              <Box my={2}>
                <Badge.NotificationBadge badgeSize="xs" badgeColor={(t) => t.color.negative} />
                <Typography type="tertiary"> Sell order</Typography>
              </Box>
              <Box my={2}>
                <Badge.NotificationBadge badgeSize="xs" badgeColor={(t) => t.color.fundExchange} />
                <Typography type="tertiary"> Exchange order</Typography>
              </Box>
            </Box>
          ),
        },
        {
          title: 'Badge with Aria-label',
          component: (
            <Box my={2}>
              <Typography>
                Orders{' '}
                <Badge.NotificationBadge aria-label="7 new orders">7</Badge.NotificationBadge>
              </Typography>
            </Box>
          ),
        },
        {
          title: 'Badge without Aria-label',
          component: (
            <Box my={2}>
              <Typography>
                Orders <Badge.NotificationBadge>7</Badge.NotificationBadge>
              </Typography>
            </Box>
          ),
        },
      ]}
    />
  );
};
CommonUseCases.story = {
  name: 'Common use cases',
};

export const SpecializedChildren = () => {
  return (
    <Display
      items={[
        {
          title: 'Component as child',
          component: (
            <Box my={2}>
              <Badge.NotificationBadge color={(t) => t.color.badgeTextColor}>
                <>
                  <Typography type="title3" color={(t) => t.color.badgeTextColor}>
                    8
                  </Typography>
                  <Typography type="tertiary" color={(t) => t.color.badgeTextColor}>
                    %
                  </Typography>
                </>
              </Badge.NotificationBadge>
              <Typography as="p" type="caption">
                * It&apos;s up to developer to set child component font (family, size, etc.)
              </Typography>
            </Box>
          ),
        },
        {
          title: 'Function as child',
          component: (
            <Box my={2}>
              <Badge.NotificationBadge color={(t) => t.color.badgeTextColor}>
                {() => (
                  <Typography type="tertiary" color={(t) => t.color.badgeTextColor}>
                    9%
                  </Typography>
                )}
              </Badge.NotificationBadge>
              <Typography as="p" type="caption">
                * It&apos;s up to developer to set child function font (family, size, etc.)
              </Typography>
            </Box>
          ),
        },
      ]}
    />
  );
};
SpecializedChildren.story = {
  name: 'Specialized children',
};

const StyledFlexbox = styled(Flexbox)`
  width: 200px;
`;

export const BadgeWithAnimation = () => {
  const [notificationsExampleOne, setNotificationsExampleOne] = useState(4);
  const [notificationsExampleTwo, setNotificationsExampleTwo] = useState(4);
  const [isNewNotifications, setIsNewNotifications] = useState(false);

  return (
    <Display
      items={[
        {
          title: 'Badge with animation',
          component: (
            <Box py={3}>
              <StyledFlexbox container justifyContent="space-between">
                <Button
                  variant="secondary"
                  onClick={() => setNotificationsExampleOne(notificationsExampleOne - 1)}
                >
                  -
                </Button>
                <Badge.NotificationBadge key={notificationsExampleOne} animateOnChange>
                  {notificationsExampleOne}
                </Badge.NotificationBadge>
                <Button
                  variant="secondary"
                  onClick={() => setNotificationsExampleOne(notificationsExampleOne + 1)}
                >
                  +
                </Button>
              </StyledFlexbox>
            </Box>
          ),
        },
        {
          title: 'Badge with animation, but without initial animation example',
          component: (
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
                <Badge.NotificationBadge
                  key={notificationsExampleTwo}
                  animateOnChange={isNewNotifications}
                >
                  {notificationsExampleTwo}
                </Badge.NotificationBadge>
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
          ),
        },
      ]}
    />
  );
};
BadgeWithAnimation.story = {
  name: 'Badge with animation',
};
