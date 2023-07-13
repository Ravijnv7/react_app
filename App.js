
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header(-logo component nav item)
 * body
 * -search (bar ->input)
 * restaurant card (container)
 * {img,
 * name of res,star rating,cuisine,delivery time
 * }
 * footer->copyright disclamier,address,contact links
 *
 */
const Header =()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/d0/8e/3d/d08e3d52-6a71-d545-c853-4e2c5568d307/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>


      </div>
    </div>
  )
}
const ReastaurantCard =()=>{
  return(
<div className="res-cards">
  <h3>Meghna foods</h3>
</div>
  )
}
const Body =()=>{
  return(
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <ReastaurantCard/>
      </div>
       
    </div>

  )
}
const AppLayout =()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
  