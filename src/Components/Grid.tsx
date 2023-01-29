import '../styles/grid.scss';

export const Grid = () => {
  const cells = Array(16).fill(null);

  return (
    <div className="grid board">
      {cells.map((_, i) => (
        <div key={i} className="tile --grid"></div>
      ))}
    </div>
  )
}
