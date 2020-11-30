import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../../../common/utils';
import { Flexbox, LabeledValue } from '../../../../..';
import {
  ExpandItemComponent,
  ExpandItemMediaProps,
  ExpandItemProps,
  RenderFunc,
} from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../../Atoms/Flexbox/Flexbox.types';
import { TextWrapper } from './TextWrapper';
import { getStylesForSizes } from '../../../shared';

type ScreenSizeConfigurableProps = {
  hidden?: boolean;
};

type StyledFlexboxProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm?: ScreenSizeConfigurableProps;
  $md?: ScreenSizeConfigurableProps;
  $lg?: ScreenSizeConfigurableProps;
  $xl?: ScreenSizeConfigurableProps;
} & FlexBoxProps;

const getHiddenStylesDesktop = ({ hidden }: ScreenSizeConfigurableProps) =>
  hidden === true ? 'display: none;' : 'display: list-item;';

const getHiddenStylesMobile = ({ hidden }: ScreenSizeConfigurableProps) =>
  hidden === true ? 'display: none;' : 'display: flex;';

const StyledOverflowItem = styled(Flexbox)<{ textAlign?: string }>`
  overflow: hidden;
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;

const StyledDesktopItem = styled(Flexbox)<StyledFlexboxProps>`
  max-width: ${(p) => p.theme.spacing.unit(75)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(5)}px;
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledFlexboxProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      hidden: getHiddenStylesDesktop,
    },
  )}
`;

const StyledMobileItem = styled(Flexbox)<StyledFlexboxProps>`
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledFlexboxProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      hidden: getHiddenStylesMobile,
    },
  )}
`;

const ExpandRenderer: React.FC<{
  children: React.ReactNode | RenderFunc;
  isLabel?: boolean;
}> = ({ isLabel = false, children }) => (
  <>
    {isElement(children) && children}
    {isFunction(children)
      ? children()
      : !isElement(children) && <TextWrapper isLabel={isLabel}>{children}</TextWrapper>}
  </>
);

const MobileItem: React.FC<
  {
    label: ExpandItemProps['label'];
    value: ExpandItemProps['value'];
  } & ExpandItemMediaProps
> = ({ label, value, xs, sm, md, lg, xl }) => (
  <StyledMobileItem
    forwardedAs="li"
    container
    justifyContent="space-between"
    $xs={xs}
    $sm={sm}
    $md={md}
    $lg={lg}
    $xl={xl}
  >
    <StyledOverflowItem item flex="0 0 50%">
      <ExpandRenderer isLabel>{label}</ExpandRenderer>
    </StyledOverflowItem>
    <StyledOverflowItem item flex="0 0 50%" textAlign="right">
      <ExpandRenderer>{value}</ExpandRenderer>
    </StyledOverflowItem>
  </StyledMobileItem>
);

const DesktopItem: React.FC<
  {
    label: ExpandItemProps['label'];
    value: ExpandItemProps['value'];
  } & ExpandItemMediaProps
> = ({ label, value, xs, sm, md, lg, xl }) => (
  <StyledDesktopItem item $xs={xs} $sm={sm} $md={md} $lg={lg} $xl={xl} forwardedAs="li">
    <LabeledValue label={<ExpandRenderer isLabel>{label}</ExpandRenderer>}>
      <ExpandRenderer>{value}</ExpandRenderer>
    </LabeledValue>
  </StyledDesktopItem>
);

export const ExpandItem: ExpandItemComponent = ({ item, mobileItem }) => {
  const { label, value, hidden, sm, md, lg, xl } = item;
  return mobileItem ? (
    <MobileItem label={label} value={value} xs={{ hidden }} sm={sm} md={md} lg={lg} xl={xl} />
  ) : (
    <DesktopItem label={label} value={value} xs={{ hidden }} sm={sm} md={md} lg={lg} xl={xl} />
  );
};

ExpandItem.TextWrapper = TextWrapper;
