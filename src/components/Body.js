import RestaurantCard from "./RestaurantCard"; 
import resList from "../utils/mokdata";
import { useState } from "react";
 const Body =()=>{
  const[listOfRes,setListOfRes]= useState(resList);
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=>{
            const filterlist=listOfRes.filter((res)=>res.info.avgRating>4.2);
            setListOfRes(filterlist);
          }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
         {listOfRes.map((res)=>(
            <RestaurantCard key={res.info.id} resData={res}/>
         )
        
        ) }
          
        </div>
         
      </div>
  
    )
  }
  export default Body;