import React from 'react';
import PropTypes from 'prop-types';
import { StyledGameDisplayContainer, ImageDisplay } from './styles';
import { StyledButton } from '../App/styles';

const propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
  }),
  answer: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  points: PropTypes.number.isRequired,
};

const defaultProps = {
  movie: null,
  actor: null,
};

const GameDisplay = ({ movie, actor, answer, loading, points }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <StyledGameDisplayContainer>
      <h2>
        {actor?.gender === 1
          ? 'Cette actrice a t-elle jouée dans ce film ?'
          : 'Cet acteur a t-il joué dans ce film ?'}
      </h2>
      <div className="points">Points: {points}</div>
      {actor && movie && (
        <>
          <div className="image-container">
            {/* eslint-disable camelcase */}
            <ImageDisplay background={actor.profile_path} name={actor.name} />
            <ImageDisplay background={movie.poster_path} name={movie.title} />
            {/* eslint-enable camelcase */}
          </div>
          <div className="button-container">
            <StyledButton onClick={() => answer(1)}>Oui</StyledButton>
            <StyledButton onClick={() => answer(0)}>Non</StyledButton>
          </div>
        </>
      )}
    </StyledGameDisplayContainer>
  );
};

GameDisplay.propTypes = propTypes;
GameDisplay.defaultProps = defaultProps;

export default GameDisplay;
