import React, { useState } from 'react';

interface Context {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const GameContext = React.createContext<Context>({
  score: 0,
  setScore: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: Props) => {
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{ score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};
