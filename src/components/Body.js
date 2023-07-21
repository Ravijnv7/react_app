import RestaurantCard from "./RestaurantCard"; 

import { useState,useEffect } from "react";
 const Body =()=>{
  const[listOfRes,setListOfRes]= useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData= async ()=>{
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8892684&lng=77.63991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json =await data.json();
    console.log(json);
    setListOfRes(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
      )
  }
  if(listOfRes==0){
    return <h1>loading...</h1>

  }
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