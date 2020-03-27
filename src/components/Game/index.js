import React, { useState, useEffect } from 'react';
import iaxios from '../../axios';
import GameDisplay from '../GameDisplay';
import { StyledButton } from '../App/styles';
import { StyledGameContainer, LooseScreen } from './styles';

const Game = () => {
  const [points, setPoints] = useState(0);
  const [started, setStarted] = useState(false);
  const [loose, setLoose] = useState(false);
  const [movie, setMovie] = useState(null);
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (started && !loose) {
      setLoading(true);
      iaxios.get('/game/play').then(({ data }) => {
        setMovie(data.movie);
        setActor(data.actor);
        setLoading(false);
      });
    }
  }, [started, points, loose]);

  const answer = (a) => {
    const postData = { actorId: actor.id, movieId: movie.id, answer: a };
    iaxios.post('/game/play', { ...postData }).then(({ data }) => {
      if (data.state === 'success') {
        setPoints((prevPoints) => {
          return prevPoints + 1;
        });
      } else {
        setLoose(true);
      }
    });
  };

  const reset = () => {
    setLoose(false);
    setPoints(0);
    setLoading(true);
  };

  if (loose) {
    return (
      <LooseScreen className="container">
        <h2>Perdu, vous avez fait {points} points.</h2>
        <StyledButton onClick={reset}>Retentez votre chance ?</StyledButton>
      </LooseScreen>
    );
  }

  return (
    <StyledGameContainer className="container">
      {!started ? (
        <StyledButton className="start-button" onClick={() => setStarted(true)}>
          Prêt à jouer ?
        </StyledButton>
      ) : (
        <>
          <GameDisplay
            actor={actor}
            movie={movie}
            loading={loading}
            answer={answer}
            points={points}
          />
        </>
      )}
    </StyledGameContainer>
  );
};

export default Game;
