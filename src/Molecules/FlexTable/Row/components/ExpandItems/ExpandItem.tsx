import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../../../common/utils';
import { Flexbox, LabeledValue } from '../../../../..';
import { ExpandItemComponent, ExpandItemProps, RenderFunc } from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../../Atoms/Flexbox/Flexbox.types';
import { TextWrapperLabel } from './TextWrapperLabel';
import { TextWrapperValue } from './TextWrapperValue';
import { FontSize } from '../../../shared/shared.types';
import { useFlexTable } from '../../../shared/FlexTableProvider';
import { RenderForSizes } from '../../../shared';

const StyledFlexboxItem = styled(Flexbox)<FlexBoxProps>`
  max-width: ${p => p.theme.spacing.unit(75)}px;
  padding-bottom: ${p => p.theme.spacing.unit(5)}px;
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

const MobileItem: React.FC<{ item: ExpandItemProps; fontSize: FontSize }> = ({
  item,
  fontSize,
}) => (
  <Flexbox container justifyContent="space-between" as="li">
    <Flexbox item>
      <ExpandRenderer fontSize={fontSize} isLabel>
        {item.label}
      </ExpandRenderer>
    </Flexbox>
    <Flexbox item>
      <ExpandRenderer fontSize={fontSize}>{item.value}</ExpandRenderer>
    </Flexbox>
  </Flexbox>
);

const DesktopItem: React.FC<{ item: ExpandItemProps; fontSize: FontSize }> = ({
  item,
  fontSize,
}) => (
  <StyledFlexboxItem item as="li">
    <LabeledValue
      label={
        <ExpandRenderer fontSize={fontSize} isLabel>
          {item.label}
        </ExpandRenderer>
      }
    >
      <ExpandRenderer fontSize={fontSize}>{item.value}</ExpandRenderer>
    </LabeledValue>
  </StyledFlexboxItem>
);

export const ExpandItem: ExpandItemComponent = ({ item }) => {
  const { fontSize: xsFontSize, sm, md, lg, xl } = useFlexTable();
  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize, mobileItem: true }}
      sm={sm}
      md={{ ...md, mobileItem: false }}
      lg={lg}
      xl={xl}
      Container={({ fontSize, mobileItem }) => {
        if (mobileItem) {
          return <MobileItem item={item} fontSize={fontSize} />;
        }

        return <DesktopItem item={item} fontSize={fontSize} />;
      }}
      Component={({ children }) => children}
    />
  );
};

ExpandItem.TextWrapperValue = TextWrapperValue;
ExpandItem.TextWrapperLabel = TextWrapperLabel;
