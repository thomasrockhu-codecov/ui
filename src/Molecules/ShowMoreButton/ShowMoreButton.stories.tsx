import React, { useState } from 'react';
import { Typography } from '../..';
import { ShowMoreButton } from './ShowMoreButton';

export default {
  title: 'Molecules / ShowMoreButton',
};

export const Default = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Typography>
        Consectetur distinctio dolore iure nihil quam quis vel. Aut autem consequatur ex impedit
        magni molestias obcaecati omnis possimus! Consectetur distinctio dolore iure nihil quam quis
        vel. Aut autem consequatur ex impedit magni molestias obcaecati omnis possimus! Ex fugit
        nulla veritatis!
      </Typography>
      {showMore && (
        <Typography>
          Ex fugit nulla veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consectetur distinctio dolore iure nihil quam quis vel. Aut autem consequatur ex impedit
          magni molestias obcaecati omnis possimus! Ex fugit nulla veritatis! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </Typography>
      )}
      <ShowMoreButton
        onClick={() => setShowMore(!showMore)}
        expanded={showMore}
        showMoreText="Show more"
        showLessText="Show less"
      />
    </>
  );
};

export const AlignedLeft = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Typography>
        Ex fugit nulla veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consectetur distinctio dolore iure nihil quam quis vel. Aut autem consequatur ex impedit
        magni molestias obcaecati omnis possimus! Consectetur distinctio dolore iure nihil quam quis
        vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis
        dolorum, facilis id illum ipsam ipsum maxime modi necessitatibus nemo nostrum odio odit
        officia praesentium provident quod totam vero.
      </Typography>
      {showMore && (
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae reiciendis vero.
          Aliquid dolore, doloremque error facere illum ipsa magnam nam nemo neque non pariatur quas
          sapiente tempore ullam voluptates. Ex fugit nulla veritatis! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Consectetur distinctio dolore iure nihil quam quis vel. Aut
          autem consequatur ex impedit magni molestias obcaecati omnis possimus!
        </Typography>
      )}
      <ShowMoreButton
        onClick={() => setShowMore(!showMore)}
        expanded={showMore}
        align="left"
        showMoreText="Show more"
        showLessText="Show less"
      />
    </>
  );
};

export const Disabled = () => {
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

export const Loading = () => {
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
