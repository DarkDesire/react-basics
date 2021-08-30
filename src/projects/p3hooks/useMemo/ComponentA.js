import React, { useEffect } from "react";

let renderCount = 1;
const ComponentA = (props) => {
  useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h1>ComponentA. Render times: {renderCount} | From props: {props.count}</h1>
    </div>
  );
};

export default ComponentA;
