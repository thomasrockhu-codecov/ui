import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useColumnLayout } from '../shared/ColumnProvider';
import { FooterComponent } from './Footer.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';
import { RenderForSizes } from '../shared';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const Footer: FooterComponent = ({ children, className, columnId }) => {
  const {
    fontSize: xsFontSize,
    sm: smTable,
    md: mdTable,
    lg: lgTable,
    xl: xlTable,
  } = useFlexTable();
  const [columnLayout] = useColumnLayout(columnId);

  if (!R.prop('flexProps', columnLayout)) {
    return null;
  }
  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize }}
      sm={smTable}
      md={mdTable}
      lg={lgTable}
      xl={xlTable}
      Container={({ fontSize, children: component }) => (
        <StyledFlexbox className={className} role="cell" {...columnLayout.flexProps}>
          {isElement(component) && component}
          {isFunction(component)
            ? component({ fontSize, columnId })
            : !isElement(component) && <TextWrapper fontSize={fontSize}>{children}</TextWrapper>}
        </StyledFlexbox>
      )}
      Component={() => children}
    />
  );
};

Footer.TextWrapper = TextWrapper;
export default Footer;
