import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  Breakpoints,
  GlobalNavigationRowConfig,
  ResponsiveSetting,
  VisibilityOptions
} from '../../types';
import { generateResponsiveStyles } from '../../utility';

interface GridProps extends Omit<GlobalNavigationRowConfig, 'areas'> {
  children: ReactNode;
  as?: 'div' | 'ol' | 'span' | 'ul';
  testId?: string;
  position: { top: number; scrollY: number; direction: 'up' | 'down' };
}

// Helper function to convert visibility to CSS display property
const visibilityToDisplay = (
  visibility: ResponsiveSetting<VisibilityOptions> | VisibilityOptions
) => {
  let displayValues = `display: grid; `;
  Object.entries(visibility).forEach(([breakpoint, isVisible]) => {
    if (!isVisible) {
      displayValues += `@media (max-width: ${breakpoint}) { display: none; } `;
    }
  });
  return displayValues;
};

const StyledGridInner = styled.div.withConfig({
  displayName: 'GlobalNavigationRowContainer'
})<GridProps>`
  ${({ visibility }) => visibility && visibilityToDisplay(visibility)};
  transition: grid-template-rows 200ms linear;
  max-height: max-content;
  ${({ position: {top, scrollY, direction}, sticky, visibility }) => {
    console.log({top, direction, scrollY, sticky, visibility});
    if((!sticky && typeof(sticky) === 'boolean' && scrollY >= 300 && direction === 'down') || (sticky && typeof(sticky) === 'number' && scrollY >= sticky && direction === 'down')) {
      return `
        grid-template-rows: 0fr;
      `;
    }
      
    return `
      grid-template-rows: 1fr;
    `
  }};
`;

const StyledGrid = styled.div.withConfig({
  displayName: 'GlobalNavigationRowContainer'
})<GridProps>`
  ${({ visibility }) => visibility && visibilityToDisplay(visibility)};
  ${({ columns }) =>
    typeof columns === 'object'
      ? `grid-template-columns: ${
        columns[Breakpoints.SM]
      };${generateResponsiveStyles(
        'grid-template-columns',
        columns,
        Breakpoints.SM
      )}`
      : `grid-template-columns: ${
        typeof columns === 'number'
          ? `repeat(${columns}, minmax(max-content, 1fr))`
          : columns
      };`}
  gap: ${({ gap = '1rem' }) => gap};
  background-color: #eee;
  ${({ position: {scrollY, direction}, sticky }) => {
    if((!sticky && typeof(sticky) === 'boolean' && scrollY >= 300 && direction === 'down') || (sticky && typeof(sticky) === 'number' && scrollY >= sticky && direction === 'down')) {
      return `
        border-bottom: none;
      `;
    }
    return `
      border-bottom: 1px solid #c0c0c0;
    `
  }};
  justify-items: ${({ justifyItems }) => justifyItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  overflow: hidden;
  //transition: all 5s linear;
`;

export const GlobalNavigationRowContainer = React.forwardRef<HTMLElement, GridProps>(
  ({ children, ...props }) => {
    return <StyledGridInner {...props}>
      <StyledGrid {...props}>
        {children}
      </StyledGrid>
    </StyledGridInner>
  }
);
