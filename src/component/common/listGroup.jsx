const ListGroup = (props) => {
  const { currentGenre, onGenreSelected, genres, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          onClick={() => onGenreSelected(genre[valueProperty])}
          key={genre[valueProperty]}
          style={{ cursor: "pointer" }}
          className={
            genre[valueProperty] === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps ={
    textProperty : "name",
    valueProperty : '_id'
};

export default ListGroup;
