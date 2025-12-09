import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
    const { resData } = props;

    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, } = resData?.info;
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo"
            />
            <h3 className="res-name">{name}</h3>
            <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
            <h4 className="res-rating">{avgRating}   ⭐</h4>
            <h4 className="res-delivery-time">{sla.deliveryTime} mins</h4>
            <h4 className="res-cost-for-two">{costForTwo}</h4>
        </div>
    );
}