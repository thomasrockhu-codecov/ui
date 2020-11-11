import React from 'react';
import { useUIDSeed } from 'react-uid';
import styled from 'styled-components';
import { Icon, Link, Flexbox, Spinner } from '../..';
import { ShowMoreButtonComponent } from './ShowMoreButton.types';

const StyledIconThinChevron = styled(Icon.ThinChevron)`
  margin-left: ${(p) => p.theme.spacing.unit(1)}px;
`;

export const ShowMoreButton: React.FC<ShowMoreButtonComponent> = ({
  onClick = () => {},
  expanded = false,
  disabled = false,
  loading = false,
  align = 'center',
  showMoreText = 'Show more',
  showLessText = 'Show less',
}) => {
  const seed = useUIDSeed();
  const spinnerId = seed('Spinner');
  return (
    <Flexbox container justifyContent={align === 'left' ? 'flex-start' : 'center'}>
      <Flexbox item>
        <Link onClick={!disabled ? onClick : () => {}} disabled={disabled} aria-expanded={expanded}>
          {loading ? (
            <Spinner
              delay={false}
              id={spinnerId}
              color={(t) => (disabled ? t.color.disabledText : t.color.cta)}
            />
          ) : (
            <>
              {expanded ? showLessText : showMoreText}
              <StyledIconThinChevron
                size={2}
                inline
                fill="currentColor"
                direction={expanded ? 'up' : 'down'}
              />
            </>
          )}
        </Link>
      </Flexbox>
    </Flexbox>
  );
};
