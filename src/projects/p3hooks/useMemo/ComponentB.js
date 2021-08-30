import React, { useEffect } from "react";

let renderCount = 1;
const ComponentB = (props) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h1>ComponentB. Render times: {renderCount} | From props: {props.count}</h1>
    </div>
  );
};

export default ComponentB;
