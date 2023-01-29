import '../styles/board.scss';
import { IBoard } from '../types';
import { Tile } from './Tile';

type Props = {
  board: IBoard;
}

export const Board = ({ board }: Props) => {


  return (
    <div className="board">
      {board.map((cell, i) => (
        !cell ? cell :
        <Tile key={i} value={cell} />
      ))}
    </div>    
  )
}
