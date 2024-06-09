import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
    const {name, cuisines, cloudinaryImageId, costForTwo, avgRating, id} = props.resData.info;
return (
    <div className="card">
         <Link to={'/restaurants/'+id} ><img alt="food" src={IMG_URL+cloudinaryImageId}/></Link>
         <h3>{name}</h3>
         <div className="rating">
         <h4> {<i className="fa fa-star"></i>} {avgRating} </h4> 
         <h4>{costForTwo}</h4>
    </div>
         {cuisines.join(', ')}
    </div>
)
};

export default RestaurantCard;