import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  padding: 15px 50px;
  flex-grow: 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 0.5;
  }
`;

export { StyledButton };
