import React from 'react';
import styled from 'styled-components';
import { Card, Media, Typography } from '../..';
import { CardWithTitleComponent } from './CardWithTitle.types';
import { Box } from '../../Atoms/Box/Box';
import { isElement } from '../../common/utils';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const CardWithTitle: CardWithTitleComponent = (props) => {
  const {
    title,
    variant = 'normal',
    noTopPadding = false,
    noBottomPadding = false,
    children,
    ...rest
  } = props;
  const isBig = variant === 'big';

  return (
    <StyledCard {...rest}>
      <Box
        pt={noTopPadding ? 0 : 3}
        px={3}
        pb={2}
        sm={{
          ...(isBig
            ? { pt: noTopPadding ? 0 : 10, px: 10, pb: 3 }
            : { pt: noTopPadding ? 0 : 4, px: 5 }),
        }}
        as="header"
      >
        {isElement(title) ? (
          title
        ) : (
          <>
            <Media query={(t) => t.media.greaterThan(t.breakpoints.sm)}>
              <Typography type={isBig ? 'title2' : 'title3'} weight="extrabold">
                {title}
              </Typography>
            </Media>

            <Media query={(t) => t.media.lessThan(t.breakpoints.sm)}>
              <Typography type="title3" weight="extrabold">
                {title}
              </Typography>
            </Media>
          </>
        )}
      </Box>

      <Box
        px={3}
        pb={noBottomPadding ? 0 : 5}
        sm={{ ...(isBig ? { px: 10, pb: noBottomPadding ? 0 : 10 } : { px: 5 }) }}
      >
        {children}
      </Box>
    </StyledCard>
  );
};

CardWithTitle.displayName = 'CardWithTitle';
