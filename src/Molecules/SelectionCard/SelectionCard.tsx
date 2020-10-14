import React from 'react';
import Color from 'color';
import R from 'ramda';
import styled, { css } from 'styled-components';

import { Card, Flexbox, Typography, Box, Icon } from '../..';

import { SelectionCardComponent } from './SelectionCard.types';

const StyledImg = styled.img`
  width: 100%;
`;

const IEWidthFixFlexbox = styled(Flexbox)`
  width: 100%;
`;

const StyledTypography = styled(Typography).withConfig({
  shouldForwardProp: (prop) => !['inheritColor'].includes(prop),
})<{
  inheritColor: boolean;
}>`
  ${(p) => p.inheritColor && `color: inherit`};
`;

const StyledFlexbox = styled(Flexbox)`
  position: absolute;
  top: ${(p) => p.theme.spacing.unit(1)}px;
  width: 100%;
  color: inherit;
`;

const Tag = styled(Typography)`
  padding: 0px ${(p) => p.theme.spacing.unit(1)}px;
  background: ${(p) => p.theme.color.cta};
  color: ${(p) => p.theme.color.textLight};
  box-sizing: border-box;
`;

const Input = styled.input`
  opacity: 0;
  pointer-events: none;
`;

const CircleOutline = styled.div`
  border: 1px solid ${(p) => p.theme.color.selectionCardBorder};
  border-radius: 100%;
  height: ${(p) => p.theme.spacing.unit(5)}px;
  width: ${(p) => p.theme.spacing.unit(5)}px;
`;

const outlineStyles = css`
  outline: 2px solid ${(p) => p.theme.color.cta};
  outline-offset: -2px;
  vertical-align: top;
`;

const overlayStyles = css`
  background: ${(p) => Color(p.theme.color.cta).alpha(0.1).string()};
  ${outlineStyles}
`;

const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['disabled', 'error', 'border'].includes(prop),
})<{
  disabled: boolean;
  selected: boolean;
  border: boolean;
  error: boolean;
}>`
  height: 100%;
  position: relative;
  box-sizing: border-box;

  ${(p) => `cursor: ${p.disabled ? 'not-allowed' : 'pointer'}`};
  ${(p) => `color:${p.disabled ? p.theme.color.disabledText : p.theme.color.text}`};
  ${(p) => `background: ${p.disabled ? p.theme.color.disabledBackground : p.theme.color.card}`};
  ${(p) => p.border && `border: 1px solid ${p.theme.color.inputBorder}`};
  ${(p) => p.error && !p.disabled && `border: 1px solid ${p.theme.color.negative}`};
  ${(p) => !p.disabled && p.selected && overlayStyles};

  &:hover {
    ${(p) => !p.disabled && overlayStyles};
  }
`;

const StyledLabel = styled.label`
  cursor: inherit;

  &:focus-within {
    ${StyledCard} {
      ${outlineStyles}
    }
  }
`;

const StyledDiv = styled('div').withConfig({
  shouldForwardProp: (prop) =>
    !['iconPadding', 'imagePadding', 'tagPadding', 'text'].includes(prop),
})<{
  iconPadding: boolean;
  imagePadding: boolean;
  tagPadding: boolean;
  leftAlign: boolean;
}>`
  ${(p) => `text-align: ${p.leftAlign ? 'left' : 'center'}`};

  ${(p) => `padding:
    ${p.theme.spacing.unit(10)}px
    ${p.theme.spacing.unit(5)}px
    ${p.theme.spacing.unit(5)}px
    ${p.theme.spacing.unit(5)}px
  `};
  ${(p) => (p.iconPadding || p.imagePadding) && `padding-top: ${p.theme.spacing.unit(5)}px;`}
  ${(p) => p.tagPadding && `padding-top: ${p.theme.spacing.unit(7)}px;`}
`;

export const SelectionCard: SelectionCardComponent = ({
  border = false,
  disabled = false,
  error = false,
  horizontal = false,
  icon = null,
  imageUrl = '',
  imageAlt = '',
  onChange = () => {},
  outline = false,
  selected = false,
  tag = '',
  text = '',
  title = '',
}) => {
  const hasIcon = Boolean(icon && !imageUrl);

  const titleItem = title && (
    <IEWidthFixFlexbox item>
      <StyledTypography inheritColor={disabled} type="title3">
        {title}
      </StyledTypography>
    </IEWidthFixFlexbox>
  );

  const textItem = text && (
    <IEWidthFixFlexbox item>
      <StyledTypography
        inheritColor={disabled}
        color={(t) => t.color.selectionCardText}
        type="tertiary"
      >
        {text}
      </StyledTypography>
    </IEWidthFixFlexbox>
  );

  return (
    <StyledLabel>
      <StyledCard disabled={disabled} selected={selected} border={border} error={error}>
        {imageUrl && <StyledImg src={imageUrl} alt={imageAlt} />}

        <StyledFlexbox container justifyContent="space-between" direction="row">
          <Flexbox item>{tag && <Tag type="secondary">{tag}</Tag>}</Flexbox>
          <Box pt={4} pr={5}>
            {!disabled && !selected && outline && <CircleOutline />}
            {!disabled && selected && <Icon.CheckMarkCircle color={(t) => t.color.cta} />}
            <Input type="checkbox" disabled={disabled} onChange={disabled ? R.always : onChange} />
          </Box>
        </StyledFlexbox>

        <StyledDiv
          iconPadding={hasIcon}
          imagePadding={Boolean(imageUrl)}
          tagPadding={Boolean(tag && (text || horizontal))}
          leftAlign={Boolean(text)}
        >
          {horizontal && (
            <Flexbox container direction="row" gutter={5} alignContent="center">
              {hasIcon && (
                <Flexbox item alignSelf="center">
                  {icon}
                </Flexbox>
              )}

              <Flexbox container direction="column" gutter={1} alignItems="flex-start">
                {titleItem}
                {textItem}
              </Flexbox>
            </Flexbox>
          )}

          {!horizontal && (
            <Flexbox container direction="column" alignItems="center" gutter={1}>
              {hasIcon && (
                <Flexbox item {...(text && { alignSelf: 'flex-start' })}>
                  {icon}
                </Flexbox>
              )}
              {titleItem}
              {textItem}
            </Flexbox>
          )}
        </StyledDiv>
      </StyledCard>
    </StyledLabel>
  );
};
