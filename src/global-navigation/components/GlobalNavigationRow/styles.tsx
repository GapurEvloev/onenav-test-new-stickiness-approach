import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {ResponsiveSetting} from "../../types.ts";

type GapSize =
  | 'space.025'
  | 'space.050'
  | 'space.100'
  | 'space.150'
  | 'space.200'
  | 'space.0'
  | 'space.075'
  | 'space.250'
  | 'space.300'
  | 'space.400'
  | 'space.500'
  | 'space.600'
  | 'space.800'
  | 'space.1000';
type AlignItems = 'center' | 'start' | 'end' | 'baseline' | 'stretch';
type JustifyItems = 'center' | 'start' | 'end' | 'stretch';
type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
type AutoFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense';

interface GridProps {
  children: ReactNode;
  as?: 'div' | 'ol' | 'span' | 'ul';
  columns?: string | number;
  templateRows?: string;
  templateAreas?: string[];
  rowGap?: GapSize;
  columnGap?: GapSize;
  gap?: GapSize;
  alignItems?: AlignItems;
  justifyItems?: JustifyItems;
  alignContent?: AlignContent;
  justifyContent?: JustifyContent;
  autoFlow?: AutoFlow;
  testId?: string;
  visibility?: ResponsiveSetting<boolean>;
  sticky?: ResponsiveSetting<boolean>;
  id?: string;
}

// Helper function to convert visibility to CSS display property
const visibilityToDisplay = (visibility: ResponsiveSetting<boolean>) => {
  let displayValues = `display: grid; `;
  Object.entries(visibility).forEach(([breakpoint, isVisible]) => {
    if (!isVisible) {
      displayValues += `@media (max-width: ${breakpoint}) { display: none; } `;
    }
  });
  return displayValues;
};

const spaceToRem = {
  'space.025': '0.25rem',
  'space.050': '0.5rem',
  'space.100': '1rem',
  'space.150': '1.5rem',
  'space.200': '2rem',
  'space.0': '0',
  'space.075': '0.75rem',
  'space.250': '2.5rem',
  'space.300': '3rem',
  'space.400': '4rem',
  'space.500': '5rem',
  'space.600': '6rem',
  'space.800': '8rem',
  'space.1000': '10rem'
};

const StyledGrid = styled.div.withConfig({
  displayName: 'GlobalNavigationRowContainer'
})<GridProps>`
  ${({visibility}) => visibility && visibilityToDisplay(visibility)};
  // ${({columns}) => columns ? `grid-template-columns: repeat(${columns}, minmax(max-content, 1fr))` : 'grid-auto-flow: column'};
  ${({columns}) => columns ? `grid-template-columns: ${typeof columns === 'number' ? `repeat(${columns}, minmax(max-content, 1fr))` : columns};`: 'grid-auto-flow: column'};
  gap: ${({gap}) => spaceToRem[gap || 'space.100']};
  background-color: #eee;
  border: 1px solid #c0c0c0;
  justify-items: ${({justifyItems}) => justifyItems || 'stretch'};
  justify-content: ${({justifyContent}) => justifyContent || 'stretch'};
  align-items: ${({alignItems}) => alignItems || 'center'};
`;

export const GlobalNavigationRowContainer: React.FC<GridProps> = ({
  children,
  as = 'div',
  ...props
}) => {
  return (
    <StyledGrid as={as} {...props}>
      {children}
    </StyledGrid>
  );
};
