import styled from 'styled-components';
import { ElementType } from 'react';

// styled item depending on the props.as
export const StyledClickable = styled.div
  .withConfig({
    displayName: 'Clickable'
  })
  .attrs((props) => ({
    as: props.as
  }))<{
  as?: ElementType;
  variant?: 'simple-clickable' | 'logo' | 'divider';
  primary?: boolean;
  secondary?: boolean;
}>`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
  background-color: lightblue;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
