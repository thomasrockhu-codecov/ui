import React, { useRef, FC, MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import Color from 'color';
import styled, { withTheme, css } from 'styled-components';
import { Props, getLeftFn, InternalSliderTypes } from './Slider.types';

const THUMB_BIG = 30;
const THUMB_SMALL = 20;
const VARIANT_TYPES = { SMALL: 'small', BIG: 'big' };

const pressedThumbStyle = css<InternalSliderTypes>`
  &:active {
    background: ${p => {
      const thumbColor = p.$sliderColor ? p.$sliderColor(p.theme) : '';
      return !p.$disabled && `${thumbColor ? Color(thumbColor).darken(0.1) : ''}`;
    }};
    height: ${p =>
      p.$variant === VARIANT_TYPES.SMALL
        ? `${THUMB_SMALL - p.theme.spacing.unit(1)}`
        : `${THUMB_BIG - p.theme.spacing.unit(1.25)}`}px;
    width: ${p =>
      p.$variant === VARIANT_TYPES.SMALL
        ? `${THUMB_SMALL - p.theme.spacing.unit(1)}`
        : `${THUMB_BIG - p.theme.spacing.unit(1.25)}`}px;
  }
`;

const focusedThumbStyle = css<InternalSliderTypes>`
  &:focus {
    border: ${p => {
      const thumbColor = p.$sliderColor ? p.$sliderColor(p.theme) : '';
      return (
        !p.$disabled &&
        `${thumbColor ? `${p.theme.spacing.unit(1)}px solid ${Color(thumbColor).darken(0.1)}` : ''}`
      );
    }};
    background: ${p => {
      const thumbColor = p.$sliderColor ? p.$sliderColor(p.theme) : '';
      return !p.$disabled && `${thumbColor ? Color(thumbColor).darken(0.1) : ''}`;
    }};
    border-radius: 50%;
  }
`;

const height = css<InternalSliderTypes>`
  height: ${p =>
    p.$variant === VARIANT_TYPES.SMALL
      ? `${p.theme.spacing.unit(1)}`
      : `${p.theme.spacing.unit(3)}`}px;
`;

const StyledSliderWrapper = styled('div')<InternalSliderTypes>`
  background: linear-gradient(
    to right,
    ${p => (p.$sliderColor && !p.$disabled ? p.$sliderColor(p.theme) : p.theme.color.sliderColor)}
      0% 50%,
    ${p => p.theme.color.sliderBackgroundColor} 50% 100%
  );
  background: ${p => p.$disabled && p.theme.color.sliderDisabled};
  ${height};
  max-width: 100%;
  width: 100%;
`;

const StyledSlider = styled('div')<InternalSliderTypes>`
  max-width: 100%;
  ${height};
  position: relative;
  width: calc(
    100% - ${p => (p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL}` : `${THUMB_BIG}`)}px
  );
  margin: 0 auto;
`;

const getPercentage = (current: number, min: number, max: number) =>
  ((current - min) / (max - min)) * 100;

const getValue = (percentage: number, min: number, max: number) =>
  ((max - min) / 100) * percentage + min;

const StyledThumb = styled('div')<InternalSliderTypes>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${p => (p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL}` : `${THUMB_BIG}`)}px;
  height: ${p => (p.$variant === VARIANT_TYPES.SMALL ? `${THUMB_SMALL}` : `${THUMB_BIG}`)}px;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background: ${p => p.theme.color.sliderThumbBackground};
  border: ${p =>
    `${p.theme.spacing.unit(1)}px solid ${
      p.$sliderColor && !p.$disabled ? p.$sliderColor(p.theme) : p.theme.color.sliderColor
    }`};
  border: ${p =>
    p.$disabled ? `${p.theme.spacing.unit(1)}px solid ${p.theme.color.sliderDisabled}` : ''};
  cursor: grab;
  ${focusedThumbStyle}
  ${pressedThumbStyle}
`;

const getLeft: getLeftFn = (percentage, variant) => {
  return `calc(${percentage}% - ${
    variant === 'big' ? `${THUMB_BIG / 2}` : `${THUMB_SMALL / 2}`
  }px)`;
};
const Slider: FC<Props> = ({
  onChange,
  value,
  max,
  min,
  step,
  sliderColor,
  theme,
  variant = 'big',
  disabled = false,
}) => {
  const initialPercentage = getPercentage(value, min, max);
  const linearGradient: number = ((value - min) / (max - min)) * 100;

  const sliderRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const thumbRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const diff = useRef() as React.MutableRefObject<number>;

  const handleChange = (val: number) => {
    if (!disabled) {
      let newX = val;
      const start = 0;
      const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

      if (newX < start) {
        newX = start;
      }
      if (newX > end) {
        newX = end;
      }

      const newPercentage = getPercentage(newX, start, end);
      const newValue = getValue(newPercentage, min, max);

      if (newValue % step === 0) {
        thumbRef.current.style.left = getLeft(newPercentage, variant);
      }

      if (typeof onChange === 'function') {
        onChange(newValue - (newValue % step));
      }
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const newX = event.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;
    handleChange(newX);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove as () => void);
  };

  const handleMouseDown = (event: MouseEvent) => {
    diff.current = event.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', handleMouseMove as () => void);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const newX =
      event.touches[0].clientX - diff.current - sliderRef.current.getBoundingClientRect().left;
    handleChange(newX);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchmove', handleTouchMove as () => void);
  };

  const handleTouchStart = (event: TouchEvent) => {
    diff.current = event.touches[0].clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('touchmove', handleTouchMove as () => void);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleThumbClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleSliderClick = (event: MouseEvent) => {
    const newX = event.clientX - sliderRef.current.getBoundingClientRect().left;
    handleChange(newX);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!disabled) {
      const increase =
        (event.key && ['ArrowRight', 'ArrowUp'].includes(event.key)) ||
        (event.keyCode && [38, 39].includes(event.keyCode));
      const decrease =
        (event.key && ['ArrowLeft', 'ArrowDown'].includes(event.key)) ||
        (event.keyCode && [37, 40].includes(event.keyCode));

      let newX = value;
      if (increase) {
        newX = value + step;
      }
      if (decrease) {
        newX = value - step;
      }
      if (newX >= min && newX <= max) {
        if (typeof onChange === 'function') {
          onChange(newX);
        }
      }
    }
  };

  const sliderBackground = {
    background: `linear-gradient(to right, ${
      sliderColor ? sliderColor(theme) : theme.color.sliderColor
    } ${linearGradient}% , ${theme.color.sliderBackgroundColor} ${linearGradient}%)`,
  };

  const disabledBackground = {
    background: `${theme.color.sliderDisabled}`,
  };

  return (
    <StyledSliderWrapper $sliderColor={sliderColor} $variant={variant} $disabled={disabled}>
      <StyledSlider
        ref={sliderRef}
        style={disabled ? disabledBackground : sliderBackground}
        onClick={handleSliderClick}
        $sliderColor={sliderColor}
        $variant={variant}
      >
        <StyledThumb
          $sliderColor={sliderColor}
          tabIndex={0}
          ref={thumbRef}
          onClick={handleThumbClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          style={{ left: getLeft(initialPercentage, variant) }}
          role="slider"
          aria-valuemin={min}
          aria-valuenow={value}
          aria-valuemax={max}
          $variant={variant}
          $disabled={disabled}
        />
      </StyledSlider>
    </StyledSliderWrapper>
  );
};

export default withTheme(Slider);
