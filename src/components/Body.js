import RestaurantCard from "./RestaurantCard"; 
import resObj from "../utils/mokdata";
 const Body =()=>{
    return(
      <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
          <RestaurantCard resData={resObj}/>
          
          
        </div>
         
      </div>
  
    )
  }
  export default Body;