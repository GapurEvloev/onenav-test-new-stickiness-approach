import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { GlobalNavigationRowConfig } from '../../types';
import { createResponsiveStyles, createVisibilityStyles } from '../../utility';

interface GridProps extends Omit<GlobalNavigationRowConfig, 'areas' | 'hideOnScroll'> {
  children: ReactNode;
  as?: 'div' | 'ol' | 'span' | 'ul';
  testId?: string;
}

const gridRowStyles = css<GridProps>`
  ${({ className }) => className && css`
    &.sticky-hidden {
      grid-template-rows: 0fr;
      border-bottom: none;
    }
    
    &.sticky-visible {
      grid-template-rows: 1fr;
      border-bottom: 1px solid #ccc;
    }
  `};
`;

const StyledGridInner = styled.div.withConfig({
  displayName: 'GlobalNavigationRowContainer'
})<GridProps>`
  ${({ visibility }) => visibility && createVisibilityStyles(visibility, 'grid')};
  transition: grid-template-rows 200ms linear;
  max-height: max-content;
  ${gridRowStyles};
`;

const StyledGrid = styled.div.withConfig({
  displayName: 'GlobalNavigationRowContainer'
})<GridProps>`
  ${({ visibility }) => visibility && createVisibilityStyles(visibility, 'grid')};
  ${({ columns }) => columns ? createResponsiveStyles(
    'grid-template-columns',
    columns
  ) : 'grid-template-columns: repeat(12,minmax(min-content, 1fr))'};
  gap: ${({ gap = '1rem' }) => gap};
  background-color: #eee;
  justify-items: ${({ justifyItems }) => justifyItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  overflow: hidden;
`;

export const GlobalNavigationRowContainer: React.FC<GridProps> = ({
  children,
  ...props
}) => (
  <StyledGridInner {...props}>
    <StyledGrid {...props}>{children}</StyledGrid>
  </StyledGridInner>
);
