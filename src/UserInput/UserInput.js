import React from "react";

const style = {
  margin: "0 550px",
  width: "300px",
  height: "30px",
};

const userInput = (props) => {
  return (
    <input
      style={style}
      type="text"
      onChange={props.changed}
      value={props.name}
    />
  );
};

export default userInput;
