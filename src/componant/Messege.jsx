import React from "react";

let Messege = (props) => {
  let { items } = props;
  return <>{items.length == 0 && <h3>I am still Hungry</h3>}</>;
};
export default Messege;
