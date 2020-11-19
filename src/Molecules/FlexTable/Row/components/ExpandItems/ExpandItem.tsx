import React from 'react';
import styled, { css } from 'styled-components';
import { isElement, isFunction } from '../../../../../common/utils';
import { Flexbox, LabeledValue } from '../../../../..';
import {
  ExpandItemComponent,
  ExpandItemMediaConfigurableProps,
  ExpandItemProps,
  RenderFunc,
} from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../../Atoms/Flexbox/Flexbox.types';
import { TextWrapperLabel } from './TextWrapperLabel';
import { TextWrapperValue } from './TextWrapperValue';

type StyledFlexboxProps = {
  $sm: any;
  $md: any;
  $lg: any;
  $xl: any;
  $hidden?: boolean;
} & FlexBoxProps;

const getStylesForSize = (size: string) => css<StyledFlexboxProps>`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints[size])} {
    ${(p) => (p[`$${size}`].hidden === true ? 'display: none;' : '')}
    ${(p) => (p[`$${size}`].hidden === false ? 'display: unset;' : '')}
  }
`;

const StyledOverflowItem = styled(Flexbox)<{ textAlign?: string }>`
  overflow: hidden;
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;

const StyledFlexbox = styled(Flexbox)<StyledFlexboxProps>`
  ${(p) => (p.$hidden ? 'display: none;' : '')}
  ${(p) => (p.$sm ? getStylesForSize('sm') : '')}
  ${(p) =>
    p.$md ? getStylesForSize('md') : ''}
  ${(p) => (p.$lg ? getStylesForSize('lg') : '')}
  ${(p) =>
    p.$xl ? getStylesForSize('xl') : ''}
`;

const StyledFlexboxItem = styled(StyledFlexbox)<StyledFlexboxProps>`
  max-width: ${(p) => p.theme.spacing.unit(75)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(5)}px;
`;

const ExpandRenderer: React.FC<{
  children: React.ReactNode | RenderFunc;
  isLabel?: boolean;
}> = ({ isLabel = false, children }) => {
  const Wrapper = isLabel ? TextWrapperLabel : TextWrapperValue;

  return (
    <>
      {isElement(children) && children}
      {isFunction(children) ? children() : !isElement(children) && <Wrapper>{children}</Wrapper>}
    </>
  );
};

const MobileItem: React.FC<
  {
    label: ExpandItemProps['label'];
    value: ExpandItemProps['value'];
  } & ExpandItemMediaConfigurableProps
> = ({ label, value, hidden, sm, md, lg, xl }) => (
  <StyledFlexbox
    forwardedAs="li"
    container
    justifyContent="space-between"
    $hidden={hidden}
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
  </StyledFlexbox>
);

const DesktopItem: React.FC<
  {
    label: ExpandItemProps['label'];
    value: ExpandItemProps['value'];
  } & ExpandItemMediaConfigurableProps
> = ({ label, value, hidden, sm, md, lg, xl }) => (
  <StyledFlexboxItem item $hidden={hidden} $sm={sm} $md={md} $lg={lg} $xl={xl}>
    <LabeledValue label={<ExpandRenderer isLabel>{label}</ExpandRenderer>}>
      <ExpandRenderer>{value}</ExpandRenderer>
    </LabeledValue>
  </StyledFlexboxItem>
);

export const ExpandItem: ExpandItemComponent = ({ item, mobileItem }) => {
  const { label, value, hidden, sm, md, lg, xl } = item;
  return mobileItem ? (
    <MobileItem label={label} value={value} hidden={hidden} sm={sm} md={md} lg={lg} xl={xl} />
  ) : (
    <DesktopItem label={label} value={value} hidden={hidden} sm={sm} md={md} lg={lg} xl={xl} />
  );
};

ExpandItem.TextWrapperValue = TextWrapperValue;
ExpandItem.TextWrapperLabel = TextWrapperLabel;
