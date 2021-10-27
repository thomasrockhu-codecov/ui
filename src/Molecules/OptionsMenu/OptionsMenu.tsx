import React from 'react';
// import styled from 'styled-components';
import { Separator } from '../..';
import { Component } from './OptionsMenu.types';

// const Footer = styled.div`
//   padding-top: ${(p) => p.theme.spacing.unit(3)}px;
// `;

export const OptionsMenu: Component = ({ children, optionGroups }) => {
  return (
    <>
      {children}
      <>
        {optionGroups?.map((group) => group.map((option) => option))}
        <Separator />
      </>
    </>
  );
};
