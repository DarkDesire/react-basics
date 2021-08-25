import React from "react";
import './Custom.css'

// https://transform.tools/css-to-js
const styles = {
  innerDiv: {
    textAlign: "center",
    margin: "auto",
    width: "60%",
    border: "3px solid black",
    backgroundColor: "#73AD21",
    padding: "70px 0"
  },
  outerDiv: { 
    padding: "70px 0", 
    backgroundColor: "red" }
}

function App() {
  return (<div style={styles.outerDiv}>
    <div style={styles.innerDiv}>This is a green box</div>
  </div>)
}

export default App;
