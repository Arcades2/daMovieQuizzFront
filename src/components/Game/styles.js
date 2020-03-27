import styled from 'styled-components';

const StyledGameContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LooseScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: 25px;
  }
`;

export { StyledGameContainer, LooseScreen };
