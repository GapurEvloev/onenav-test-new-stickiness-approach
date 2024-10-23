import styled from 'styled-components';

interface StyledRowProps {
  isSticky: boolean;
  topOffset: number;
}

export const StyledRow = styled.div<StyledRowProps>`
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'static')};
  top: ${({ isSticky, topOffset }) => (isSticky ? `${topOffset}px` : 'auto')};
  background-color: #fff; /* For visibility */
  z-index: ${({ isSticky }) => (isSticky ? 1000 : 'auto')};
  /* Add additional styles as needed */
`;
