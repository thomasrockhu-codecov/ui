import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from '../..';
import { ShowMoreButton } from './ShowMoreButton';

export const MockedShowMoreButton = () => {
  const [showMoreA, setShowMoreA] = useState(false);
  const [showMoreB, setShowMoreB] = useState(false);

  return (
    <>
      <Typography>
        Consectetur distinctio dolore iure nihil quam quis vel. Aut autem consequatur ex impedit
        magni molestias obcaecati omnis possimus! Consectetur distinctio dolore iure nihil quam quis
        vel. Aut autem consequatur ex impedit magni molestias obcaecati omnis possimus! Ex fugit
        nulla veritatis!
      </Typography>
      {showMoreA && (
        <Typography>
          Ex fugit nulla veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consectetur distinctio dolore iure nihil quam quis vel. Aut autem consequatur ex impedit
          magni molestias obcaecati omnis possimus! Ex fugit nulla veritatis! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </Typography>
      )}
      <ShowMoreButton
        onClick={() => setShowMoreA(!showMoreA)}
        expanded={showMoreA}
        align="left"
        showMoreText="Show more"
        showLessText="Show less"
      />
      <br />
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur distinctio dolore iure
        nihil quam quis vel. Aut autem consequatur ex impedit magni molestias obcaecati omnis
        possimus! Consectetur distinctio dolore iure nihil quam quis vel. Aut autem consequatur ex
        impedit magni molestias obcaecati omnis possimus! Ex fugit nulla veritatis!
      </Typography>
      {showMoreB && (
        <Typography>
          Ex fugit nulla veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consectetur distinctio dolore iure nihil quam quis vel. Aut autem consequatur ex impedit
          magni molestias obcaecati omnis possimus! Ex fugit nulla veritatis! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </Typography>
      )}
      <ShowMoreButton
        onClick={() => setShowMoreB(!showMoreB)}
        expanded={showMoreB}
        align="center"
        showMoreText="Show more"
        showLessText="Show less"
      />
    </>
  );
};

export const DisabledMockedShowMoreButton = () => {
  return (
    <ShowMoreButton
      onClick={() => {}}
      expanded={false}
      disabled
      showMoreText="Show more"
      showLessText="Show less"
    />
  );
};

export const LoadingShowMoreButton = () => {
  return (
    <ShowMoreButton
      onClick={() => {}}
      expanded={false}
      loading
      showMoreText="Show more"
      showLessText="Show less"
    />
  );
};

storiesOf('Guidance / Show More Button', module)
  .add('Default', () => <MockedShowMoreButton />)
  .add('Disabled', () => <DisabledMockedShowMoreButton />)
  .add('Loading', () => <LoadingShowMoreButton />);
