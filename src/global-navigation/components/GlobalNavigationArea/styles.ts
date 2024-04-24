import styled from 'styled-components';
import { Breakpoints, ClickableAreaConfig } from '../../types';
import { generateResponsiveStyles, getVisibilityStyles } from '../../utility';

type GlobalNavigationAreaProps = Omit<ClickableAreaConfig, 'items'>;

export const GlobalNavigationAreaContainer = styled.div.withConfig({
  displayName: 'ClickableArea'
})<GlobalNavigationAreaProps>`
  padding: 1rem;
  background-color: #dcdcdc;
  flex-wrap: wrap;
  gap: 1rem 0.25rem;
  display: flex;

  ${({ gridColumn }) => typeof gridColumn === 'object' ? `grid-column: ${gridColumn[Breakpoints.SM]};
    ${generateResponsiveStyles('grid-column', gridColumn, Breakpoints.SM)}
  ` : `grid-column: ${gridColumn};`}

  ${({ justifyContent }) =>
      typeof justifyContent === 'object' ? `
    justify-content: ${justifyContent[Breakpoints.SM]};
    ${generateResponsiveStyles('justify-content', justifyContent, Breakpoints.SM)}
  ` : `justify-content: ${justifyContent};`}

  ${({ visibility }) => (visibility ? getVisibilityStyles(visibility) : '')}
`;
