let Input = (props) => {

  return (
    <>
      <input type="text" placeholder="Add foods" className="input-box"
      onKeyDown={props.handleOnKeyDown} />
      
    </>
  );
};
export default Input;
