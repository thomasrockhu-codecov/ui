import React from 'react';
import { Props } from './Header.types';
import { Flexbox, Typography } from '../../../index';
import { isElement } from '../../../common/utils';

export const Header: React.FC<Props> = ({
  className,
  container,
  flex = '1',
  grow,
  item = true,
  order,
  shrink,
  wrap = 'nowrap',
  fontSize = 's',
  children,
  ...htmlProps
}) => {
  return (
    <Flexbox
      container={container}
      flex={flex}
      grow={grow}
      item={item}
      order={order}
      shrink={shrink}
      wrap={wrap}
      className={className}
      role="columnheader"
      {...htmlProps}
    >
      {isElement(children) ? (
        <>{children}</>
      ) : (
        <Typography type={fontSize === 'l' ? 'secondary' : 'tertiary'} color={t => t.color.label}>
          {children}
        </Typography>
      )}
    </Flexbox>
  );
};
