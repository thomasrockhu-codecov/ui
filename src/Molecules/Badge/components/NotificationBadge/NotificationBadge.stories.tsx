import React, { useState } from 'react';
import styled from 'styled-components';
import { Display } from '../../../../common/Display';
import { Typography, Box, Button, Flexbox } from '../../../..';
import Badge from '../..';
import { numberWithLimit } from '../../../../common/utils';

export default {
  title: 'Molecules / Badge / Notification',
  parameters: {
    component: Badge.Notification,
  },
};

export const Showcase = () => (
  <Display
    items={[
      {
        title: 'Default Notification Badge',
        component: <Badge.Notification>1</Badge.Notification>,
      },
      {
        title: 'Badge with different sizes',
        component: (
          <>
            <Box mb={1}>
              <Badge.Notification badgeSize="s">1</Badge.Notification>
            </Box>
            <Box mb={1}>
              <Badge.Notification badgeSize="m">2</Badge.Notification>
            </Box>
            <Box mb={1}>
              <Badge.Notification badgeSize="l">3</Badge.Notification>
            </Box>
          </>
        ),
      },
      {
        title: 'Custom background colors with children',
        component: (
          <>
            <Box mb={1}>
              <Badge.Notification badgeColor={(t) => t.color.badgeBackgroundPositive}>
                2
              </Badge.Notification>
            </Box>
            <Box mb={1}>
              <Badge.Notification badgeColor={(t) => t.color.badgeBackgroundNegative}>
                3
              </Badge.Notification>
            </Box>
            <Box mb={1}>
              <Badge.Notification badgeColor={(t) => t.color.badgeBackgroundWarning}>
                4
              </Badge.Notification>
            </Box>
          </>
        ),
      },
      {
        title: 'Extra small Badge size',
        component: (
          <>
            <Box mb={1}>
              <Badge.Notification badgeSize="xs" />
            </Box>
            <Box mb={1}>
              <Badge.Notification
                badgeColor={(t) => t.color.badgeBackgroundPositive}
                badgeSize="xs"
              />
            </Box>
            <Box mb={1}>
              <Badge.Notification
                badgeColor={(t) => t.color.badgeBackgroundNegative}
                badgeSize="xs"
              />
            </Box>
            <Box mb={1}>
              <Badge.Notification
                badgeColor={(t) => t.color.badgeBackgroundWarning}
                badgeSize="xs"
              />
            </Box>
          </>
        ),
      },
      {
        title: 'Custom text color',
        component: <Badge.Notification color={(t) => t.color.warning}>5</Badge.Notification>,
      },
      {
        title: 'Badge with large number',
        component: (
          <>
            <Box mb={1}>
              <Badge.Notification badgeSize="s">99</Badge.Notification>
            </Box>
            <Box mb={1}>
              <Badge.Notification>99</Badge.Notification>
            </Box>
            <Box mb={1}>
              <Badge.Notification>123</Badge.Notification>
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
          component: <Badge.Notification>{numberWithLimit(1234567, 99)}</Badge.Notification>,
        },
        {
          title: 'Text with Badge',
          component: (
            <Box my={2}>
              <Typography>
                Orders <Badge.Notification>7</Badge.Notification>
              </Typography>
            </Box>
          ),
        },
        {
          title: 'Text with extra small Badge',
          component: (
            <Box my={2}>
              <Box my={2}>
                <Badge.Notification badgeSize="xs" />
                <Typography type="tertiary"> Buy order</Typography>
              </Box>
              <Box my={2}>
                <Badge.Notification
                  badgeSize="xs"
                  badgeColor={(t) => t.color.badgeBackgroundNegative}
                />
                <Typography type="tertiary"> Sell order</Typography>
              </Box>
              <Box my={2}>
                <Badge.Notification
                  badgeSize="xs"
                  badgeColor={(t) => t.color.badgeBackgroundWarning}
                />
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
                Orders <Badge.Notification aria-label="7 new orders">7</Badge.Notification>
              </Typography>
            </Box>
          ),
        },
        {
          title: 'Badge without Aria-label',
          component: (
            <Box my={2}>
              <Typography>
                Orders <Badge.Notification>7</Badge.Notification>
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
              <Badge.Notification color={(t) => t.color.badgeTextColor}>
                <>
                  <Typography type="title3" color={(t) => t.color.badgeTextColor}>
                    8
                  </Typography>
                  <Typography type="tertiary" color={(t) => t.color.badgeTextColor}>
                    %
                  </Typography>
                </>
              </Badge.Notification>
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
              <Badge.Notification color={(t) => t.color.badgeTextColor}>
                {() => (
                  <Typography type="tertiary" color={(t) => t.color.badgeTextColor}>
                    9%
                  </Typography>
                )}
              </Badge.Notification>
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
                <Badge.Notification key={notificationsExampleOne} animateOnChange>
                  {notificationsExampleOne}
                </Badge.Notification>
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
                <Badge.Notification
                  key={notificationsExampleTwo}
                  animateOnChange={isNewNotifications}
                >
                  {notificationsExampleTwo}
                </Badge.Notification>
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
