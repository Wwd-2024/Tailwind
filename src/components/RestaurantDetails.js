
import Shimmer from "./Shimmer";
import {useRestaurantMenu} from '../utils/useRestaurantMenu'
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {

   
    const {resID} = useParams();

    const resDetail = useRestaurantMenu(resID);

   

    if(resDetail === null) {
        return <Shimmer />;
    }


    const {name, cuisines,avgRating, costForTwo} = resDetail?.data?.cards[2]?.card?.card?.info;
    const resMenu= resDetail?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;


   
    return (
        <div className="detail-container">
            <div className="res-info">
                <h3>{name}</h3> 
                  {cuisines.join(', ')}
                <div className="rating">
                     <h4> {<i className="fa fa-star"></i>} {avgRating} </h4> 
                    <h4>Rs. {costForTwo/100}</h4> 
                </div>
            </div>

            <div className="res-menu">
                
                {resMenu.map((res)=> {
                  return (  
                    <div  key={Math.random()}>
                         <h2 className="menu-title">{res.card.card?.itemCards && res.card.card.itemCards.length !== 0 ? res.card?.card?.title :""}</h2> 
                             {
                             res.card.card?.itemCards?.map(item => {
                              
                                 return (
                                      <div className="" key={'ll'+ Math.random()} > 
                                         <br/>
                                        <h4>{item.card.info?.name}  </h4>
                                        <h5>Rs. {item.card.info?.price/100 } </h5>
                                   
                                        <div>  {item.card.info?.description} </div>
                                       </div>

                                )
                             })
                         }
                 
                 </div>
                 )})
                 }
           </div>
         </div>
    );
}

export default RestaurantDetails;