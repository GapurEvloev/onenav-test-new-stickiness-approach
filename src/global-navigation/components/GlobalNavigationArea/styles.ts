import styled from 'styled-components';
import { Breakpoints, breakpointSizes, ClickableAreaConfig } from '../../types';


export const GlobalNavigationAreaContainer = styled.div.withConfig({
  displayName: 'GlobalNavigationAreaContainer'
})<ClickableAreaConfig>`
  padding: 1rem;
  background-color: #dcdcdc;
  flex-wrap: wrap;
  gap: 1rem 0.25rem;

  ${({ gridColumn }) => typeof gridColumn === 'object' ? `grid-column: ${gridColumn[Breakpoints.SM]};` : `grid-column: ${gridColumn};`}
  ${({ justifyContent }) => typeof justifyContent === 'object' ? `justify-content: ${justifyContent[Breakpoints.SM]};` : `justify-content: ${justifyContent};`}
  ${({ visibility }) => visibility ? (typeof visibility === 'object' ? `display: ${visibility[Breakpoints.SM] ? 'flex' : 'none'};` : `display: ${visibility ? 'flex' : 'none'};`) : 'display: flex;'}

  ${props => props.gridColumn && typeof props.gridColumn === 'object' ?
    Object.entries(props.gridColumn).map(([key, value]) => `
        @media (min-width: ${breakpointSizes[key as Breakpoints]}) {
            grid-column: ${value};
        }
    `).join('') :
    `grid-column: ${props.gridColumn};`
  }

  ${props => props.visibility && Object.entries(props.visibility).map(([key, isVisible]) => `
    @media (min-width: ${breakpointSizes[key as Breakpoints]}) {
      display: ${isVisible ? 'flex' : 'none'};
    }
  `).join('')}

  ${props => typeof props.justifyContent === 'object' ? Object.entries(props.justifyContent).map(([key, value]) => `
      @media (min-width: ${breakpointSizes[key as Breakpoints]}) {
        justify-content: ${value};
      }
    `).join('') :
    `justify-content: ${props.justifyContent};`
  }
`;
