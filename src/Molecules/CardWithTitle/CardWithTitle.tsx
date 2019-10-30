import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Card } from '../..';
import { CardWithTitleComponent, Props } from './CardWithTitle.types';

const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.unit(5)}px;
`;

type ScrollableProp = Pick<Props, 'scrollable'>;
const StyledCard = styled(Card)<ScrollableProp>`
  ${p =>
    p.scrollable &&
    `
${p.theme.media.greaterThan(p.theme.breakpoints.md)} {
display: flex;
flex-direction: column;
max-height: 100%;
}`}
`;

const omitProps = R.omit(['children', 'title']);

const components = { StyledHeader };

export const CardWithTitle: CardWithTitleComponent & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const CustomCardWithTitle= styled(CardWithTitle)`
   *  ${CardWithTitle.components.StyledHeader} {
   *    color: pink;
   * }
   * `
   * */
  components: typeof components;
} = props => {
  const { title, children, scrollable } = props;

  return (
    <StyledCard scrollable={scrollable} {...omitProps(props)}>
      <StyledHeader>{title}</StyledHeader>
      {children}
    </StyledCard>
  );
};

CardWithTitle.components = components;

CardWithTitle.displayName = 'CardWithTitle';
