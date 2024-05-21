import styled from 'styled-components';

export const GlobalNavigationContainer = styled.div.withConfig({
  displayName: 'GlobalNavigationContainer'
})`
  display: flex;
  flex-direction: column;
  background-color: #dcdcdc;
  position: fixed;
  z-index: 1000;
  will-change: sticky;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  overflow: hidden;
  max-height: max-content;
`;
