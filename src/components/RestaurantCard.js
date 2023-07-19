import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
   
    const {resData}=props;
   
   return(
        <div className="res-cards" style={{
          backgroundColor:'#f0f0f0',
        }}>
          <img  alt="res-logo"
          className="res-logo"
          src={CDN_URL}></img>
        <h3>{resData.name}</h3>
        <h4>{resData.cusines.join(",")}</h4>
        <h4>{resData.rating}</h4>
        <h4>{resData.avgTime}</h4>

         </div>
                )
}
export default RestaurantCard;