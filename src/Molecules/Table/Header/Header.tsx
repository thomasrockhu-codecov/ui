import React from 'react';
import { Props } from './Header.types';
import { isElement } from '../../../common/utils';
import { Flexbox } from '../../..';
import { TextWrapper } from './TextWrapper';

export const Header: React.FC<Props> = ({
  className,
  container,
  flex = '1',
  grow,
  item = true,
  order,
  shrink,
  wrap = 'nowrap',
  fontSize = 'm',
  density = 'm',
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
        <TextWrapper fontSize={fontSize} density={density}>
          {children}
        </TextWrapper>
      )}
    </Flexbox>
  );
};
