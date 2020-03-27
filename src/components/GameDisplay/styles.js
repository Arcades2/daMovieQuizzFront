import styled from 'styled-components';

const StyledGameDisplayContainer = styled.div`
  width: 100%;
  h2 {
    margin-bottom: 25px;
    text-align: center;
  }
  .points {
    text-align: center;
    margin-bottom: 15px;
  }
  .image-container,
  .button-container {
    display: flex;
    justify-content: space-around;
  }
`;

const ImageDisplay = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin: 0 15px;
  background-image: ${({ background }) =>
    `url(https://image.tmdb.org/t/p/w500/${background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 3rem;
  &:after {
    content: '${({ name }) => name}';
    position: absolute;
    font-size: 1.5rem;
    bottom: -2rem;
    display: block;
    text-align: center;
    width: 100%;
  }
`;

export { StyledGameDisplayContainer, ImageDisplay };
