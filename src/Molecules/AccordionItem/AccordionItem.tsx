import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Box, OldIcon, Typography, Icon } from '../..';
import { isBoolean, isFunction, isString } from '../../common/utils';
import { Props } from './AccordionItem.types';

const TRANSITION_DURATION = 0.16;

const Item = styled.div<{
  $hasFocus: boolean;
  $disabled?: boolean;
  $disableBackgroundColor?: boolean;
  $p?: number;
  $px?: number;
  $py?: number;
  $pt?: number;
  $pb?: number;
  $pl?: number;
  $pr?: number;
}>`
  & + & {
    border-top: 1px solid ${(p) => p.theme.color.divider};
  }

  outline: ${({ $hasFocus, theme }) => ($hasFocus ? `1px solid ${theme.color.cta}` : 'none')};

  ${({ $p, theme }) => ($p ? `padding: ${theme.spacing.unit($p)}px;` : '')}
  ${({ $px, theme }) =>
    $px
      ? `padding-left: ${theme.spacing.unit($px)}px; padding-right: ${theme.spacing.unit($px)}px;`
      : ''}
  ${({ $py, theme }) =>
    $py
      ? `padding-top: ${theme.spacing.unit($py)}px; padding-bottom: ${theme.spacing.unit($py)}px;`
      : ''}
  ${({ $pt, theme }) => ($pt ? `padding-top: ${theme.spacing.unit($pt)}px;` : '')}
  ${({ $pb, theme }) => ($pb ? `padding-bottom: ${theme.spacing.unit($pb)}px;` : '')}
  ${({ $pl, theme }) => ($pl ? `padding-left: ${theme.spacing.unit($pl)}px;` : '')}
  ${({ $pr, theme }) => ($pr ? `padding-right: ${theme.spacing.unit($pr)}px;` : '')}

  background-color: ${({ $disableBackgroundColor, $hasFocus, theme }) =>
    !$disableBackgroundColor && $hasFocus ? `${theme.color.background}` : 'transparent'};
`;

const Button = styled.button<{ withChevron?: boolean; $disabled?: boolean }>`
  font: inherit;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 0;
  padding-top: ${(p) => p.theme.spacing.unit(3)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(3)}px;
  padding-left: 0;
  color: ${(p) => (p.$disabled ? p.theme.color.disabledText : '')};
  background-color: transparent;
  cursor: ${(p) => (p.$disabled ? 'default' : 'pointer')};
  text-align: start;
  ${({ withChevron, theme }) =>
    withChevron &&
    css`
      padding: ${theme.spacing.unit(3)}px 0;
      justify-content: space-between;
    `}
`;

const IconWrapper = styled.div<{ withChevron?: boolean }>`
  margin-top: -2px;
  order: ${(p) => (p.withChevron ? '1' : '-1')};
  padding-left: ${(p) => (p.withChevron ? p.theme.spacing.unit(3) : 0)}px;
  padding-right: ${(p) => (!p.withChevron ? p.theme.spacing.unit(3) : 0)}px;
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

    const icon = (
      <IconWrapper withChevron={withChevron}>
        {(() => {
          if (withChevron) return <MovingChevron expanded={!!expanded} />;

          if (expanded) return <OldIcon.Minus size={3} fill={(t) => t.color.cta} />;
          return (
            <OldIcon.Plus size={3} fill={(t) => (disabled ? t.color.disabledText : t.color.cta)} />
          );
        })()}
      </IconWrapper>
    );

    return (
      <Item
        className={className}
        aria-expanded={expanded}
        $hasFocus={hasFocus}
        $disabled={disabled}
        $disableBackgroundColor={disableBackgroundColor}
        $p={p}
        $px={px}
        $py={py}
        $pt={pt}
        $pb={pb}
        $pl={pl}
        $pr={pr}
      >
        <Typography as={as} type="secondary" weight="bold">
          <Button
            withChevron={withChevron}
            $disabled={disabled}
            type="button"
            onClick={clickHandler}
            ref={ref}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            disabled={disabled}
          >
            {title}
            {icon}
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
