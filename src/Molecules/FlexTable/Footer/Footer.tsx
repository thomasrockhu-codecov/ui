import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useFlexCellProps } from '../shared/ColumnProvider';
import { FooterComponent } from './Footer.types';
import { TextWrapper } from './TextWrapper';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const Footer: FooterComponent = (props) => {
  const { children, className, columnId } = props;
  const flexProps = useFlexCellProps(props);

  return (
    <StyledFlexbox className={className} role="cell" {...flexProps}>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ columnId })
        : !isElement(children) && <TextWrapper weight="bold">{children}</TextWrapper>}
    </StyledFlexbox>
  );
};

Footer.TextWrapper = TextWrapper;
export default Footer;
