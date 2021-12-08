import React from 'react';
import styled from 'styled-components';
import { Flexbox, TabTitle, Typography } from '../..';
import { assert } from '../../common/utils';
import { useKeyboardNavigation } from '../Tabs/useKeyboardNavigation';
import { Component, ItemProps, TitleComponent } from './TabsNav.types';
import { useLink } from '../../common/Links';
import { LinkProps } from '../../common/Links/types';

export const Item: React.FC<ItemProps> = ({ children }) => {
  return <div>{children}</div>;
};
(Item as any).displayName = 'TabsNav.Tab';

const Link: React.FC<LinkProps> = (props) => {
  const LinkComponent = useLink();
  return <LinkComponent {...props} />;
};

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
`;

const Title: TitleComponent = ({
  active,
  children,
  setRef,
  to,
  onKeyDown,
  onClick,
  height,
  fullServerRedirect,
}) => {
  return (
    <Typography type="primary" weight={active ? 'bold' : 'regular'}>
      <StyledLink
        to={to}
        innerRef={setRef}
        aria-current={active ? 'page' : undefined}
        onKeyDown={onKeyDown}
        onClick={onClick}
        fullServerRedirect={fullServerRedirect}
      >
        <TabTitle active={active} height={height}>
          {children}
        </TabTitle>
      </StyledLink>
    </Typography>
  );
};
Title.displayName = 'TabsNav.Title';

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const isItemOrUndefined = (x: any): x is { type: typeof Item; props: ItemProps } => {
  if (x == null || typeof x === 'undefined') {
    return true;
  }

  return typeof x === 'object' && Object.hasOwnProperty.call(x, 'type'); // FIXME: && x.type === Item;
};

export const TabsNav: Component = ({ children, height = 11, className }) => {
  const { setRef, onKeyDown } = useKeyboardNavigation({
    itemsLength: React.Children.count(children),
  });
  const titles: React.ReactNode[] = [];

  React.Children.forEach(children, (c, i) => {
    if (!isItemOrUndefined(c)) {
      assert(false, 'There should be only <TabsNav.Tab> children inside of <TabsNav> component');
    } else if (c) {
      titles.push(
        <Flexbox item as="li" key={c.props.to}>
          <Title
            active={!!c.props.active}
            onClick={c.props.onTitleClick}
            setRef={setRef(i)}
            to={c.props.to}
            fullServerRedirect={c.props.fullServerRedirect}
            onKeyDown={onKeyDown}
            height={height}
            className={c.props.className}
          >
            {c.props.title}
          </Title>
        </Flexbox>,
      );
    }
  });

  return (
    <Flexbox
      className={className}
      container
      direction="row"
      gutter={4}
      as={StyledUl}
      sm={{ gutter: 8 }}
    >
      {titles}
    </Flexbox>
  );
};

TabsNav.displayName = 'TabsNav';
TabsNav.Tab = Item;

export default TabsNav;
