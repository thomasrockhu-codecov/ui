import React from 'react';
import ShowMore from '.';

export default {
  title: 'Organisms / ShowMore',
};

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pharetra nisi, sed scelerisque lectus. Sed at sem at elit efficitur vestibulum quis id orci. Nunc faucibus enim at nulla porta, vitae luctus lacus fringilla. Cras ut augue pharetra, malesuada purus blandit, dapibus est. Donec dictum dapibus diam tempus luctus. Maecenas lobortis cursus nisl, et convallis orci interdum at. Etiam lacinia tincidunt massa. Curabitur sit amet dolor eu magna condimentum tempus ut eget dolor. Aliquam vehicula mattis ullamcorper. Mauris porta eget tellus eget ultricies. Donec felis magna, imperdiet ac mauris sit amet, maximus vehicula odio. Maecenas vitae nunc non nisi molestie blandit sed vitae lectus. Suspendisse at finibus ex. Fusce accumsan ante faucibus ante porta, sit amet congue lacus venenatis. Sed eu ultricies nisl. Proin sapien urna, molestie eget ullamcorper eget, rhoncus eu ante. Vestibulum non urna vel diam cursus pretium a ut turpis. Nulla cursus neque velit, non pharetra leo commodo a. Proin risus est, convallis nec mauris non, lobortis vulputate nisl. Praesent hendrerit elit in nisl pharetra, a volutpat eros lacinia.';

export const Default = () => {
  return <ShowMore showMoreText="Show more">{text}</ShowMore>;
};

export const WithCustomCutOffHeight = () => {
  return (
    <ShowMore showMoreText="Show much more" cutoffHeight={100}>
      {text}
    </ShowMore>
  );
};
