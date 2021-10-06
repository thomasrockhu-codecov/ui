import styled from 'styled-components';
import React from 'react';
import { Flexbox, List, Typography } from '../..';
import { ListWithTitlesComponent } from './ListWithTitles.types';

const TitleContainer = styled.div`
  margin-bottom: ${(p) => p.theme.spacing.unit(1)}px;
`;

export const ListWithTitles: ListWithTitlesComponent = (props) => {
  const { leftTitle, rightTitle, className, ...restProps } = props;
  return leftTitle || rightTitle ? (
    <div className={className}>
      <TitleContainer>
        <Flexbox container gutter={0} justifyContent="space-between">
          <Flexbox item>
            <Typography type="secondary" color={(t) => t.color.label}>
              {leftTitle}
            </Typography>
          </Flexbox>
          <Flexbox item>
            <Typography type="secondary" color={(t) => t.color.label}>
              {rightTitle}
            </Typography>
          </Flexbox>
        </Flexbox>
      </TitleContainer>
      <List {...restProps} />
    </div>
  ) : (
    <List className={className} {...restProps} />
  );
};

ListWithTitles.displayName = 'ListWithTitles';
