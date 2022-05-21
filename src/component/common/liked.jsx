const Liked = ({ item, onLiked }) => {
  let classes = "fa fa-heart";
  if (item.isLike === false) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      onClick={() => onLiked(item)}
    ></i>
  );
};

export default Liked;
