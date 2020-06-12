import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

type Props = { columnId: string; icons: number } & FlexboxProps;

export type IconHeaderComponent = React.FC<Props>;
