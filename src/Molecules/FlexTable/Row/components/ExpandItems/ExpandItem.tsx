import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
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
import { FontSize, MediaRelatedProps } from '../../../shared/shared.types';
import { useFlexTable } from '../../../shared/FlexTableProvider';

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

const ExpandRenderer: React.FC<
  {
    children: React.ReactNode | RenderFunc;
    fontSize: FontSize;
    isLabel?: boolean;
  } & MediaRelatedProps<{ fontSize: FontSize }>
> = ({ isLabel = false, fontSize, sm, md, lg, xl, children }) => {
  const Wrapper = isLabel ? TextWrapperLabel : TextWrapperValue;

  return (
    <>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize, sm, md, lg, xl })
        : !isElement(children) && (
            <Wrapper fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl}>
              {children}
            </Wrapper>
          )}
    </>
  );
};

const MobileItem: React.FC<
  {
    label: ExpandItemProps['label'];
    value: ExpandItemProps['value'];
  } & ExpandItemMediaConfigurableProps
> = ({ label, value, hidden, fontSize, sm, md, lg, xl }) => (
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
      <ExpandRenderer fontSize={fontSize} isLabel>
        {label}
      </ExpandRenderer>
    </StyledOverflowItem>
    <StyledOverflowItem item flex="0 0 50%" textAlign="right">
      <ExpandRenderer fontSize={fontSize}>{value}</ExpandRenderer>
    </StyledOverflowItem>
  </StyledFlexbox>
);

const DesktopItem: React.FC<
  {
    label: ExpandItemProps['label'];
    value: ExpandItemProps['value'];
  } & ExpandItemMediaConfigurableProps
> = ({ label, value, hidden, fontSize, sm, md, lg, xl }) => (
  <StyledFlexboxItem item $hidden={hidden} $sm={sm} $md={md} $lg={lg} $xl={xl}>
    <LabeledValue
      label={
        <ExpandRenderer
          fontSize={fontSize}
          sm={{ ...R.pick(['fontSize'], sm) }}
          md={{ ...R.pick(['fontSize'], md) }}
          lg={{ ...R.pick(['fontSize'], lg) }}
          xl={{ ...R.pick(['fontSize'], xl) }}
          isLabel
        >
          {label}
        </ExpandRenderer>
      }
    >
      <ExpandRenderer fontSize={fontSize}>{value}</ExpandRenderer>
    </LabeledValue>
  </StyledFlexboxItem>
);

export const ExpandItem: ExpandItemComponent = ({ item, mobileItem }) => {
  const {
    label,
    value,
    hidden,
    sm: smItemProps,
    md: mdItemProps,
    lg: lgItemProps,
    xl: xlItemProps,
  } = item;
  const {
    fontSize,
    sm: smTableProps = {},
    md: mdTableProps = {},
    lg: lgTableProps = {},
    xl: xlTableProps = {},
  } = useFlexTable();
  const sm = { ...R.pick(['fontSize'], smTableProps), ...smItemProps };
  const md = { ...R.pick(['fontSize'], mdTableProps), ...mdItemProps };
  const lg = { ...R.pick(['fontSize'], lgTableProps), ...lgItemProps };
  const xl = { ...R.pick(['fontSize'], xlTableProps), ...xlItemProps };

  return mobileItem ? (
    <MobileItem
      label={label}
      value={value}
      fontSize={fontSize}
      hidden={hidden}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    />
  ) : (
    <DesktopItem
      label={label}
      value={value}
      fontSize={fontSize}
      hidden={hidden}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    />
  );
};

ExpandItem.TextWrapperValue = TextWrapperValue;
ExpandItem.TextWrapperLabel = TextWrapperLabel;
