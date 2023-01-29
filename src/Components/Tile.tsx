import '../styles/tile.scss';

type Props = {
  value: number;
}

export const Tile = ({ value }: Props) => {
  return (
    <div className={`tile tile--${value}`}>{value || ''}</div>
  )
}
