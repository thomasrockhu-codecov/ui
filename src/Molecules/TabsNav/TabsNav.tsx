import React, { useCallback } from 'react';
import styled from 'styled-components';
import { HtmlProps } from 'Atoms/Typography/Typography.types';
import { useIntersect } from '../../common/Hooks';
import { Flexbox, TabTitle, Typography } from '../..';
import { assert, isNumber } from '../../common/utils';
import { useKeyboardNavigation } from '../Tabs/useKeyboardNavigation';
import { Component, ItemProps, TitleComponent, TitleProps } from './TabsNav.types';
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

const StyledFlexbox = styled(Flexbox)<{
  $height: number;
  $scrollOptions: { active: boolean; scrollBarHidden: boolean };
  $intersectionLeftRatio?: number;
  $intersectionRightRatio?: number;
}>`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  ${(p) =>
    p.$scrollOptions.active
      ? `
  overflow: auto;
  white-space: nowrap;
  ${
    isNumber(p.$intersectionRightRatio) && p.$intersectionRightRatio !== 1
      ? `
  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    height: ${`${p.theme.spacing.unit(p.$height)}`}px;
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #FFFFFF 100%);
    width: 10%;
  }
  `
      : ``
  }
  ${
    isNumber(p.$intersectionLeftRatio) && p.$intersectionLeftRatio !== 1
      ? `
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: ${`${p.theme.spacing.unit(p.$height)}`}px;
    pointer-events: none;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #FFFFFF 100%);
    width: 10%;
  }
  `
      : ``
  }
  `
      : ``};

  ${(p) =>
    p.$scrollOptions.scrollBarHidden
      ? `
    ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
      : ``};
`;

const IntersectionLeft: React.ForwardRefExoticComponent<HtmlProps> = styled.li`
  pointer-events: none;
`;

const IntersectionRight: React.ForwardRefExoticComponent<HtmlProps> = styled.li`
  pointer-events: none;
`;

const Title: TitleComponent = React.forwardRef<HTMLSpanElement, TitleProps>(
  ({ active, children, setRef, to, onKeyDown, onClick, height, fullServerRedirect }, ref) => {
    return (
      <Typography type="primary" weight={active ? 'bold' : 'regular'} ref={ref}>
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
  },
) as TitleComponent;
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
  scrollOptions = { active: false, scrollBarHidden: false },
}) => {
  const { setRef, onKeyDown } = useKeyboardNavigation({
    itemsLength: React.Children.count(children),
  });
  const titles: React.ReactNode[] = [];

  const [setIntersectionLeftRef, intersectionLeftRatio] = useIntersect<HTMLDivElement>();
  const [setIntersectionRightRef, intersectionRightRatio] = useIntersect<HTMLDivElement>();

  const scrollToRefCallback = useCallback((ref) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, []);

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
      direction="row"
      gutter={4}
      sm={{ gutter: 8 }}
    >
      <IntersectionLeft ref={setIntersectionLeftRef} />
      {titles}
      <IntersectionRight ref={setIntersectionRightRef} />
    </StyledFlexbox>
  );
};

TabsNav.displayName = 'TabsNav';
TabsNav.Tab = Item;

export default TabsNav;
