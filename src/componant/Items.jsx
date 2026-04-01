let Items = (props, handleBuyButton) => {
  let { food } = props;

  return (
    <li
      className="list-group-item  
    all-item"
    >
      <span className="list-items"> {food} </span>
      <button
        className="btn btn-outline-danger all-buttons"
        onClick={props.handleBuyButton}
      >
        Add
      </button>
    </li>
  );
};

export default Items;
