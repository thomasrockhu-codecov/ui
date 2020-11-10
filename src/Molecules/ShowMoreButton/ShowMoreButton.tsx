import React from 'react';

import { Icon, Link, Flexbox, Spinner } from '../..';

import { ShowMoreButtonComponent } from './ShowMoreButton.types';

export const ShowMoreButton: React.FC<ShowMoreButtonComponent> = ({
  onClick = () => {},
  expanded = false,
  disabled = false,
  loading = false,
  align = 'center',
  showMoreText,
  showLessText,
}) => {
  return (
    <Flexbox container justifyContent={align === 'left' ? 'flex-start' : 'center'}>
      <Flexbox item>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link onClick={!disabled ? onClick : () => {}} disabled={disabled} aria-expanded={expanded}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {!expanded ? (
            loading ? (
              <Spinner
                id="show-more-spinner"
                color={(t) => (disabled ? t.color.disabledText : t.color.cta)}
              />
            ) : (
              <>
                {showMoreText}&nbsp;
                <Icon.ChevronDown size={2} inline fill="currentColor" />
              </>
            )
          ) : (
            <>
              {showLessText}&nbsp;
              <Icon.ChevronUp size={2} inline fill="currentColor" />
            </>
          )}
        </Link>
      </Flexbox>
    </Flexbox>
  );
};
