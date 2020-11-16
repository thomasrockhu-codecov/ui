import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../../../common/utils';
import { Flexbox, LabeledValue } from '../../../../..';
import { ExpandItemComponent, ExpandItemProps, RenderFunc } from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../../Atoms/Flexbox/Flexbox.types';
import { TextWrapperLabel } from './TextWrapperLabel';
import { TextWrapperValue } from './TextWrapperValue';
import { FontSize } from '../../../shared/shared.types';
import { useFlexTable } from '../../../shared/FlexTableProvider';
import { RenderForSizes } from '../../../shared';

const StyledOverflowItem = styled(Flexbox)<{ textAlign?: string }>`
  overflow: hidden;
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;

const StyledFlexboxItem = styled(Flexbox)<FlexBoxProps>`
  max-width: ${(p) => p.theme.spacing.unit(75)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(5)}px;
`;

const ExpandRenderer: React.FC<{
  children: React.ReactNode | RenderFunc;
  fontSize: FontSize;
  isLabel?: boolean;
}> = ({ children, fontSize, isLabel = false }) => {
  const Wrapper = isLabel ? TextWrapperLabel : TextWrapperValue;

  return (
    <>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize })
        : !isElement(children) && <Wrapper fontSize={fontSize}>{children}</Wrapper>}
    </>
  );
};

const MobileItem: React.FC<{
  className?: string;
  label: ExpandItemProps['label'];
  value: ExpandItemProps['value'];
  fontSize: FontSize;
}> = ({ label, value, fontSize }) => (
  <Flexbox container justifyContent="space-between" as="li">
    <StyledOverflowItem item flex="0 0 50%">
      <ExpandRenderer fontSize={fontSize} isLabel>
        {label}
      </ExpandRenderer>
    </StyledOverflowItem>
    <StyledOverflowItem item flex="0 0 50%" textAlign="right">
      <ExpandRenderer fontSize={fontSize}>{value}</ExpandRenderer>
    </StyledOverflowItem>
  </Flexbox>
);

const DesktopItem: React.FC<{
  className?: string;
  label: ExpandItemProps['label'];
  value: ExpandItemProps['value'];
  fontSize: FontSize;
}> = ({ label, value, fontSize }) => (
  <StyledFlexboxItem item as="li">
    <LabeledValue
      label={
        <ExpandRenderer fontSize={fontSize} isLabel>
          {label}
        </ExpandRenderer>
      }
    >
      <ExpandRenderer fontSize={fontSize}>{value}</ExpandRenderer>
    </LabeledValue>
  </StyledFlexboxItem>
);

export const ExpandItem: ExpandItemComponent = ({ item, mobileItem }) => {
  const { label, value, hidden, sm: smItem, md: mdItem, lg: lgItem, xl: xlItem } = item;
  const {
    fontSize,
    sm: smFontSize,
    md: mdFontSize,
    lg: lgFontSize,
    xl: xlFontSize,
  } = useFlexTable();
  const sm = { fontSize: R.propOr(null, 'fontSize', smFontSize), ...smItem };
  const md = { fontSize: R.propOr(null, 'fontSize', mdFontSize), ...mdItem };
  const lg = { fontSize: R.propOr(null, 'fontSize', lgFontSize), ...lgItem };
  const xl = { fontSize: R.propOr(null, 'fontSize', xlFontSize), ...xlItem };

  return mobileItem ? (
    <MobileItem label={label} value={value} fontSize={fontSize} />
  ) : (
    <DesktopItem label={label} value={value} fontSize={fontSize} />
  );
};

ExpandItem.TextWrapperValue = TextWrapperValue;
ExpandItem.TextWrapperLabel = TextWrapperLabel;
