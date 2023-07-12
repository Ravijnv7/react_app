
import React from "react";
import ReactDOM from "react-dom/client";

//React Element=>object-when we render into dom then it becomes an HTML ELEMENT

const heading=React.createElement(
  "h1"
,{id:"Heading"},
"Namste react");
console.log(heading);
//JSX=>we can use jsx to create html element using this easily in react
// mearge the html and javascript
//create h1 tag using jsx// jsx is not html inside javascript,html like syntax or xml

const jsxheading=<h1 id="heading">Namstre ravi</h1>;
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
  