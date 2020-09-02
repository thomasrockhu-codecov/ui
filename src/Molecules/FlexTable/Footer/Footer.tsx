import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useFlexCellProps } from '../shared/ColumnProvider';
import { FooterComponent } from './Footer.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';
import { RenderForSizes } from '../shared';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const Footer: FooterComponent = (props) => {
  const { children, className, columnId } = props;

  const {
    fontSize: xsFontSize,
    sm: smTable,
    md: mdTable,
    lg: lgTable,
    xl: xlTable,
  } = useFlexTable();

  const flexProps = useFlexCellProps(props);

  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize }}
      sm={smTable}
      md={mdTable}
      lg={lgTable}
      xl={xlTable}
      Container={({ fontSize, children: component }) => (
        <StyledFlexbox className={className} role="cell" {...flexProps}>
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
