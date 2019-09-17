import React, { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

export type Props = {
  label: React.ReactText | FormattedMessage.MessageDescriptor;
  children: ReactNode;
  labelType?: 'tertiary';
};

export type LabeledValueComponent = React.FunctionComponent<Props>;
