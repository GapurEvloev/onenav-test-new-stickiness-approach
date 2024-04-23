import styled from 'styled-components';

// styled item depending on the props.as
export const StyledClickable = styled.div.withConfig({
  displayName: 'StyledClickable'
})<{ as: string }>`
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
