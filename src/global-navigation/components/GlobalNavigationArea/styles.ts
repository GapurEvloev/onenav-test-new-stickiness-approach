import styled from 'styled-components';
import { createResponsiveStyles, createVisibilityStyles } from '../../utility';
import { ClickableAreaConfig } from '../../types';

type GlobalNavigationAreaProps = Omit<ClickableAreaConfig, 'items'>;

export const GlobalNavigationAreaContainer = styled.div<GlobalNavigationAreaProps>`
  padding: 1rem;
  background-color: #dcdcdc;
  flex-wrap: wrap;
  gap: 1rem 0.25rem;
  display: flex;

  ${({ gridColumn }) => gridColumn && createResponsiveStyles('grid-column', gridColumn)};
  ${({ justifyContent }) => justifyContent && createResponsiveStyles('justify-content', justifyContent)};
  ${({ visibility }) => visibility && createVisibilityStyles(visibility)};
  ${({ order }) => order && createResponsiveStyles('order', order)};
  ${({ justifyItems }) => justifyItems && createResponsiveStyles('justify-items', justifyItems)};
  ${({ alignItems }) => alignItems && createResponsiveStyles('align-items', alignItems)};
  ${({ alignContent }) => alignContent && createResponsiveStyles('align-content', alignContent)};
  ${({ gap }) => gap && createResponsiveStyles('gap', gap)};
  ${({ justifySelf }) => justifySelf && createResponsiveStyles('justify-self', justifySelf)};
`;