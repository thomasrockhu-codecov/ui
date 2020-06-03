import React, { useContext, useEffect } from 'react';
import { Props } from './Header.types';
import { Flexbox, Typography } from '../../../index';
import { FlexTableContext } from '../shared/FlexTableContext';
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
  name,
  fontSize = 's',
  children,
  ...htmlProps
}) => {
  const { setColumnProps } = useContext(FlexTableContext);

  useEffect(() => {
    if (setColumnProps) {
      setColumnProps(name, {
        container,
        flex,
        grow,
        item,
        order,
        shrink,
        wrap,
      });
    }
  }, [flex, grow, item, order, shrink, wrap, container]);

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
