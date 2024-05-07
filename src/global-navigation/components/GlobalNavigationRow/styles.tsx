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
  border: 1px solid #c0c0c0;
  justify-items: ${({ justifyItems }) => justifyItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
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
