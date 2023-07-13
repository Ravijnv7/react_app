
import React from "react";
import ReactDOM from "react-dom/client";

//React Element=>object-when we render into dom then it becomes an HTML ELEMENT


//JSX=>we can use jsx to create html element using this easily in react
// mearge the html and javascript
//create h1 tag using jsx// jsx is not html inside javascript,html like syntax or xml

//jsx(transpiled before it reaches the js engine)=>transpiling is done by parcel-Babel 
//react element=> 
const number=1000;
const Headingcomponent =()=>(
  <div id="container">
   <h2>{100+200}</h2> 
   <h1 className="heading">namste ravi</h1>
  </div>
);
const elem=<span>react element</span>
const title= (
<h1 className="heading" tabIndex="5">
  {elem}
  <Headingcomponent/>
  Namstre ravi how are you
</h1>
);

//React component
//class based component
//fucntional based 
//react functional component=>simple javascript function
 /*const Headingcomponent=()=>{
  return <h1 className="heading">Namste ravi functional component</h1>
 };//return jsx component;
 */
//react fragmaent;
//functional component;
const Sa =()=>(
  <>
    <div id="container1">
      <h1>ravi kumar</h1>
    </div>
    <div id="container2">
      <h2>saching</h2>
    </div>
    </>
);
 



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sa/>);
  