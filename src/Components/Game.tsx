import { useContext, useState } from 'react';

import { GameContext } from '../GameProvider';
import { Grid } from './Grid';
import { Board } from './Board';

import { IBoard } from '../types';
import '../styles/game.scss';

const getRandomNum = () => (
  [...'2'.repeat(9), 4].map(n => +n)[Math.floor(Math.random() * 10)]
);

export const Game = () => {
  const { setScore } = useContext(GameContext);
  const initial = Array(16).fill(0);
  const [board, setBoard] = useState<IBoard>(initial);

  const getEmptyCells = () => (
    board
      .map((cell, i) => !cell ? i : null)
      .filter(cell => cell !== null)
  );

  const placeRandomNum = () => {
    const emptyCells = getEmptyCells();
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    return [...board].map((cell, index) => (
      index === randomIndex ? getRandomNum() : cell
      ));
    };
    
    const resetGame = () => {
      setScore(0);
      // setBoard(initial);
      setBoard(current => placeRandomNum());
      console.log(board);
  }

  return (
    <div className="game">
      <button
        className="button is-warning"
        type="button"
        onClick={resetGame}
      >
        Reset
      </button>

      <Grid />
      <Board board={board} />
      <p className="game__message"></p>
    </div>
  );
};
