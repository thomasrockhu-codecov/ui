import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Box, Icon, Typography } from '../..';
import { isBoolean, isFunction, isString } from '../../common/utils';
import { AccordionItemComponent } from './AccordionItem.types';

const Item = styled.div<{ $hasFocus: boolean }>`
  & + & {
    border-top: 1px solid ${(p) => p.theme.color.divider};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }

  outline: ${({ $hasFocus, theme }) => ($hasFocus ? `1px solid ${theme.color.cta}` : 'none')};

  background-color: ${({ $hasFocus, theme }) =>
    $hasFocus ? `${theme.color.background}` : 'transparent'};
`;

const Button = styled.button`
  font: inherit;
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  border: 0;
  padding-top: ${(p) => p.theme.spacing.unit(3)}px;
  padding-right: 0;
  padding-bottom: ${(p) => p.theme.spacing.unit(3)}px;
  padding-left: ${(p) => p.theme.spacing.unit(6)}px;
  background-color: transparent;
  cursor: pointer;
  text-align: start;
  outline: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
`;

export const AccordionItem: AccordionItemComponent = React.forwardRef(
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

    return (
      <Item className={className} aria-expanded={expanded} $hasFocus={hasFocus}>
        <Typography as={as} type="secondary" weight="bold">
          <Button
            type="button"
            onClick={clickHandler}
            ref={ref}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          >
            <IconWrapper>
              {expanded ? (
                <Icon.Minus size={3} fill={(t) => t.color.cta} />
              ) : (
                <Icon.Plus size={3} fill={(t) => t.color.cta} />
              )}
            </IconWrapper>
            {title}
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
              transition={{ duration: 0.16, ease: 'easeOut' }}
            >
              <Box pt={1} pb={3} pl={6}>
                {isString(children) ? (
                  <Typography as="p" type="secondary" color={(t) => t.color.accordionText}>
                    {children}
                  </Typography>
                ) : (
                  children
                )}
              </Box>
            </motion.section>
          )}
        </AnimatePresence>
      </Item>
    );
  },
);
