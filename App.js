
import React from "react";
import ReactDOM from "react-dom/client";

//React Element=>object-when we render into dom then it becomes an HTML ELEMENT

const heading=React.createElement(
  "h1"
,{id:"Heading"},
"Namste react");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
  