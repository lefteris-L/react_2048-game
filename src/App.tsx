import { Game } from './Components/Game';
import './app.scss';
import { GameProvider } from './GameProvider';

export function App() {
  return (
    <div className="App">
      <div className="App__container">
        <GameProvider>
          <Game />
        </GameProvider>
      </div>
    </div>
  );
};
