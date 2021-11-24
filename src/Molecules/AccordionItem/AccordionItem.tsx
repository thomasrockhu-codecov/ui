import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Box, OldIcon, Typography, Icon } from '../..';
import { isBoolean, isFunction, isString } from '../../common/utils';
import { Props, ItemProps } from './AccordionItem.types';

const TRANSITION_DURATION = 0.16;

const Item = styled.div<ItemProps>`
  ${({ theme, hasFocus, disableBackgroundColor, p, px, py, pt, pb, pl, pr }) => css`
    ${hasFocus && `outline: 1px solid ${theme.color.cta}`};
    ${!disableBackgroundColor && hasFocus && `background-color: ${theme.color.background}`};

    padding: ${theme.spacing.unit(pt || py || p || 0)}px ${theme.spacing.unit(pr || px || p || 0)}px
      ${theme.spacing.unit(pb || py || p || 0)}px ${theme.spacing.unit(pl || py || p || 0)}px;

    & + & {
      border-top: 1px solid ${theme.color.divider};
    }
  `}
`;

const Button = styled.button<{ withChevron?: boolean; disabled?: boolean }>`
  font: inherit;
  width: 100%;
  border: 0;
  display: flex;
  text-align: start;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  padding: ${(p) => p.theme.spacing.unit(3)}px 0;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.color.disabledText};
      cursor: default;
    `};

  ${({ withChevron, theme }) =>
    withChevron &&
    css`
      padding: ${theme.spacing.unit(3)}px 0;
      justify-content: space-between;
    `}
`;

const IconWrapper = styled.div<{ withChevron?: boolean }>`
  ${({ withChevron, theme }) =>
    css`
      margin-top: ${withChevron ? '0' : '-2px'};
      order: ${withChevron ? '1' : '-1'};
      padding-right: ${withChevron ? 0 : theme.spacing.unit(3)}px;
    `}
`;

const MovingChevron = styled(Icon.ChevronUp8)<{ disabled?: boolean; expanded: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color.disabledText : '')};
  transform: rotate(${(p) => (p.expanded ? '0' : '180')}deg);
  transition: transform ${TRANSITION_DURATION}s ease-out;
`;

const Content = styled(Box)``;

const components = {
  Content,
};

export const AccordionItem = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      as = 'h3',
      children,
      className,
      expanded: controlledExpand,
      expandedInitial,
      title,
      onClick,
      onToggle,
      withChevron,
      disableBackgroundColor,
      disabled,
      p,
      px,
      py,
      pt,
      pb,
      pl,
      pr,
    },
    ref,
  ) => {
    const [expandedInternal, setExpandedInternal] = useState(expandedInitial || false);
    const [hasFocus, setHasFocus] = useState(false);
    const isControlled = isBoolean(controlledExpand);
    const expanded = isControlled ? controlledExpand : expandedInternal;

    const clickHandler: React.MouseEventHandler = (e) => {
      if (!isControlled) {
        setExpandedInternal(!expandedInternal);
      }

      if (isFunction(onClick)) {
        onClick(e);
      }

      if (isFunction(onToggle)) {
        onToggle(!expanded);
      }
    };

    const icon = (() => {
      if (withChevron) return <MovingChevron expanded={!!expanded} disabled={disabled} />;

      if (expanded) return <OldIcon.Minus size={3} fill={(t) => t.color.cta} />;
      return (
        <OldIcon.Plus size={3} fill={(t) => (disabled ? t.color.disabledText : t.color.cta)} />
      );
    })();

    const padding = { p, px, py, pt, pb, pl, pr };
    return (
      <Item
        className={className}
        aria-expanded={expanded}
        hasFocus={hasFocus}
        disabled={disabled}
        disableBackgroundColor={disableBackgroundColor}
        {...padding}
      >
        <Typography as={as} type="secondary" weight="bold">
          <Button
            ref={ref}
            onClick={clickHandler}
            onBlur={() => setHasFocus(false)}
            onFocus={() => setHasFocus(true)}
            disabled={disabled}
            withChevron={withChevron}
          >
            {title}
            <IconWrapper withChevron={withChevron}>{icon}</IconWrapper>
          </Button>
        </Typography>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.section
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: TRANSITION_DURATION, ease: 'easeOut' }}
            >
              <Content pt={1} pb={3} pl={withChevron ? 0 : 6} pr={withChevron ? 6 : 0}>
                {isString(children) ? (
                  <Typography as="p" type="secondary" color={(t) => t.color.accordionText}>
                    {children}
                  </Typography>
                ) : (
                  children
                )}
              </Content>
            </motion.section>
          )}
        </AnimatePresence>
      </Item>
    );
  },
) as React.ForwardRefExoticComponent<Props> & {
  components: typeof components;
} as React.FC<Props> & {
  components: typeof components;
};

AccordionItem.components = components;
