import React, { useCallback } from 'react';
import styled from 'styled-components';
import scrollIntoView, { StandardBehaviorOptions } from 'scroll-into-view-if-needed';
import { Component, ItemProps, ScrollStyleProps, TitleProps } from './TabsNav.types';
import { scrollStyles } from './TabsNav.styles';
import { useIntersect } from '../../common/Hooks';
import { Flexbox, TabTitle, Typography } from '../..';
import { assert } from '../../common/utils';
import { useKeyboardNavigation } from '../Tabs/useKeyboardNavigation';
import { useLink } from '../../common/Links';
import { LinkProps } from '../../common/Links/types';

const DEFAULT_SCROLL_OPTIONS = {
  active: false,
  scrollBarHidden: false,
  scrollIntoViewOptions: null,
  scrollFade: false,
};

const DEFAULT_SCROLL_INTO_VIEW_OPTIONS: StandardBehaviorOptions = {
  behavior: 'smooth',
  inline: 'center',
  block: 'end',
};

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

const StyledFlexbox = styled(Flexbox)<ScrollStyleProps>`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  ${scrollStyles}
`;

const Title = React.forwardRef<HTMLSpanElement, TitleProps>(
  ({ active, children, setRef, to, onKeyDown, onClick, height, fullServerRedirect }, ref) => {
    return (
      // @ts-expect-error: Typography doesn't accept ref but is actually a React.ForwardRef
      <Typography type="primary" weight={active ? 'bold' : 'regular'} ref={ref}>
        <StyledLink
          to={to}
          innerRef={setRef}
          aria-current={active ? 'page' : undefined}
          onKeyDown={onKeyDown}
          onClick={onClick}
          fullServerRedirect={fullServerRedirect}
        >
          <TabTitle active={active} height={height} variant="large">
            {children}
          </TabTitle>
        </StyledLink>
      </Typography>
    );
  },
);
Title.displayName = 'TabsNav.Title';

const isItemOrUndefined = (x: any): x is { type: typeof Item; props: ItemProps } => {
  if (x == null || typeof x === 'undefined') {
    return true;
  }

  return typeof x === 'object' && Object.hasOwnProperty.call(x, 'type'); // FIXME: && x.type === Item;
};

export const TabsNav: Component = ({
  children,
  height = 11,
  className,
  scrollOptions = DEFAULT_SCROLL_OPTIONS,
}) => {
  const { setRef, onKeyDown } = useKeyboardNavigation({
    itemsLength: React.Children.count(children),
  });
  const titles: React.ReactNode[] = [];

  const [setIntersectionLeftRef, intersectionLeftRatio] = useIntersect<HTMLDivElement>();
  const [setIntersectionRightRef, intersectionRightRatio] = useIntersect<HTMLDivElement>();

  const scrollToRefCallback = useCallback(
    (ref) => {
      if (ref && scrollOptions.active) {
        setTimeout(() => {
          scrollIntoView(
            ref,
            scrollOptions?.scrollIntoViewOptions ?? DEFAULT_SCROLL_INTO_VIEW_OPTIONS,
          );
        }, 0);
      }
    },
    [scrollOptions.active, scrollOptions?.scrollIntoViewOptions],
  );

  const setIntersectionRef = (index: number) => {
    if (!scrollOptions.active) {
      return null;
    }
    if (index === 0) {
      return setIntersectionLeftRef;
    }
    if (index === React.Children.count(children) - 1) {
      return setIntersectionRightRef;
    }
    return null;
  };

  React.Children.forEach(children, (c, i) => {
    if (!isItemOrUndefined(c)) {
      assert(false, 'There should be only <TabsNav.Tab> children inside of <TabsNav> component');
    } else if (c) {
      titles.push(
        <Flexbox ref={setIntersectionRef(i)} item as="li" key={c.props.to}>
          <Title
            active={!!c.props.active}
            onClick={c.props.onTitleClick}
            setRef={setRef(i)}
            to={c.props.to}
            fullServerRedirect={c.props.fullServerRedirect}
            onKeyDown={onKeyDown}
            height={height}
            className={c.props.className}
            ref={c.props.active ? scrollToRefCallback : null}
          >
            {c.props.title}
          </Title>
        </Flexbox>,
      );
    }
  });

  return (
    <StyledFlexbox
      $height={height}
      $scrollOptions={scrollOptions}
      $intersectionLeftRatio={intersectionLeftRatio || 0}
      $intersectionRightRatio={intersectionRightRatio || 0}
      className={className}
      container
    >
      <Flexbox container direction="row" gutter={4} sm={{ gutter: 8 }}>
        {titles}
      </Flexbox>
    </StyledFlexbox>
  );
};

TabsNav.displayName = 'TabsNav';
TabsNav.Tab = Item;

export default TabsNav;
