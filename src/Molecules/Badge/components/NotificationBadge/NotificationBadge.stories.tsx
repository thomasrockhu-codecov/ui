import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Box, Button, Flexbox } from '../../../..';
import Badge from '../..';
import { numberWithLimit } from '../../../../common/utils';

export default {
  title: 'Molecules / Badge / NotificationBadge',
};

export const defaultShowcase = () => (
  <>
    <Typography type="title2">Default Notification Badge</Typography>
    <Box my={2}>
      <Badge.NotificationBadge>1</Badge.NotificationBadge>
    </Box>

    <Box my={2}>
      <Typography type="title3">Default empty Badge</Typography>
      <Box my={2}>
        <Badge.NotificationBadge />
      </Box>
    </Box>

    <Box my={2}>
      <Typography type="title2">Badge with different size</Typography>
      <Box mb={1}>
        <Badge.NotificationBadge badgeSize="s">1</Badge.NotificationBadge>
      </Box>
      <Box mb={1}>
        <Badge.NotificationBadge badgeSize="m">2</Badge.NotificationBadge>
      </Box>
      <Box mb={1}>
        <Badge.NotificationBadge badgeSize="l">3</Badge.NotificationBadge>
      </Box>
      <Typography type="tertiary">
        Custom badge size (defaults font-size to &apos;tertiary&apos;):
      </Typography>
      <Box mb={1}>
        <Badge.NotificationBadge badgeSize={10}>4</Badge.NotificationBadge>
      </Box>
    </Box>

    <Box my={2}>
      <Typography type="title2">Custom background colors</Typography>
      <Box my={2}>
        <Box mb={1}>
          <Badge.NotificationBadge badgeColor={(t) => t.color.positive}>2</Badge.NotificationBadge>
        </Box>
        <Box mb={1}>
          <Badge.NotificationBadge badgeColor={(t) => t.color.negative}>3</Badge.NotificationBadge>
        </Box>
        <Box mb={1}>
          <Badge.NotificationBadge badgeColor={(t) => t.color.disabledText}>
            4
          </Badge.NotificationBadge>
        </Box>
      </Box>
      <Box my={2}>
        <Box mb={1}>
          <Badge.NotificationBadge badgeColor={(t) => t.color.positive} />
        </Box>
        <Box mb={1}>
          <Badge.NotificationBadge badgeColor={(t) => t.color.negative} />
        </Box>
        <Box mb={1}>
          <Badge.NotificationBadge badgeColor={(t) => t.color.disabledText} />
        </Box>
      </Box>
    </Box>

    <Box my={2}>
      <Typography type="title2">Custom text color</Typography>
      <Box>
        <Badge.NotificationBadge color={(t) => t.color.warning}>5</Badge.NotificationBadge>
      </Box>
    </Box>

    <Box my={2}>
      <Typography type="title2">Badge with large number</Typography>
      <Box mb={1}>
        <Badge.NotificationBadge badgeSize="s">99</Badge.NotificationBadge>
      </Box>
      <Box mb={1}>
        <Badge.NotificationBadge>99</Badge.NotificationBadge>
      </Box>
      <Box mb={1}>
        <Badge.NotificationBadge>123</Badge.NotificationBadge>
      </Box>
    </Box>
  </>
);

export const CommonBadgeUseCases = () => {
  return (
    <>
      <Typography type="title2">Number with limit</Typography>
      <Box my={2}>
        <Badge.NotificationBadge>{numberWithLimit(1234567, 99)}</Badge.NotificationBadge>
      </Box>

      <Box my={8}>
        <Typography type="title2">Text with badge</Typography>
        <Box my={2}>
          <Typography type="title3">Text with numbered badge</Typography>
          <Box my={2}>
            <Typography type="tertiary">
              Orders <Badge.NotificationBadge>7</Badge.NotificationBadge>
            </Typography>
          </Box>
        </Box>

        <Box my={2}>
          <Typography type="title3">Text with small badge</Typography>
          <Box my={2}>
            <Badge.NotificationBadge />
            <Typography type="tertiary"> Buy order</Typography>
          </Box>
          <Box my={2}>
            <Badge.NotificationBadge badgeColor={(t) => t.color.negative} />
            <Typography type="tertiary"> Sell order</Typography>
          </Box>
          <Box my={2}>
            <Badge.NotificationBadge badgeColor={(t) => t.color.fundExchange} />
            <Typography type="tertiary"> Exchange order</Typography>
          </Box>
        </Box>
      </Box>
      <>
        <Box my={8}>
          <Typography type="title2">Aria-label</Typography>
          <Box my={2}>
            <Typography type="title3">Badge with Aria-label</Typography>
            <Box my={2}>
              <Typography>
                Orders{' '}
                <Badge.NotificationBadge aria-label="7 new orders">7</Badge.NotificationBadge>
              </Typography>
            </Box>

            <Typography type="title3">Badge without aria-label</Typography>
            <Box my={2}>
              <Typography>
                Orders <Badge.NotificationBadge>7</Badge.NotificationBadge>
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    </>
  );
};

export const SpecializedChildren = () => {
  return (
    <>
      <Typography type="title2">Component as child</Typography>
      <Box my={2}>
        <Badge.NotificationBadge color={(t) => t.color.textLight}>
          <>
            <Typography type="title3" color={(t) => t.color.textLight}>
              8
            </Typography>
            <Typography type="tertiary" color={(t) => t.color.textLight}>
              %
            </Typography>
          </>
        </Badge.NotificationBadge>
      </Box>
      <Typography as="p" type="caption">
        * It&apos;s up to developer to set child component font (family, size, etc.)
      </Typography>
      <Typography type="title2">Function as child</Typography>
      <Box my={2}>
        <Badge.NotificationBadge color={(t) => t.color.textLight}>
          {() => (
            <Typography type="tertiary" color={(t) => t.color.textLight}>
              9%
            </Typography>
          )}
        </Badge.NotificationBadge>
      </Box>
      <Typography as="p" type="caption">
        * It&apos;s up to developer to set child function font (family, size, etc.)
      </Typography>
    </>
  );
};

const StyledFlexbox = styled(Flexbox)`
  width: 200px;
`;

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
      </Box>
      <Box pb={5}>
        <Typography type="title2">
          Badge with animation, but without initial animation example
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
      </Box>
    </>
  );
};
